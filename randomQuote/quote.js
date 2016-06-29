var quotes = [
        {author: "Charles Bernstein", quote: "The combination of low culture and high technology is one of the most fascinating social features of the video game phenomenon. Computers were invented as super drones to do tasks no human in her or his right mind (much less left brain) would have the patience, or the perseverance, to manage. Now our robot drones, the ones designed to take all the boring jobs, become the instrument for libidinal extravaganzas devoid of any socially productive component. Video games are computers neutered of purpose, liberated from functionality. The idea is intoxicating; like playing with the help on their night off."},
        {author: "John D. Carmack", quote: "Story in a game is like a story in a porn movie. It\'s expected to be there, but it\'s not that important."},
        {author: "Barack Obama", quote: "It's tough to \"buy American\" when a video game sold by a U.S. company has been developed by Japanese software engineers and packaged in Mexico."},
        {author: "Heather Chaplin & Aaron Ruby", quote: "Show me your children\'s games, and I will show you the next hundred years."},
        {author: "Sid Meier", quote: "In a way, trying to impress people with design or personality or whatever works to promote movies doesn't work with games because it takes the focus off the player who is supposed to be the star. The more the player is the star, the better a game you have."},
        {author: 'Half Life 2', quote: "The right man in the wrong place can make all the difference in the world."},
        {author: "Bioshock", quote: "Is a man not entitled to the sweat of his brow?"},
        {author: "Duke Nukem", quote: "It's time to kick ass and chew bubble gum, and I'm all out of gum."},
        {author: "The Legend of Zelda", quote: "It’s dangerous to go alone; take this!"}
];

function randomQuote() {
    var randomButton = document.querySelector("button.random-quote");
    var quoteTextEl = document.querySelector(".quote-text");
    var authorEl = document.querySelector(".quote-author");

    newRandomQuote(quotes, quoteTextEl, authorEl);

    randomButton.addEventListener("click", function() {
	newRandomQuote(quotes, quoteTextEl, authorEl);
    });
}

function newRandomQuote(quoteArray, quoteElement, authorElement) {
    var newQuote = quoteArray[randomGen(0, quotes.length - 1)];
    quoteElement.innerText = newQuote.quote;
    authorElement.innerText = "-- " + newQuote.author;
}

function randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

randomQuote();
