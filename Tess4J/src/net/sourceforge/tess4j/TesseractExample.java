package net.sourceforge.tess4j;

import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;

import java.io.File;

public class TesseractExample {
    public static void main(String[] args) {
        File imageFile = new File("C:\\Users\\isaac\\IdeaProjects\\CSForGood-Sp2020\\Tess4J\\test\\resources\\test-data\\ICR1.jpg");
        Tesseract instance = new Tesseract();
        instance.setDatapath("C:\\Users\\isaac\\IdeaProjects\\CSForGood-Sp2020\\Tess4J\\tessdata");
        //instance.setLanguage("eng");

        try {
            String result = instance.doOCR(imageFile);
            System.out.println(result);
        } catch (TesseractException e) {
            System.err.println(e.getMessage());
        }
    }
//
//    public static void meme(String result) {
//        System.out.println("making a meme with photoshop");
//        System.out.println(
//                "       _---~~(~~-_.\n" +
//                        "     _{        )   )\n" +
//                        "   ,   ) -~~- ( ,-' )_\n" +
//                        "  (  `-,_..`., )-- '_,)\n" +
//                        " ( ` _)  (  -~( -_ `,  }\n" +
//                        " (_-  _  ~_-~~~~`,  ,' )\n" +
//                        "   `~ -^(    __;-,((()))\n" +
//                        "         ~~~~ {_ -_(())\n" +
//                        "                `\\  }\n" +
//                        "                  { }\n");
//
//        System.out.println(result);
//        System.out.println(
//                "                   __,--\"\"\"\"\"\"\"\"\"--,.\n" +
//                        "             _ -'\"                  _\\ ^-,_\n" +
//                        "          ,-\"                     _/        \\_\n" +
//                        "         ,                    /    \\          \\\n" +
//                        "       ,'                    /_    |           \\\n" +
//                        "      /           _____,--\"\"\"     /         )   \\\n" +
//                        "     /           /               /         (     |\n" +
//                        "    |          /                /      )         |\n" +
//                        "    |         /                |                  \\\n" +
//                        "    (     (_/\\      )                 /            \\\n" +
//                        "     \\        \\_          ____,====\"\"\"    /        |\n" +
//                        "      \\                /\"                /\"\"       |\n" +
//                        "       \\_          _,-\" |___,-'--------'\"          |\n" +
//                        "         \"`------\"\"   --\"                 ,-'      /\n" +
//                        "                /                     ---\"        /\n" +
//                        "                \\___/          __,-----,___       )\n" +
//                        "                    \\     ,--'\"============\"\"\"\"-'\"\n" +
//                        "                     \"-'\" |  |=================/\n" +
//                        "                          /___\\===============/\n" +
//                        "                          /  |=============/\"\n" +
//                        "                           \\   \\_________,-\"\n" +
//                        "                           |   |\n" +
//                        "                           |   |\n"
//        );
//    }
}
