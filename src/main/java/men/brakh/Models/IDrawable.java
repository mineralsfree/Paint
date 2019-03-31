package men.brakh.Models;


import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;

public interface IDrawable {
    void onDraw(GraphicsContext gc, Color color);

}
