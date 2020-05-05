package com.example.restservice;

/**
 * Result sent back by the server.
 * Contains the ocr result and similarity between the result and the expected string
 */
public class OcrResult {

	private final String text;
	private final double similarity;

	public OcrResult(String text, double similarity) {
		this.text = text;
		this.similarity = similarity;
	}

	public String getText() {
		return text;
	}

	public double getSimilarity() {
		return similarity;
	}
}
