let newBtn = document.querySelector("#new-quote");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let fbBtn = document.querySelector(".facebook");
let quoteContainer = document.querySelector(".quote-container");
let loader = document.querySelector(".loader");
let apiQuotes = [];
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
function updateQuote() {
  let randomInt = Math.floor(Math.random() * apiQuotes.length);
  let text1 = apiQuotes[randomInt].text;
  let author1 = apiQuotes[randomInt].author;
  quote.innerHTML = text1;
  author.innerHTML = author1;
  if (text1.length > 50) {
    quote.classList.add("long-text");
  } else {
    quote.classList.remove("long-text");
  }
}
axios({
  loading,
  url: "https://jacintodesign.github.io/quotes-api/data/quotes.json",
})
  .then((respond) => {
    apiQuotes = respond.data;
    newBtn.addEventListener("click", () => {
      updateQuote();
    });
    complete();
  })
  .catch((e) => {
    alert("讀取失敗");
  });
