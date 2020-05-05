package com.example.restservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gcp.vision.CloudVisionTemplate;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;



@RestController
public class VisionController {

	/**ResourceLoader used to get image from url*/
	@Autowired private ResourceLoader resourceLoader;

	/**google vision api*/
	@Autowired private CloudVisionTemplate cloudVisionTemplate;


	/**
	 * Receive get request from the client, send back a json
	 * @param url url of the image
	 * @param expect expected string
	 * @return the json contains ocr result and similarity
	 */
	@GetMapping("/ocr")
	public OcrResult ocr(@RequestParam(value = "url") String url, @RequestParam(value = "expect") String expect) {
		System.out.println("Request received " + DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss").format(LocalDateTime.now()));
		Resource image = this.resourceLoader.getResource(url);
		String textFromImage = this.cloudVisionTemplate.extractTextFromImage(image);
		System.out.println("ocr_result: " + textFromImage);
		System.out.println("expect: " + expect);
		System.out.println("url: " + url);
		return new OcrResult(textFromImage, compareString(textFromImage, expect));
	}

	/**
	 * get similarity of two strings
	 * @param first first string
	 * @param second second string
	 * @return the similarity of two strings
	 */
	private double compareString(String first, String second) {
		first = first.trim();
		second = second.trim();
		int len1 = first.length();
		int len2 = second.length();
		int[][] dif = new int[len1 + 1][len2 + 1];
		for (int a = 0; a <= len1; a++) {
			dif[a][0] = a;
		}
		for (int a = 0; a <= len2; a++) {
			dif[0][a] = a;
		}
		int temp;
		for (int i = 1; i <= len1; i++) {
			for (int j = 1; j <= len2; j++) {
				if (first.charAt(i - 1) == second.charAt(j - 1)) {
					temp = 0;
				} else {
					temp = 1;
				}
				dif[i][j] = min(dif[i - 1][j - 1] + temp, dif[i][j - 1] + 1,
						dif[i - 1][j] + 1);
			}
		}
		return  1 - (double) dif[len1][len2] / Math.max(first.length(), second.length());
	}

	private static int min(int... is) {
		int min = Integer.MAX_VALUE;
		for (int i : is) {
			if (min > i) {
				min = i;
			}
		}
		return min;
	}
}