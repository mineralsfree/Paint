package men.brakh.Controllers;

import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.control.Button;
import javafx.scene.control.ColorPicker;
import javafx.scene.input.MouseEvent;
import javafx.scene.paint.Color;
import javafx.stage.Stage;
import men.brakh.Factory.FigureCreator;
import men.brakh.Models.Figure;
import men.brakh.Models.FiguresStack;

import java.awt.geom.Point2D;
import java.net.URL;
import java.util.Iterator;
import java.util.ResourceBundle;

public class Controller implements Initializable {
    private Stage stage;
    private GraphicsContext gc;
    private FiguresStack figuresStack = new FiguresStack();
    private FigureCreator figureCreator = new FigureCreator("circle");
    private Figure currentSelected;
    @FXML
    private Canvas canvas;

    @FXML
    private ColorPicker colorPicker;
    @FXML
    private void pressed(MouseEvent event){
        currentSelected = figureCreator.create();
        gc.setFill(colorPicker.getValue());
        currentSelected.setStartPoint(new Point2D.Double(event.getX(), event.getY()));
        System.out.println(event.getX());
        System.out.println(event.getY());
    }
    @FXML
    private void dragged(MouseEvent event){

        currentSelected.setEndPoint(new Point2D.Double(event.getX(), event.getY()));
        clearCanvas();
        printAll();
        currentSelected.onDraw(gc, currentSelected.getColor());

    }
    private void clearCanvas(){
        gc.clearRect(0,0,canvas.getWidth(), canvas.getHeight());
    }
    @FXML
    private void released(MouseEvent event){
        currentSelected.setEndPoint(new Point2D.Double(event.getX(), event.getY()));
        currentSelected.setColor(colorPicker.getValue());
        figuresStack.push(currentSelected);
        printAll();
        currentSelected.onDraw(gc, currentSelected.getColor());
        currentSelected = null;
    }
    @FXML
    private void setFigure(MouseEvent event){
            figureCreator.setFigure(((Button)event.getSource()).getId());
            currentSelected = figureCreator.create();
    }
    private void printAll(){
        Iterator it = figuresStack.getAll();
        while (it.hasNext()){
            Figure current = (Figure)it.next();

            (current).onDraw(gc, current.getColor());
        }
    }
    public void setStageAndSetupListeners(Stage primaryStage) {
        this.stage = primaryStage;
    }
//    private void setDrawAction(Button button){
//        button.addEventHandler(MouseEvent.MOUSE_CLICKED, new EventHandler<MouseEvent>() {
//            public void handle(MouseEvent event) {
//                gc.setFill(colorPicker.getValue());
//                Figure figure = figureCreator.create();
//                figure.setEndPoint(new Point2D.Double(100,100));
//                figure.setStartPoint(new Point2D.Double(200,300));
//                figure.onDraw(gc);
//
//             gc.fillRect(100, 100, 120,120);
//            }
//        });
//    }
    public void initialize(URL location, ResourceBundle resources) {
        gc = canvas.getGraphicsContext2D();
        gc.strokeRect(0,0,canvas.getWidth(),canvas.getHeight());

    }
}
