package net.sourceforge.tess4j;

import java.io.File;

public class TesseractExample {
    public static void main(String[] args) {
        File imageFile = new File("/Users/Chirag/IdeaProjects/CSForGood-Sp2020/Tess4J/test/resources/test-data/ICR1.jpg");
        Tesseract instance = new Tesseract();
        instance.setDatapath("/Users/Chirag/IdeaProjects/CSForGood-Sp2020/Tess4J/tessdata");
        //instance.setLanguage("deu");

        try {
            String result = instance.doOCR(imageFile);
            System.out.println(result);
        } catch (TesseractException e) {
            System.err.println(e.getMessage());
        }
    }
}
