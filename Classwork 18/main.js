console.log('Начало кода');

const randomJokePromise = fetch('https://official-joke-api.appspot.com/random_joke');

console.log('Конец синхронного кода');
  

//randomJokePromise.then(
 //   (resultOfRequest) => {
   // console.log(resultOfRequest);
   //})

   randomJokePromise.
   then((resultOfRequest) => {
    return resultOfRequest.json();

   })
   .then(
    (body) => {
        console.log(body)
    }

   )

   // Можна сразу вот так, не присваивая промис в переменную
   // fetch('https://official-joke-api.appspot.com/random_joke'
   





   function doSomeWithResponseBody(responseBody) {
    const bodyElement = document.querySelector('body');
    const firstPartOfJokeElement = document.createElement('p');
    firstPartOfJokeElement.textContent = responseBody.setup;
    bodyElement.append(firstPartOfJokeElement);

    
    const secondPartOfJokeElement = document.createElement('p');
    secondPartOfJokeElement.textContent = responseBody.punchline;
    bodyElement.append(secondPartOfJokeElement);
}
   

   