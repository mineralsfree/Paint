package men.brakh.Factory;

import men.brakh.Models.Figure;
import men.brakh.figures.*;

import java.util.HashMap;
import java.util.Map;

public class FigureCreator {
    private FigureFactory currentFactory;

    private Map<String, FigureFactory> factoryMap = new HashMap<String, FigureFactory>();

    public FigureCreator(String currentShape) {
        factoryMap.put("circle", new CircleFactory());
        factoryMap.put("square", new SquareFactory());
        factoryMap.put("triangular", new TriangularFactory());
        factoryMap.put("rectangle", new RectangleFactory());
        factoryMap.put("ellipse", new EllipseFactory());
        this.currentFactory = factoryMap.get(currentShape);
    }

    public Figure create() {
        return this.currentFactory.createFigure();
    }

    public void setFigure(String name) {
        this.currentFactory = factoryMap.get(name);

    }
}

abstract class FigureFactory {
    public abstract Figure createFigure();
}

class TriangularFactory extends FigureFactory {
    public Figure createFigure() {
        return new Triangular();
    }
}

class CircleFactory extends FigureFactory {
    public Figure createFigure() {
        return new Circle();
    }
}

class SquareFactory extends FigureFactory {
    public Figure createFigure() {
        return new Square();
    }
}

class RectangleFactory extends FigureFactory {

    public Figure createFigure() {
        return new Rectangle();
    }
}
class EllipseFactory extends FigureFactory {

    public Figure createFigure() {
        return new Ellipse();
    }
}