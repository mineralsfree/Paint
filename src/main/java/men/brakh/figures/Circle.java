package men.brakh.figures;

import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;
import javafx.scene.paint.Paint;
import men.brakh.Models.Figure;
import men.brakh.Models.ISelectable;

public class Circle extends Figure implements ISelectable {
    public void onDraw(GraphicsContext gc, Color color) {
        gc.setFill(color);
        gc.strokeOval(startPoint.x, startPoint.y, endPoint.x-startPoint.x, endPoint.x-startPoint.x);
        gc.fillOval(startPoint.x, startPoint.y,endPoint.x-startPoint.x, endPoint.x-startPoint.x);
    }
    public void onSelect(GraphicsContext gc) {
        Paint temp = gc.getStroke();
        double tempWidth = gc.getLineWidth();
        gc.setLineWidth(5);
        gc.setStroke(Color.rgb(0,255,0));
        gc.strokeRect(startPoint.x, startPoint.y, endPoint.x-startPoint.x, endPoint.x-startPoint.x);
        gc.setStroke(temp);
        gc.setLineWidth(tempWidth);
    }
}
