import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

import java.io.File;

public class TesseractExample {
    public static void main(String[] args) {
        Tesseract instance = new Tesseract();
        File testPic = new File("ocrTest.png");

        instance.setLanguage("eng");
        instance.setDatapath("Tess4J/tessdata");

        try {
            System.out.println(instance.doOCR(testPic));
        } catch (TesseractException e) {
            e.printStackTrace();
        }
    }
}
