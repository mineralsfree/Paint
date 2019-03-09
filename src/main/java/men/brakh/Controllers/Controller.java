package men.brakh.Controllers;

import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.control.Button;
import javafx.scene.input.MouseEvent;
import javafx.scene.paint.Color;
import javafx.stage.Stage;

import java.net.URL;
import java.util.ResourceBundle;

public class Controller implements Initializable {
    private Stage stage;
    private GraphicsContext gc;


    @FXML
    private Canvas canvas;
    @FXML
    private Button draw_sq;

    public void setStageAndSetupListeners(Stage primaryStage) {
        this.stage = primaryStage;
    }
    private void setDrawAction(Button button){
        button.addEventHandler(MouseEvent.MOUSE_CLICKED, new EventHandler<MouseEvent>() {
            public void handle(MouseEvent event) {
                gc.setFill(Color.RED);
             gc.fillRect(100, 100, 120,120);
            }
        });
    }
    public void initialize(URL location, ResourceBundle resources) {
        gc = canvas.getGraphicsContext2D();
        gc.setFill(Color.BLACK);
        gc.fillRect(75,75,100,100);
        setDrawAction(draw_sq);

    }
}
