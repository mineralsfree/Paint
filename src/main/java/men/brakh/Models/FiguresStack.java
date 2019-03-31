package men.brakh.Models;

import java.util.Iterator;
import java.util.Stack;

public class FiguresStack {
    private Stack<Figure> figureStack = new Stack<Figure>();
    public Figure pop(){
        if (!figureStack.empty()){
            return figureStack.pop();
        }
        else return null;
    }
    public void push(Figure figure){
        figureStack.push(figure);
    }
    public Iterator getAll(){
        return figureStack.iterator();
    }


}
