package men.brakh.figures;

import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;
import men.brakh.Models.Figure;

public class Triangular extends Figure {
    public void onDraw(GraphicsContext gc, Color color) {
        gc.beginPath();
        gc.moveTo(120, 432);
        gc.lineTo(421, 123);
        gc.quadraticCurveTo(100, 100, 200, 300);
        gc.closePath();
        //   gc.fillRect(startPoint.x, startPoint.y, endPoint.x-startPoint.x, endPoint.y-startPoint.y);
    }
}
