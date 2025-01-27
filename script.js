function checkVowels() {
    // Get text from the textarea
    let text = document.getElementById("inputText").value;
    
    // Validate if text is entered
    if (!text.trim()) {
        alert("Please enter some text!");
        return;
    }

    // Initialize vowel count
    let vowelCount = 0;
    // Convert text to lowercase for uniform checking
    text = text.toLowerCase();

    // Loop through each character in the text
    for (let char of text) {
        if (isVowel(char)) {
            vowelCount++;
        }
    }

    // Display the result
    const result = document.getElementById("result");
    result.textContent = "Total Vowels: " + vowelCount;
}

// Function to check if a character is a vowel
function isVowel(char) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    return vowels.has(char);
}
