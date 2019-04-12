package men.brakh.figures;

import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;
import men.brakh.Models.Figure;

public class Square extends Figure {
    public void onDraw(GraphicsContext gc, Color color) {
        gc.setFill(color);
        gc.strokeRect(startPoint.x, startPoint.y,endPoint.x-startPoint.x, endPoint.x-startPoint.x);
        gc.fillRect(startPoint.x, startPoint.y, endPoint.x-startPoint.x, endPoint.x-startPoint.x);
    }
}
