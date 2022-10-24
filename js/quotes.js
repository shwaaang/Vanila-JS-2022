const quotes = [
    {
        quote: "너 자신을 알라.",
        author: "Socrates",
    },
    {
        quote: "반성하지 않는 삶은 살 가치가 없다.",
        author: "Socrates",
    },
    {
        quote: "법은 법이다. 악법도 법이다.",
        author: "Socrates",
    },
    {
        quote: "네 자식들이 해 주기 바라는 것과 똑같이 네 부모에게 행하라.",
        author: "Socrates",
    },
    {
        quote: "무지를 아는 것이 곧 앎의 시작이다.",
        author: "Socrates",
    },
    {
        quote: "유일한 선은 앎이요. 유일한 악은 무지다.",
        author: "Socrates",
    },
    {
        quote: "돼지가 되어 즐거워하기보다 사람이 되어 슬퍼하리라.",
        author: "Socrates",
    },
    {
        quote: "돼지가 되어 즐거워하기보다 사람이 되어 슬퍼하리라.",
        author: "Socrates",
    },
    {
        quote: "지혜는 부자들을 아름답게 하고 가난을 부드럽게 한다.",
        author: "Socrates",
    },
    {
        quote: "죽음은 인간이 받을 수 있는 축복 중 최고의 축복이다.",
        author: "Socrates"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");
const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;