package men.brakh;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;
import men.brakh.Controllers.Controller;

public class Frame extends Application {
    public void start(Stage primaryStage) throws Exception {
        String fxmlFile = "/hello.fxml";
        FXMLLoader loader = new FXMLLoader();
        Parent root = loader.load(getClass().getResourceAsStream(fxmlFile));
        primaryStage.setTitle("");
        primaryStage.setScene(new Scene(root));
        primaryStage.show();
        Controller controller = loader.getController();
        controller.setStageAndSetupListeners(primaryStage);



    }

    public static void main(String[] args) {
        launch(args);
    }
}
