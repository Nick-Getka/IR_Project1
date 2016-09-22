# IR_Project1
First project (Pre-processing and Indexing) for the Introduction to Information Retrieval class

Table of Contents
	1. Goals
	2. Technology Used
	3. Design

	
	
1) Goals
	
	Parser/Tokenizer
		a) Identify each token
		b) Perform case folding (lowercase)
		c) Identify and store special tokens
			1. Normalize terms (ph.d, PH.D, PhD => phd)
			2. Do not remove monetary values with their symbols
			3. Alphabet-digit (F-16 => f16)
			4. Hyphenated terms keep with and without prefixes ("pre-processing" => "preprocessing" and "processing")
			5. Dates are normalized and invalid dates eliminated
			6. Normalize Number format (1,000 => 1000)
			7. Store file extensions without period
			8. Store email as one term
			9. Store IP addresses
			10. Store URLs
	Index-builder
		Create several indexes
			a. Single term index - do not include stop terms
			b. Single term (including stop terms) positional index
			c. Stem index
			d. Phrase index
	
	Memory Requirement
		The program takes as a memory constraint parameter. This parameter specifies the memory requirements in the 
	term of number of triples, i.e. amount of data that can be kept in memory.  The constraint is set as 1000, 10,000, 
	and 100,000 triples.  This contraint restricts the number of triples kept in memory during the preprocessing and 
	index-building process.  The memory used to run the program itself is assumed to be negligible and the data in
	memory can be written to disk (writen to a txt or csv file) to allow for the processing of more than the specified
	number of triples.

	
	
2) Technology Used
	Language
		The project is written primarily in Javascript.  Javascript was chosen mostly so that I could learn the language
		as well as learn to use the Node.JS framework.
	Framework
		Node.JS is used as a general framework to execute the javascript scripts.

		
		
3) Design 
	The project is set up to modular with every function contained in its own .js file.  This was done to allow for easy
and independent testing of each function.  The script start_project1.js is the starting file and should be executed using
node.  Javascript and Node do not have a standardized project or package structure.  I have made a project/package structure
similar to Java.  Packages are not packages in the the strict sense, they are simply folders that contain all the scripts 
that would have been assembled into a package if the project was written in java.  Below is a visual depiction of the project:

	IR_Project1
	|
	 -> start_project1.js
	|
	 -> parser_tokenizer
	    |
	     -> parse.js
	    |
	     -> case_fold.js
	    |
	     -> sp_token.js
	|
	 -> Index-builder
		|
		 -> general_IB.js (script for functions that are used to build multiple indexes)
		|
		 -> single_index.js
		|
		 -> pos_index.js
		|
		 -> stem_index.js
		|
		 -> phrase_index.js

	The following sections will provide the tasks accomplished by each js file:
	
	start_project1.js:
		This file starts the program and is the "pipeline" of the project.  The tasks the file accomplishes itself are 
	taking in system arguements, validating data file, index type, and memory constraint, openning data file, passing the data 
	through the various preprocessors and index-builder, and output the final index txt or csv files.
		system arguements:  $1 - path to data file
						    $2 - index type (a - Single Term without stop terms, b - Single term with stop terms as a positional index,
										     c - Stem index, d - Phrase index, e - all)
							$3 - memory constraint (1000, 10000, and 100000)
	parse.js
		This script will parse the psuedo-xml data set
	