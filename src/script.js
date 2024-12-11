//'https://dummyjson.com/quotes/random'

const baseUrl = "https://dummyjson.com";
const path = "/quotes/random";

const getQuotesRandom = (callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${baseUrl}${path}`, true);
    xhr.send();

    xhr.addEventListener('load', function() {
        const quote = JSON.parse(xhr.responseText);
        console.log(quote);
        callback(quote);
    });
     
};

const updateQuote = (quote) => {
    const textQuote =  document.querySelector('.quote');
    const textAuthor = document.querySelector('.author');
    textQuote.textContent = quote.quote; 
    textAuthor.textContent = quote.author; 
};

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    getQuotesRandom(updateQuote);
});
 
getQuotesRandom(updateQuote);
 