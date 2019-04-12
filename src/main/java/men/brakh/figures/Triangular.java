package men.brakh.figures;

import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;
import men.brakh.Models.Figure;

public class Triangular extends Figure {
    public void onDraw(GraphicsContext gc, Color color) {
        double width = Math.abs(endPoint.x - startPoint.x) * (endPoint.x < startPoint.x ? -1 : 1);
        double height = Math.abs(endPoint.y - startPoint.y) * (endPoint.y < startPoint.y ? -1 : 1);
        gc.strokePolygon(new double[]{startPoint.x, startPoint.x + width, startPoint.x},
                new double[]{startPoint.y, startPoint.y + height, startPoint.y + height}, 3);

    }
}
