package men.brakh.Models;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class FileSaver {
    public void saveToFile(String filepath, FiguresStack figuresStack) throws IOException {
        FileWriter fw = new FileWriter(filepath);
        ObjectMapper mapper = new ObjectMapper();
        mapper.writerWithDefaultPrettyPrinter().writeValue(fw, figuresStack);
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
        }
        try {
            return mapper.readValue(content, FiguresStack.class);
        } catch (IOException e) {
        }
        return null;
    }
}
