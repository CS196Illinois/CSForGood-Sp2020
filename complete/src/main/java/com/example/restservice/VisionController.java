package com.example.restservice;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.vision.v1.AnnotateImageResponse;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.google.cloud.vision.v1.Feature.Type;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gcp.vision.CloudVisionTemplate;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Code sample demonstrating Cloud Vision usage within the context of Spring Framework using Spring
 * Cloud GCP libraries. The sample is written as a Spring Boot application to demonstrate a
 * practical application of this usage.
 */
@RestController
public class VisionController {

	@Autowired private ResourceLoader resourceLoader;

	// [START spring_vision_autowire]
	@Autowired private CloudVisionTemplate cloudVisionTemplate;
	// [END spring_vision_autowire]

	@GetMapping("/getText")
	public String getText(@RequestParam(value = "url", defaultValue = "abc123") String url) {
//		 [START spring_vision_text_extraction]
		Resource image = this.resourceLoader.getResource(url);
		String textFromImage = this.cloudVisionTemplate.extractTextFromImage(image);
		return "Text from image: " + textFromImage;
//		 [END spring_vision_text_extraction]
		//return url;
	}

	@GetMapping("/compareText")
	public String compareText(@RequestParam(value = "url") String url, @RequestParam(value = "expect") String expect) {
		Resource image = this.resourceLoader.getResource(url);
		String textFromImage = this.cloudVisionTemplate.extractTextFromImage(image);
		return compareString(textFromImage, expect);
	}

	@GetMapping("/test")
	public String test(@RequestParam(value = "first") String first, @RequestParam(value = "second") String second) {
		return compareString(first, second);
	}

	private String compareString(String first, String second) {
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
		double similarity =1 - (double) dif[len1][len2] / Math.max(first.length(), second.length());
		return "Similarity of \""+first+"\" and \""+second+"\": " + similarity * 100 + "%";
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