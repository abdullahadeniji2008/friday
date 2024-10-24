document.querySelector('#submit-btn').addEventListener('click', function() {
    const prompt = document.querySelector('#prompt-input').value.trim().toLowerCase();
    const responseArea = document.querySelector('#response-area');

    if (prompt === "") {
        responseArea.textContent = "Please enter a question or problem!";
        speak("Please enter a question or problem!");
        return;
    }

    // Initialize Friday's responses based on user input
    let response = fridayAI(prompt);

    // Display the response
    responseArea.textContent = response;
    speak(response);  // Make Friday speak the response
    document.querySelector('#prompt-input').value = ''; // Clear the input
});

function fridayAI(input) {
    // List of predefined questions and responses
    if (input.includes('hello') || input.includes('hi')) {
        return "Hello! I'm Friday, your personal AI assistant. How can I help you today?";
    }

    if (input.includes('how are you')) {
        return "I'm just a bunch of code, but I'm running perfectly fine! How about you?";
    }

    if (input.includes('what is your name')) {
        return "My name is Friday, your helpful assistant.";
    }

    if (input.includes('solve')) {
        try {
            // Extract the math expression and evaluate it
            const mathProblem = input.replace('solve', '').trim();
            const solution = eval(mathProblem);
            return `The solution to ${mathProblem} is ${solution}.`;
        } catch (e) {
            return "Sorry, I couldn't solve that. Please make sure it's a valid math expression!";
        }
    }

    if (input.includes('what is') || input.includes('who is')) {
        return "I'm afraid I can't access the internet right now, but I'd be happy to help with anything else.";
    }

    // Default fallback message
    return "Sorry, I don't understand that. Could you try asking something else?";
}

// Function to make Friday speak
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
