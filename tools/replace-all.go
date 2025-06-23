package main

import (
	"flag"
	"log"
	"os"
	"strings"
)

// This program takes as arguments a path to given file, and a series of couples of key:replacement pairs.
// For instance: program.exe -file=path/to/file.txt -args="key1:replacement1,key2:replacement2,key3:replacement3"
// It then replaces the keys with the replacements in the file.
func main() {
	var filePath string
	var args string
	flag.StringVar(&filePath, "file", "", "The path to the file to fix")
	flag.StringVar(&args, "args", "", "The key:replacement pairs to replace")
	flag.Parse()

	// read the file
	content, err := os.ReadFile(filePath)
	if err != nil {
		log.Fatalf("Failed to read file: %v", err)
	}

	// split the file into lines
	lines := strings.Split(string(content), "\n")
	keyValuePairs := strings.Split(args, ",")

	var newLines []string

	// replace the keys with the replacements in the file
	for _, line := range lines {
		for _, keyValuePair := range keyValuePairs {
			parts := strings.Split(keyValuePair, ":")
			if len(parts) == 2 {
				line = strings.ReplaceAll(line, parts[0], parts[1])
			} else {
				log.Fatalf("Invalid key:replacement pair: %s", keyValuePair)
			}
		}

		// append the line to the new lines
		newLines = append(newLines, line)
	}

	// write the new lines to the file
	if err := os.WriteFile(filePath, []byte(strings.Join(newLines, "\n")), 0644); err != nil {
		log.Fatalf("Failed to write file: %v", err)
	}
}
