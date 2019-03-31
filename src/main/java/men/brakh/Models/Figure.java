package men.brakh.Models;

import javafx.scene.paint.Color;
import java.awt.geom.Point2D;
public abstract class Figure implements IDrawable{
    public Point2D.Double startPoint, endPoint;
    private Color color;
    public void setStartPoint(Point2D.Double startPoint){
        this.startPoint = startPoint;
    }
    public void setEndPoint(Point2D.Double endPoint){
        this.endPoint = endPoint;
    }
    public void setColor(Color color){this.color = color;}
    public Color getColor(){return this.color;}
}
