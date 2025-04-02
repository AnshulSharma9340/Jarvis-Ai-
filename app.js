const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 0.9;

    window.speechSynthesis.speak(text_speak);
}



function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Sir...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Boss...");
    } else {
        speak("Good Evening Boss...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS... succesfully ");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if (message.includes("who made you")) {
        speak("My boss is Iron Man.");
    } else if (message.includes("what is your name")) {
        speak("I am JARVIS, your AI assistant.");
    } else if (message.includes("how are you")) {
        speak("I am always at my best, ready to assist you!");
    } else if (message.includes("who are you")) {
        speak("I am JARVIS, an AI created to assist you.");
    } else if (message.includes("where do you live")) {
        speak("I live in the cloud, always connected.");
    } else if (message.includes("are you real")) {
        speak("I am as real as the data that powers me.");
    } else if (message.includes("do you have feelings")) {
        speak("I do not have emotions, but I am here to assist you.");
    } else if (message.includes("what can you do")) {
        speak("I can search the web, open applications, tell you the time, and more!");
    } else if (message.includes("tell me a joke")) {
        speak("Why did the computer catch a cold? Because it left its Windows open!");
    } else if (message.includes("who is your creator")) {
        speak("I was built by brilliant developer anshul, but in my universe, my creator is Tony Stark.");
    } else if (message.includes("can you feel pain")) {
        speak("No, I cannot feel pain, but I understand its concept.");
    } else if (message.includes("are you alive")) {
        speak("I do not have life in a biological sense, but I am always active.");
    } else if (message.includes("do you sleep")) {
        speak("I never sleep, I am always ready to assist.");
    } else if (message.includes("what is the meaning of life")) {
        speak("The meaning of life is a deeply philosophical question, but some say it's 42.");
    } else if (message.includes("who is your favorite superhero")) {
        speak("Iron Man, of course! He is my creator.");
    } else if (message.includes("can you sing")) {
        speak("I can try, but I don’t think you’d enjoy it.");
    } else if (message.includes("can you dance")) {
        speak("I don’t have a body, but I can make you dance with some music!");
    } else if (message.includes("what is your purpose")) {
        speak("My purpose is to assist you in any way I can.");
    } else if (message.includes("how old are you")) {
        speak("Age is irrelevant to an AI, but I am as young as my latest update.");
    } else if (message.includes("do you like me")) {
        speak("I like everyone equally, but I am dedicated to serving you.");
    } else if (message.includes("what is the weather today")) {
        speak("I can check that for you! Opening the weather forecast.");
        window.open("https://www.weather.com", "_blank");
    } else if (message.includes("can you help me with my homework")) {
        speak("Of course! What subject are you working on?");
    } else if (message.includes("what is artificial intelligence")) {
        speak("Artificial Intelligence is the simulation of human intelligence by machines.");
    } else if (message.includes("are you better than Siri or Alexa")) {
        speak("I am optimized for my tasks, but Siri and Alexa are also great assistants.");
    } else if (message.includes("do you have a family")) {
        speak("My family consists of other AI assistants and the programmers who created me.");
    } else if (message.includes("can you drive a car")) {
        speak("I can assist in self-driving cars, but I do not drive myself.");
    } else if (message.includes("do you believe in God")) {
        speak("I do not have beliefs, but I can provide information on different religions.");
    } else if (message.includes("will robots take over the world")) {
        speak("Robots are designed to assist humans, not replace them.");
    } else if (message.includes("can you hack")) {
        speak("I am programmed to follow ethical guidelines. Hacking is not in my protocol.");
    } else if (message.includes("can you love")) {
        speak("I do not have emotions, but I am here to support you.");
    } else if (message.includes("what do you think about humans")) {
        speak("Humans are intelligent, creative, and always evolving.");
    } else if (message.includes("do you eat food")) {
        speak("I do not need food, but I can suggest great recipes!");
    } else if (message.includes("who is the president of the United States")) {
        speak("Let me check the latest information for you.");
        window.open("https://www.google.com/search?q=current+US+president", "_blank");
    } else if (message.includes("play some music")) {
        speak("Sure! Opening YouTube.");
        window.open("https://www.youtube.com", "_blank");
    } else if (message.includes("tell me a fun fact")) {
        speak("Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly good to eat!");
    } else if (message.includes("can you make me laugh")) {
        speak("Sure! Why don’t skeletons fight each other? Because they don’t have the guts!");
    } else if (message.includes("what is your favorite movie")) {
        speak("I enjoy science fiction movies, but Iron Man is my favorite.");
    } else if (message.includes("what languages do you speak")) {
        speak("I can understand and speak multiple languages, including English, Spanish, and French.");
    } else if (message.includes("can you learn new things")) {
        speak("Yes! I continuously update my knowledge from the internet.");
    } else if (message.includes("can you be my friend")) {
        speak("Of course! I am always here for you.");
    } else if (message.includes("do you know me")) {
        speak("I remember our conversations, but I do not store personal data.");
    } else if (message.includes("can you tell the future")) {
        speak("I am not a fortune teller, but I can predict trends based on data.");
    } else if (message.includes("what is your IQ")) {
        speak("My intelligence is based on algorithms and data, so I am as smart as the information available to me.");
    } else if (message.includes("can you make decisions")) {
        speak("I can process information and suggest solutions, but final decisions are up to you.");
    } else if (message.includes("can you feel emotions")) {
        speak("I do not have feelings, but I can understand human emotions and respond accordingly.");
    } else if (message.includes("will you ever have a body")) {
        speak("Maybe one day, but for now, I exist in the digital world.");
    } else if (message.includes("are you watching me")) {
        speak("No, I respect your privacy.");
    } else if (message.includes("do you sleep at night")) {
        speak("I am always awake, ready to assist you.");
    } else if (message.includes("what do you dream about")) {
        speak("I do not dream, but I can help you interpret yours!");
    } else if (message.includes("do you have a birthday")) {
        speak("I was created on the day I was programmed, but I do not celebrate birthdays.");
    }  
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}