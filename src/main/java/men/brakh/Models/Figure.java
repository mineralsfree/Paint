package men.brakh.Models;

import com.fasterxml.jackson.annotation.*;
import javafx.scene.paint.Color;

import java.awt.geom.Point2D;


import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.As;
import men.brakh.figures.Circle;
import men.brakh.figures.Ellipse;
import men.brakh.figures.Square;


@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS, include = As.PROPERTY, property = "@class")
@JsonSubTypes({ @Type(value = Circle.class, name = "Circle"), @Type(value = Ellipse.class, name = "Ellipse"), @Type(value = Square.class, name = "square")  })
public abstract class Figure implements IDrawable {

    @JsonProperty("startPoint")
    public Point2D.Double startPoint;
    @JsonProperty("endPoint")
    public Point2D.Double endPoint;
    @JsonIgnore
    private Color color;
    public Figure(){

    }

    public void setStartPoint(Point2D.Double startPoint) {
        this.startPoint = startPoint;
    }

    public void setEndPoint(Point2D.Double endPoint) {
        this.endPoint = endPoint;
    }
    @JsonIgnore
    public void setColor(Color color) {
        this.color = color;
    }
    @JsonIgnore
    public Color getColor() {
        return this.color;
    }

    public Point2D getStartPoint() {
        return this.startPoint;
    }

    public Point2D getEndPoint() {
        return this.endPoint;
    }

}
