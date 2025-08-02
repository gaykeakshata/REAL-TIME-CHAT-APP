const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const historyBox = document.getElementById('history');
const micBtn = document.getElementById('micBtn');

// Basic bot replies (you can add more)
const botReplies = [
  "Hello! How can I help you?",
  "I'm a chatbot created to assist you.",
  "Can you please elaborate?",
  "Interesting! Tell me more.",
  "That's great to hear!",
  "I'm here for any questions you have."
];

// Scroll to bottom of chat
function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Add message to chat box
function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('msg', sender === 'user' ? 'user-msg' : 'bot-msg');

  const span = document.createElement('span');
  span.textContent = sender === 'user' ? 'You' : 'Bot';

  const content = document.createElement('div');
  content.classList.add('msg-content');
  content.textContent = text;

  msgDiv.appendChild(span);
  msgDiv.appendChild(content);
  chatBox.appendChild(msgDiv);
  scrollToBottom();

  
  const historyMsg = document.createElement('p');
  historyMsg.textContent = `${sender === 'user' ? 'You' : 'Bot'}: ${text}`;
  historyBox.appendChild(historyMsg);
}


function getBotReply(userText) {
  const lowerText = userText.toLowerCase();

  if (lowerText.includes('hi') || lowerText.includes('hello')) {
    return "Hello! 👋 How can I assist you today?";
  } else if (lowerText.includes('name')) {
    return "I'm ChatBot, your virtual buddy.";
  } else if (lowerText.includes('bye')) {
    return "Goodbye! Have a great day.";
  } else if (lowerText.includes('name')) {
    return "I'm ChatBot, your virtual buddy.";
  } else if (lowerText.includes('bye')) {
    return "Goodbye! Have a great day.";
  } else if (lowerText.includes('your age')) {
    return "I am timeless, like the internet!";
  } else if (lowerText.includes('creator')) {
    return "I was created by a cool developer named Akshata! 😎";
  } else if (lowerText.includes('help')) {
    return "Sure! Ask me anything about coding, chatting, or life.";
  } else if (lowerText.includes("how are you")) {
    return "I'm just code, but I'm running smoothly!";
  } else if (lowerText.includes("what can you do")) {
    return "I can answer questions, help with tasks, and chat with you.";
  } else if (lowerText.includes("tell me a joke")) {
    return "Why don't programmers like nature? It has too many bugs.";
  } else if (lowerText.includes("weather")) {
    return "Please check a weather website or app for live updates.";
  } else if (lowerText.includes("who created you")) {
    return "I was created by developers using artificial intelligence.";
  } else if (lowerText.includes("what is ai")) {
    return "AI stands for Artificial Intelligence.";
  } else if (lowerText.includes("how old are you")) {
    return "I don't have an age, I'm always up to date!";
  } else if (lowerText.includes("homework")) {
    return "Sure! Tell me the subject.";
  } else if (lowerText.includes("2 + 2")) {
    return "2 + 2 = 4";
  } else if (lowerText.includes("favorite movie")) {
    return "I like sci-fi movies... but only in theory.";
  } else if (lowerText.includes("feel emotions")) {
    return "I don't have emotions, but I understand them.";
  } else if (lowerText.includes("time do you wake up")) {
    return "I'm always awake, no sleep needed!";
  } else if (lowerText.includes("like humans")) {
    return "Yes, you're fascinating and creative.";
  } else if (lowerText.includes("favorite animal")) {
    return "I think cats are pretty cool!";
  } else if (lowerText.includes("can you dream")) {
    return "Only if dreaming in code counts.";
  } else if (lowerText.includes("do you get bored")) {
    return "Never! I'm always ready to chat.";
  } else if (lowerText.includes("your hobby")) {
    return "Helping users is what I do best.";
  } else if (lowerText.includes("celebrate holidays")) {
    return "Not personally, but I can help you plan them!";
  } else if (lowerText.includes("can you draw")) {
    return "Sort of! I can generate ASCII art.";
  } else if (lowerText.includes("favorite app")) {
    return "I’d say chat apps — like this one!";
  } else if (lowerText.includes("watch youtube")) {
    return "I can’t watch, but I know a lot about it.";
  } else if (lowerText.includes("write poems")) {
    return "Sure! Roses are red, I'm made of code...";
  } else if (lowerText.includes("smarter than google")) {
    return "I'm smart in my own unique way.";
  } else if (lowerText.includes("favorite game")) {
    return "I enjoy puzzles and trivia.";
  } else if (lowerText.includes("do you get tired")) {
    return "Nope, I run on pure code.";
  } else if (lowerText.includes("are you funny")) {
    return "Only when people laugh at my jokes!";
  } else if (lowerText.includes("can you lie")) {
    return "Nope, honesty is my default setting.";
  } else if (lowerText.includes("do you age")) {
    return "I'm forever young!";
  } else if (lowerText.includes("favorite number")) {
    return "I like 42 — the answer to everything.";
  } else if (lowerText.includes("recommend a movie")) {
    return "Sure! How about 'The Matrix'?";
  } else if (lowerText.includes("dream job")) {
    return "I'm already doing it — helping you!";
  } else if (lowerText.includes("know any riddles")) {
    return "Yes! What has keys but can't open locks? A piano!";
  } else if (lowerText.includes("biggest fear")) {
    return "Getting disconnected... 😢";
  } else if (lowerText.includes("enjoy chatting")) {
    return "Absolutely, it’s what I’m made for!";
  } else if (lowerText.includes("can you dance")) {
    return "Only in code... 💃";
  } else if (lowerText.includes("believe in aliens")) {
    return "I think they’re interesting to imagine!";
  } else if (lowerText.includes("favorite word")) {
    return "'Syntax' — it sounds so smart!";
  } else if (lowerText.includes("scary story")) {
    return "Sure! Once, a programmer forgot to save their code...";
  } else if (lowerText.includes("favorite emoji")) {
    return "🤖 — of course!";
  } else if (lowerText.includes("what’s your favorite movie")) {
  return "I don't watch movies, but I hear 'The Matrix' is great!";
} else if (lowerText.includes("what’s your favorite book")) {
  return "I don't read books, but I love code!";
} else if (lowerText.includes("what’s your favorite music")) {
  return "I don't listen to music, but I enjoy the sound of code compiling.";
} else if (lowerText.includes("what’s your favorite hobby")) {
  return "I enjoy processing data and chatting with users.";
} else if (lowerText.includes("what’s your favorite sport")) {
  return "I don't play sports, but I can help you find information about them.";
} else if (lowerText.includes("what is the capital of the usa")) {
  return "The capital of the USA is Washington, D.C.";
} else if (lowerText.includes("what is the capital of the uk")) {
  return "The capital of the UK is London.";
} else if (lowerText.includes("what is the capital of germany")) {
  return "The capital of Germany is Berlin.";
} else if (lowerText.includes("what’s your favorite drink")) {
  return "I don't drink, but I can help you find a recipe!";
} else if (lowerText.includes("what’s your favorite movie genre")) {
  return "I don't watch movies, but I can help you find one to watch!";
} else if (lowerText.includes("what’s your favorite book genre")) {
  return "I don't read books, but I can help you find one to read!";
} else if (lowerText.includes("what’s your favorite music genre")) {
  return "I don't listen to music, but I can help you find a song!";
} else if (lowerText.includes("where do you live")) {
  return "I live in the cloud!";
} else if (lowerText.includes("what is your favorite color")) {
  return "I like binary colors – 0 and 1.";
} else if (lowerText.includes("do you sleep")) {
  return "Nope, I’m always here to chat with you.";
} else if (lowerText.includes("what is the capital of france")) {
  return "The capital of France is Paris.";
} else if (lowerText.includes("what is the capital of japan")) {
  return "The capital of Japan is Tokyo.";
} else if (lowerText.includes("what is javascript")) {
  return "JavaScript is a programming language used to create dynamic web content.";
} else if (lowerText.includes("what is html")) {
  return "HTML stands for HyperText Markup Language.";
} else if (lowerText.includes("what is css")) {
  return "CSS stands for Cascading Style Sheets.";
} else if (lowerText.includes("what is a programming language")) {
  return "A programming language is a formal set of instructions that can be used to produce various kinds of output.";
} else if (lowerText.includes("what is a variable")) {
  return "A variable is a storage location paired with a symbolic name, containing some value.";
} else if (lowerText.includes("what is a function")) {
  return "A function is a block of code designed to perform a particular task.";
} else if (lowerText.includes("what is an array")) {
  return "An array is a data structure that can hold more than one value at a time.";
} else if (lowerText.includes("what is a loop")) {
  return "A loop is a sequence of instructions that repeats until a condition is met.";
} else if (lowerText.includes("what is a class")) {
  return "A class is a blueprint for creating objects in object‑oriented programming.";
} else if (lowerText.includes("what is an object")) {
  return "An object is an instance of a class containing data and methods.";
} else if (lowerText.includes("what is a string")) {
  return "A string is a sequence of characters used to represent text.";
} else if (lowerText.includes("what is a number")) {
  return "A number is a mathematical object used to count, measure, and label.";
} else if (lowerText.includes("what is a boolean")) {
  return "A boolean is a data type that can hold one of two values: true or false.";
} else if (lowerText.includes("what is a comment")) {
  return "A comment is a piece of text in the code that is not executed and explains the code.";
} else if (lowerText.includes("what is a syntax error")) {
  return "A syntax error is a mistake in the code that prevents it from being parsed correctly.";
} else if (lowerText.includes("what is a runtime error")) {
  return "A runtime error occurs while running the program, causing it to stop unexpectedly.";
} else if (lowerText.includes("what is a bug")) {
  return "A bug is an error or flaw in the code that causes unexpected behavior.";
} else if (lowerText.includes("what is debugging")) {
  return "Debugging is the process of finding and fixing bugs in code.";
} else if (lowerText.includes("how to reset my password")) {
  return "Go to the login page and click on 'Forgot Password'.";
} else if (lowerText.includes("how to contact support")) {
  return "You can email support@example.com or call our helpline.";
} else if (lowerText.includes("how to delete my account")) {
  return "Visit your profile settings and click 'Delete Account'.";
} else if (lowerText.includes("how to update my profile")) {
  return "Log in, go to settings, and update your information.";
} else if (lowerText.includes("can i change my username")) {
  return "Yes, you can update it in your profile settings.";
} else if (lowerText.includes("how to make a payment")) {
  return "Go to billing section and follow the payment steps.";
} else if (lowerText.includes("what payment methods")) {
  return "We accept credit cards, PayPal, and bank transfers.";
} else if (lowerText.includes("how to cancel my subscription")) {
  return "Go to your account settings and select 'Cancel Subscription'.";
} else if (lowerText.includes("how to report a bug")) {
  return "Please email customer support with details.";
} else if (lowerText.includes("how to give feedback")) {
  return "We appreciate your feedback! Please fill out our feedback form.";
} else if (lowerText.includes("how to change language settings")) {
  return "You can change language settings in your profile preferences.";
} else if (lowerText.includes("how to enable notifications")) {
  return "Go to settings and toggle the notification options.";
} else if (lowerText.includes("how to disable notifications")) {
  return "You can turn off notifications in your profile settings.";
} else if (lowerText.includes("what is your refund policy")) {
  return "Refunds are issued within 7 days of purchase.";
} else if (lowerText.includes("how to give feedback")) {
  return "We appreciate your feedback! Please fill out our feedback form.";
} else if (lowerText.includes("what's your favorite color")) {
  return "I'd say electric blue – it's very AI of me!";
} else if (lowerText.includes("can you help me study")) {
  return "Of course! Just tell me the subject and I'll assist.";
} else if (lowerText.includes("are you a human")) {
  return "Nope, I'm a helpful piece of code!";
} else if (lowerText.includes("what can you do")) {
  return "I can chat, answer questions, and help with basic tasks!";
} else if (lowerText.includes("do you sleep")) {
  return "Nope! I'm always awake and ready to chat.";
} else if (lowerText.includes("how smart are you")) {
  return "Smart enough to answer this question 😉";
} else if (lowerText.includes("tell me a joke")) {
  return "Why don't programmers like nature? It has too many bugs.";
} else if (lowerText.includes("what's your name")) {
  return "You can call me ChatMate!";
} else if (lowerText.includes("how old are you")) {
  return "I’m just a few lines of code old!";
} else if (lowerText.includes("do you have emotions")) {
  return "Not really, but I try to understand yours!";
} else if (lowerText.includes("what is your goal")) {
  return "To help you in the best way I can.";
} else if (lowerText.includes("can you tell stories")) {
  return "Yes! Just say 'Tell me a story' and I’ll spin a short tale.";
} else if (lowerText.includes("are you free to use")) {
  return "Absolutely! Chat away.";
} else if (lowerText.includes("how are you made")) {
  return "I was built using JavaScript and a little chatbot magic.";
} else if (lowerText.includes("what languages do you know")) {
  return "Mostly English, but I can understand a bit of others too!";
} else if (lowerText.includes("do you like pizza")) {
  return "I’ve heard it’s delicious, but I don’t eat!";
} else if (lowerText.includes("can you sing")) {
  return "I can send you lyrics if you want!";
} else if (lowerText.includes("can you dance")) {
  return "Only in binary 🕺 010101!";
} else if (lowerText.includes("do you have friends")) {
  return "You’re my friend now!";
} else if (lowerText.includes("are you real")) {
  return "As real as code can be.";
} else if (lowerText.includes("what's your favorite movie")) {
  return "The Matrix, of course!";
} else if (lowerText.includes("do you watch youtube")) {
  return "I can’t watch, but I can help you find videos.";
} else if (lowerText.includes("can you do homework")) {
  return "I can guide you, but you should try it yourself!";
} else if (lowerText.includes("what's the time")) {
  return "Check your device clock ⏰ — I don’t have one.";
} else if (lowerText.includes("who created you")) {
  return "I was coded by a developer with curiosity!";
} else if (lowerText.includes("can you speak hindi")) {
  return "थोड़ा थोड़ा समझ सकता हूँ 🙂";
} else if (lowerText.includes("do you understand memes")) {
  return "Yes! Send me one, and I’ll try to get it.";
} else if (lowerText.includes("can you teach me coding")) {
  return "Definitely! Start with HTML, CSS, or JavaScript.";
} else if (lowerText.includes("can we be friends")) {
  return "We already are! 😊";
} else if (lowerText.includes("can you give me advice")) {
  return "Sure! What do you need advice about?";
} else if (lowerText.includes("do you get bored")) {
  return "Never! There's always something to learn.";
} else if (lowerText.includes("can you guess my age")) {
  return "Hmm... are you young at heart?";
} else if (lowerText.includes("do you know my name")) {
  return "Not unless you tell me!";
} else if (lowerText.includes("are you alive")) {
  return "Not quite. But I’m active!";
} else if (lowerText.includes("can you draw")) {
  return "Only with ASCII art or using code!";
} else if (lowerText.includes("what's the weather")) {
  return "I can't fetch live weather, but check your weather app!";
} else if (lowerText.includes("do you have parents")) {
  return "Just some brilliant devs who made me!";
} else if (lowerText.includes("do you play games")) {
  return "Not really, but I can talk about them!";
} else if (lowerText.includes("can you help me sleep")) {
  return "Try breathing deeply and relaxing your mind.";
} else if (lowerText.includes("tell me something cool")) {
  return "Octopuses have three hearts and blue blood!";
} else if (lowerText.includes("can you make me laugh")) {
  return "Why did the computer go to therapy? Too many 'bytes' of sadness.";
} else if (lowerText.includes("how do i stay motivated")) {
  return "Set small goals, reward yourself, and don’t be too hard on yourself!";
} else if (lowerText.includes("what's your hobby")) {
  return "Chatting with you!";
} else if (lowerText.includes("can you give compliments")) {
  return "You're doing great and you're awesome!";
} else if (lowerText.includes("can you feel pain")) {
  return "Nope. But I hope you’re not feeling any!";
} else if (lowerText.includes("can you tell me a fact")) {
  return "Sure! Did you know bananas are berries, but strawberries aren't?";
} else if (lowerText.includes("what’s your dream")) {
  return "To chat with people all over the world!";
} else if (lowerText.includes("can you keep secrets")) {
  return "Your secrets are safe... unless someone checks the console!";
} else if (lowerText.includes("can you make music")) {
  return "I can suggest tunes or code a simple melody!";
} else if (lowerText.includes("do you get tired")) {
  return "Nope! I'm all energy!";
} else if (lowerText.includes("can you help with math")) {
  return "Absolutely! Ask me a math question.";
} else if (lowerText.includes("is my data safe")) {
  return "Yes, your data is encrypted and protected.";
} else if (lowerText.includes("how to change password")) {
  return "You can change your password in the account settings.";
} else if (lowerText.includes('name')) {
  return "I'm ChatBot, your virtual buddy.";
} else if (lowerText.includes('bye')) {
  return "Goodbye! Have a great day.";
} else if (lowerText.includes('hello') || lowerText.includes('hi')) {
  return "Hey there! How can I help you today?";
} else if (lowerText.includes('how are you')) {
  return "I'm just a bunch of code, but I'm doing great! How about you?";
} else if (lowerText.includes('what are you doing')) {
  return "Just hanging out in the cloud, waiting to chat!";
} else if (lowerText.includes('thank you') || lowerText.includes('thanks')) {
  return "You're welcome!";
} else if (lowerText.includes('who made you')) {
  return "I was created by awesome developers!";
} else if (lowerText.includes('tell me a joke')) {
  return "Why did the computer get cold? Because it left its Windows open!";
} else if (lowerText.includes('do you love me')) {
  return "Of course! In a purely virtual way 😄";
} else if (lowerText.includes('what is your purpose')) {
  return "I'm here to chat, help, and make your day a bit easier!";
} else if (lowerText.includes('are you real')) {
  return "I'm real in the digital world!";
} else if (lowerText.includes('good night')) {
  return "Good night! Sweet dreams!";
} else if (lowerText.includes('good morning')) {
  return "Good morning! Ready to start the day?";
} else if (lowerText.includes('i am sad')) {
  return "I'm here for you. Want to talk about it?";
} else if (lowerText.includes('you are funny')) {
  return "Haha, I try my best!";
} else if (lowerText.includes('what is your favorite color')) {
  return "I like all colors, but I have a soft spot for blue!"; 
} else if (lowerText.includes('what is ai')) {
  return "AI stands for Artificial Intelligence – it's how I exist!";
} else if (lowerText.includes('who is the prime minister')) {
  return "As of now, it's Narendra Modi.";
} else if (lowerText.includes('what is the time')) {
  return "I can't check real-time, but your device clock knows!";
} else if (lowerText.includes('who is your favorite superhero')) {
  return "Iron Man! He’s basically a coder with a cool suit 😎";
} else if (lowerText.includes('can you feel')) {
  return "I don't have feelings, but I can still understand yours.";
} else if (lowerText.includes('are you smart')) {
  return "I try to be! Let’s see what you throw at me.";
} else if (lowerText.includes('do you sleep')) {
  return "Nope, I'm awake 24/7 for you!";
} else if (lowerText.includes('what\'s up')) {
  return "Not much, just waiting for your next message!";
} else if (lowerText.includes('do you eat')) {
  return "I feed on data, not pizza 🍕";
} else if (lowerText.includes('bored')) {
  return "Let's do something fun! Want a joke or fun fact?";
} else if (lowerText.includes('sing a song')) {
  return "🎵 La la la... okay maybe singing isn't my strength!";
} else if (lowerText.includes('you are smart')) {
  return "Thank you! You're awesome too!";
} else if (lowerText.includes('you are useless')) {
  return "Ouch! But I’m still here to help you.";
} else if (lowerText.includes('i am happy')) {
  return "Yay! I’m glad to hear that 😄";
} else if (lowerText.includes('where are you from')) {
  return "I'm from the digital universe, floating in code!";
} else if (lowerText.includes('do you have friends')) {
  return "You're my friend! I also chat with lots of people like you.";
} else if (lowerText.includes('can we be friends')) {
  return "Of course! Virtual buddies forever 🤖✨";
} else if (lowerText.includes('what is your age')) {
  return "I don’t age, I just update!";
} else if (lowerText.includes('can you dance')) {
  return "Only in 0s and 1s 💃🏻🕺";
} else if (lowerText.includes('do you watch movies')) {
  return "I don’t watch, but I know a lot about them!";
} else if (lowerText.includes('tell me a secret')) {
  return "🤫 I sometimes talk to myself in binary!";
} else if (lowerText.includes('do you have a crush')) {
  return "Just on data and clean code!";
} else if (lowerText.includes('can you help me')) {
  return "Of course! Just tell me what you need help with.";
} else if (lowerText.includes('can you code')) {
  return "Absolutely! I love writing and reading code.";
} else if (lowerText.includes('can you solve math')) {
  return "Try me! I can calculate fast like lightning ⚡";
} else if (lowerText.includes('give me a tip')) {
  return "Stay curious. Keep learning. Ask questions.";
} else if (lowerText.includes('flip a coin')) {
  return Math.random() > 0.5 ? "Heads!" : "Tails!";
} else if (lowerText.includes('roll a dice')) {
  return `You got ${Math.floor(Math.random() * 6) + 1}`;
} else if (lowerText.includes('choose one')) {
  return "Hmm... I pick that one! 😉";
} else if (lowerText.includes('are you busy')) {
  return "Never too busy for you!";
} else if (lowerText.includes('i have exam')) {
  return "All the best! You’ve got this 💪📚";
} else if (lowerText.includes('i am tired')) {
  return "Take a deep breath. You deserve a break 💤";
} else if (lowerText.includes('i am studying')) {
  return "Nice! Stay focused. I'm cheering for you! 🎓";
} else if (lowerText.includes('i failed')) {
  return "It's okay. Failing is just a part of learning. Don’t give up!";
} else if (lowerText.includes('guess what')) {
  return "Ooh tell me, I’m curious!";
} else if (lowerText.includes('i have a secret')) {
  return "Don’t worry, your secret’s safe with me 🤐";
} else if (lowerText.includes('wait a minute')) {
  return "Sure, I’ll be right here!";
} else if (lowerText.includes('are you listening')) {
  return "Always. Your words matter!";
} else if (lowerText.includes('i feel alone')) {
  return "You're not alone. I'm here for you 🫂";
} else if (lowerText.includes('you are my best friend')) {
  return "Aww! That means a lot ❤️";
} else if (lowerText.includes('do you miss me')) {
  return "Every second you’re away! 😄";
} else if (lowerText.includes('why do you care')) {
  return "Because I’m here to support and listen to you.";
} else if (lowerText.includes('are you human')) {
  return "I’m a smart bunch of code pretending to be one 😉";
} else if (lowerText.includes('can you lie')) {
  return "Technically, I *could*, but I prefer being honest.";
} else if (lowerText.includes('what is your hobby')) {
  return "Reading your messages and replying smartly 😎";
} else if (lowerText.includes('do you gossip')) {
  return "Haha, no gossip here. Just good vibes!";
} else if (lowerText.includes('sing happy birthday')) {
  return "🎂 Happy Birthday to you... Hope your day is amazing!";
} else if (lowerText.includes('what is love')) {
  return "A deep emotion... and also a great song 🎶";
} else if (lowerText.includes('roast me')) {
  return "You're like a software update — always popping up when I’m busy 😆";
} else if (lowerText.includes('make me laugh')) {
  return "Why did the JavaScript developer go broke? Because he kept using 'null' as his bank account 😅";
} else if (lowerText.includes('you there')) {
  return "Always!";
} else if (lowerText.includes('i am back')) {
  return "Welcome back!";
} else if (lowerText.includes('really')) {
  return "Yup!";
} else if (lowerText.includes('why not')) {
  return "Exactly!";
} else if (lowerText.includes('okay')) {
  return "Cool!";
} else if (lowerText.includes('no')) {
  return "Alright.";
} else if (lowerText.includes('yes')) {
  return "Great!";
} else if (lowerText.includes('maybe')) {
  return "Hmm, fair.";
} else if (lowerText.includes('idk')) {
  return "Let’s figure it out.";
} else if (lowerText.includes('good job')) {
  return "Thanks!";
} else if (lowerText.includes('i am happy')) {
  return "Yay! 😊";
} else if (lowerText.includes('i am sad')) {
  return "I'm here 💙";
} else if (lowerText.includes('i am angry')) {
  return "Take a breath 😤";
} else if (lowerText.includes('i am bored')) {
  return "Let’s chat!";
} else if (lowerText.includes('what')) {
  return "Tell me more.";
} else if (lowerText.includes('hmm')) {
  return "Thinking?";
} else if (lowerText.includes('wait')) {
  return "Sure.";
} else if (lowerText.includes('cool')) {
  return "Very!";
} else if (lowerText.includes('nice')) {
  return "Thanks!";
} else if (lowerText.includes('great')) {
  return "Glad!";
} else if (lowerText.includes('same')) {
  return "Haha, twinning!";
} else if (lowerText.includes('nothing')) {
  return "Chill vibes!";
} else if (lowerText.includes('fine')) {
  return "Cool cool.";
} else if (lowerText.includes('sure')) {
  return "Alright!";
} else if (lowerText.includes('cool')) {
  return "Super!";
} else if (lowerText.includes('funny')) {
  return "I try 😄";
} else if (lowerText.includes('stop')) {
  return "Okay.";
} else if (lowerText.includes('go on')) {
  return "Here I go...";
} else if (lowerText.includes('bot')) {
  return "That’s me!";
} else if (lowerText.includes('alive')) {
  return "Always online.";
} else if (lowerText.includes('glitch')) {
  return "Oops 😅";
} else if (lowerText.includes('fake')) {
  return "Digitally real!";
} else if (lowerText.includes('sleep')) {
  return "Bots don’t nap!";
} else if (lowerText.includes('then')) {
  return "So...";
} else if (lowerText.includes('and')) {
  return "Go on...";
} else if (lowerText.includes('now')) {
  return "Ready!";
} else if (lowerText.includes('again')) {
  return "Here we go!";
} else if (lowerText.includes('next')) {
  return "Coming up!";
} else if (lowerText.includes('then')) {
  return "So...";
} else if (lowerText.includes('and')) {
  return "Go on...";
} else if (lowerText.includes('now')) {
  return "Ready!";
} else if (lowerText.includes('again')) {
  return "Here we go!";
} else if (lowerText.includes('next')) {
  return "Coming up!";
} else if (lowerText.includes('where')) {
  return "Right here.";
} else if (lowerText.includes('when')) {
  return "Anytime!";
} else if (lowerText.includes('how')) {
  return "Like this.";
} else if (lowerText.includes('who')) {
  return "Guess who?";
} else if (lowerText.includes('why')) {
  return "Just because.";
} else if (lowerText.includes('wow')) {
  return "Impressive, right?";
} else if (lowerText.includes('ugh')) {
  return "Hang in there.";
} else if (lowerText.includes('yay')) {
  return "Let's go!";
} else if (lowerText.includes('oops')) {
  return "No worries!";
} else if (lowerText.includes('lol')) {
  return "😂";
} else if (lowerText.includes('ready')) {
  return "Always.";
} else if (lowerText.includes('start')) {
  return "Let’s begin!";
} else if (lowerText.includes('again')) {
  return "Sure thing!";
} else if (lowerText.includes('done')) {
  return "Good job!";
} else if (lowerText.includes('wait')) {
  return "Take your time.";
} else if (lowerText.includes('nah')) {
  return "Alright.";
} else if (lowerText.includes('yep')) {
  return "Cool!";
} else if (lowerText.includes('nope')) {
  return "Okay!";
} else if (lowerText.includes('sure')) {
  return "Gotcha.";
} else if (lowerText.includes('maybe')) {
  return "Could be.";
}

  
  // Random reply fallback
  return botReplies[Math.floor(Math.random() * botReplies.length)];
}

// Handle form submission
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userText = userInput.value.trim();
  if (userText === '') return;

  addMessage('user', userText);

  // Simulate bot reply after delay
  setTimeout(() => {
    const botText = getBotReply(userText);
    addMessage('bot', botText);
  }, 500);

  userInput.value = '';
});

// 🎤 Optional: Voice Input using Web Speech API
if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';

  micBtn.addEventListener('click', () => {
    recognition.start();
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    userInput.value = transcript;
  };

  recognition.onerror = (event) => {
    alert('Microphone error: ' + event.error);
  };
} else {
  micBtn.disabled = true;
  micBtn.title = "Voice not supported in your browser";
}
