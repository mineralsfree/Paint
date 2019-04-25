package men.brakh.figures;
import men.brakh.Models.Figure;

import java.io.File;

import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

public class FiguresClassLoader {
    private static FiguresClassLoader instance;

    private static List<Class<Figure>> figuresClasses = getActualFigures();

    public static FiguresClassLoader getInstance() {
        if (instance == null) {
            instance = new FiguresClassLoader();
        }
        return instance;
    }

    public static List<Class<Figure>> getFiguresClasses() {
        return figuresClasses;
    }

    private static List<Class<Figure>> getActualFigures() {

        List<Class<Figure>> figures = new ArrayList<>();

        File folder = new File(Paths.get("jarCollection").toAbsolutePath().toString());
        File[] listOfFiles = folder.listFiles();

        if (listOfFiles == null) return figures;

        for (File listOfFile : listOfFiles) {
            if (listOfFile.isFile()) {
                try {
                    JarFile jarFile = new JarFile(listOfFile.getAbsolutePath());
                    Enumeration<JarEntry> e = jarFile.entries();

                    URL[] urls = {new URL("jar:file:" + listOfFile.getAbsolutePath() + "!/")};
                    URLClassLoader cl = URLClassLoader.newInstance(urls);

                    while (e.hasMoreElements()) {
                        JarEntry je = e.nextElement();
                        if (je.isDirectory() || !je.getName().endsWith(".class")) {
                            continue;
                        }
                        String className = je.getName().substring(0, je.getName().length() - 6);
                        className = className.replace('/', '.');

                        Class cls = cl.loadClass(className);

                        if (Figure.class.isAssignableFrom(cls)) {
                            figures.add((Class<Figure>) cls);
                        }


                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }


        return figures;

    }
}