package net.sourceforge.tess4j;

import java.io.File;

public class TesseractExample {
    public static void main(String[] args) {
        File imageFile = new File("ocrTest.png");
        Tesseract instance = new Tesseract();

        try {
            String result = instance.doOCR(imageFile);
            System.out.println(result);
        } catch (TesseractException e) {
            System.err.println(e.getMessage());
        }
    }
}
