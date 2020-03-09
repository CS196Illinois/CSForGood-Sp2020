package net.sourceforge.tess4j;

import java.io.File;

public class TesseractExample {
    public static void main(String[] args) {
        File imageFile = new File("C:\\Users\\isaac\\IdeaProjects\\CSForGood-Sp2020\\Tess4J\\test\\resources\\test-data\\eurotext_unlv.png");
        Tesseract instance = new Tesseract();
        instance.setDatapath("C:\\Users\\isaac\\IdeaProjects\\CSForGood-Sp2020\\Tess4J\\tessdata");
        instance.setLanguage("eng");

        try {
            String result = instance.doOCR(imageFile);
            System.out.println(result);
        } catch (TesseractException e) {
            System.err.println(e.getMessage());
        }
    }
}
