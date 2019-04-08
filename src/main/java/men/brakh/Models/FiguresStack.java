package men.brakh.Models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.As;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.Stack;

@JsonTypeInfo(use = JsonTypeInfo.Id.MINIMAL_CLASS, include = As.PROPERTY, property = "@class")
public class FiguresStack {
    private Stack<Figure> figureStack = new Stack<>();

    @JsonCreator
    public FiguresStack() {
    }

    public Figure pop() {
        if (!figureStack.empty()) {
            return figureStack.pop();
        } else return null;
    }

    public void push(Figure figure) {
        figureStack.push(figure);
    }
    @JsonIgnore
    public Iterator getAll() {
        return figureStack.iterator();
    }

    public Stack<Figure> getFigureStack() {
        return figureStack;
    }

    public void setFigureStack(Stack<Figure> figureStack) {
        this.figureStack = figureStack;
    }

    public void saveToFile(String filepath) throws IOException {
        FileWriter fw = new FileWriter(filepath);
        ObjectMapper mapper = new ObjectMapper();
        mapper.writerWithDefaultPrettyPrinter().writeValue(fw, figureStack);
//        Iterator it = this.getAll();
//        fw.write('[');
//        while (it.hasNext()) {
//            Figure current = (Figure) it.next();
//            fw.write(new ObjectMapper().writeValueAsString(current));
//          if (it.hasNext())  fw.write(',');
//        }
//        fw.write(']');
        fw.close();
    }

    public FiguresStack readFromFile(String filePath) {
        ObjectMapper mapper = new ObjectMapper();
        String content = "";
        try {
            content = new String(Files.readAllBytes(Paths.get(filePath)));
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(content);
        try {
            return mapper.readValue(content, FiguresStack.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}