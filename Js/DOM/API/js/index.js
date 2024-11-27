
const jokeContent = document.querySelector('.joke-content');
const jokeGenerator = document.querySelector('.joke-generator');


fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,sexist")
    .then(res => res.json())
    .then(data => console.log(data));


function randomJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,sexist")
        .then(res => res.json())
        .then(data => {
            if (data.joke) {
                jokeContent.textContent = data.joke;
            }
            else {
                jokeContent.textContent = data.setup;
            }
        });

}

jokeGenerator.addEventListener('click', randomJoke);
