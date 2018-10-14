package edu.nju.ise.repository.util;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class FileUtil {



    public static void writeFile(String path, List<String> strList){

        Path filePath = Paths.get(path);
        if(Files.exists(filePath)) {
            try {
                Files.delete(filePath);
                Files.createFile(filePath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        //创建BufferedWriter
        try {
            BufferedWriter bfw=Files.newBufferedWriter(filePath);
            for(String str: strList){
                bfw.write(str);
                bfw.write("\n\n");
            }
            bfw.flush();
            bfw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
