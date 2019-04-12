package men.brakh.Controllers;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.control.Button;
import javafx.scene.control.ColorPicker;
import javafx.scene.input.MouseEvent;
import javafx.scene.paint.Color;
import javafx.scene.paint.Paint;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import men.brakh.Factory.FigureCreator;
import men.brakh.Models.Figure;
import men.brakh.Models.FiguresStack;
import men.brakh.Models.FileSaver;
import men.brakh.Models.ISelectable;

import java.awt.geom.Point2D;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.Iterator;
import java.util.ResourceBundle;

public class Controller implements Initializable {
    private Stage stage;
    private Figure temp;
    private GraphicsContext gc;
    private FiguresStack figuresStack = new FiguresStack();
    private FigureCreator figureCreator = new FigureCreator("rectangle");
    private Figure currentSelected;
    private Figure selectedToChange;
    private boolean selectFlag = false;
    private final FileChooser fileChooser = new FileChooser();

    @FXML
    private Canvas canvas;
    @FXML
    private ColorPicker colorPicker;

    @FXML
    private void openFile() {
        File file = fileChooser.showOpenDialog(this.stage);
        if (file != null) {
            figuresStack = figuresStack.readFromFile(file.getPath());
            printAll();
        }
    }
    @FXML
    private void saveFile() {
        File file = fileChooser.showSaveDialog(this.stage);
        if (file != null) {
            try {
                new FileSaver().saveToFile(file.getPath(), figuresStack);
            } catch (IOException e) {
                e.printStackTrace();
            }
            printAll();
        }
    }
    @FXML
    private void pressed(MouseEvent event) {
        if (!selectFlag) {
            currentSelected = figureCreator.create();
            gc.setFill(colorPicker.getValue());
            currentSelected.setStartPoint(new Point2D.Double(event.getX(), event.getY()));
        }

    }

    @FXML
    private void dragged(MouseEvent event) {
        if (!selectFlag) {
            currentSelected.setEndPoint(new Point2D.Double(event.getX(), event.getY()));
            clearCanvas();
            printAll();
            currentSelected.onDraw(gc, currentSelected.getColor());
        }
    }

    private void clearCanvas() {
        gc.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
    }

    @FXML
    private void released(MouseEvent event) {
        if (!selectFlag) {
            currentSelected.setEndPoint(new Point2D.Double(event.getX(), event.getY()));
            currentSelected.setColor(colorPicker.getValue());
            figuresStack.push(currentSelected);
            printAll();
            currentSelected.onDraw(gc, currentSelected.getColor());
            currentSelected = null;
        }
    }

    @FXML
    private void setFigure(MouseEvent event) {
        this.selectFlag = false;
        figureCreator.setFigure(((Button) event.getSource()).getId());
        currentSelected = figureCreator.create();
    }

    @FXML
    private void undoAction() {
        temp = figuresStack.pop();
        printAll();
    }

    @FXML
    private void setSelect() {
        this.selectFlag = true;
        if (this.selectFlag) {
            Paint temp = gc.getStroke();
            gc.setStroke(Color.rgb(0, 255, 0));
            gc.strokeRect(0, 0, this.canvas.getWidth(), this.canvas.getHeight());
            gc.setStroke(temp);
        }
    }

    @FXML
    private void redoAction() {
        if (temp != null) {
            figuresStack.push(temp);
            printAll();
        }
    }

    @FXML
    private void changeFigureColor() {
        if (selectFlag && selectedToChange != null) {
            selectedToChange.setColor(colorPicker.getValue());
            clearCanvas();
            printAll();
        }
    }

    @FXML
    private void selectAction(MouseEvent event) {
        if (selectFlag) {
            clearCanvas();
            printAll();
            Iterator it = figuresStack.getAll();
            while (it.hasNext()) {
                Figure current = (Figure) it.next();
                if (current.getStartPoint().getX() > event.getX() ||
                        current.getEndPoint().getX() < event.getX() ||
                        current.getStartPoint().getY() > event.getY() ||
                        current.getEndPoint().getY() < event.getY()) continue;
                if (current instanceof ISelectable) {
                    ((ISelectable) current).onSelect(gc);
                    selectedToChange = current;
                }

            }
        }

    }

    private void printAll() {
        gc.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
        Iterator it = figuresStack.getAll();
        while (it.hasNext()) {
            Figure current = (Figure) it.next();
            (current).onDraw(gc, current.getColor());
        }
    }

    public void setStageAndSetupListeners(Stage primaryStage) {
        this.stage = primaryStage;
    }

    public void initialize(URL location, ResourceBundle resources) {
        gc = canvas.getGraphicsContext2D();
        gc.strokeRect(0, 0, canvas.getWidth(), canvas.getHeight());

    }
}
