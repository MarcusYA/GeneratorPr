let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quote = 
[
    "Stay Hungry. Stay Foolish. Steve Jobs",
    "Good Artists Copy, Great Artists Steal. Pablo Picasso",
    "Argue with idiots, and you become an idiot. Paul Graham",
    "Be yourself; everyone else is already taken. Oscar Wilde",
    "Simplicity is the ultimate sophistication. Leonardo Da Vinci",
];

btn.addEventListener("click", function() {
    let randomQuote = quote[Math.floor(Math.random() * quote.length)];
    output.innerHTML = randomQuote;
})