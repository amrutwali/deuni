#!/usr/bin/env node

// Function to convert text to Unicode escape sequences
function textToUnicodeEscape(text) {
	return Array.from(text).map(char => {
		const codePoint = char.codePointAt(0);
		if (codePoint <= 0xFFFF) {
			return `\\u${codePoint.toString(16).padStart(4, '0').toUpperCase()}`;
		} else {
			return `\\u{${codePoint.toString(16).toUpperCase()}}`;
		}
	}).join('');
}

// Get the input text from command line arguments
const inputText = process.argv.slice(2).join(' ');

if (!inputText) {
	console.error('Please provide a text to convert.');
	process.exit(1);
}

// Convert the input text and print the result
const unicodeEscapeRepresentation = textToUnicodeEscape(inputText);
console.log(unicodeEscapeRepresentation);
