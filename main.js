const apiGOT = "https://anapioficeandfire.com/api/houses";
fetch(apiGOT)
  .then((response) => response.json())
  .then((json) => {
    console.log(json[0].name + ' icefireAPI');
  })
  .catch((err) => console.log(err));

// const apiQuotes = 'https://api.gameofthronesquotes.xyz/v1/characters'
//     fetch(apiQuotes)
//     .then((res)=> res.json())
//     .then((obj)=> {
//         console.log(obj);
//     })
//     .catch((err)=> console.log(err));

// random quote Generator functionality
const randomQuote = "https://api.gameofthronesquotes.xyz/v1/random"
fetch(randomQuote)
.then((response) => response.json())
//creates p elements and .targaryen selector for appending/positioning of quote.
.then((json) => {
    console.log(json)
    const quote = document.createElement("p");
    quote.textContent ="\""+ json.sentence + "..\"";
    quote.classList.add("quote");
    const Targ = document.querySelector(".targaryen");
    const container = document.createElement('div');
    Targ.after(container);
    container.classList.add('quote-container');
    container.append(quote);
    const speaker = document.createElement('p');
    const name = json.character.name;
    speaker.classList.add('speaker');
    speaker.textContent = name + ' from ' +json.character.house.name;
    quote.after(speaker);
    //creates button for new quote
    const getQuote = document.createElement('input');
})







// grabs all form tags and sets up a loop to add event listeners. each button console logs the house




const imgsAPI = "https://thronesapi.com/api/v2/Characters"

fetch(imgsAPI)
.then((response) => response.json())
.then((json)=> {
    const imgDiv = document.createElement('div');
          imgDiv.classList.add('img-container');
    console.log(json);
   const allForms = document.querySelectorAll("form");
   for (let forms of allForms) {
     forms.addEventListener("submit", (event) => {
       event.preventDefault();
       console.log(event.target.dataset.search);
       const house = event.target.dataset.search;
       const imageArray = [];
       imgDiv.innerHTML='';
       for (let i=0; i<json.length; i++) {
           if (json[i].lastName === house) {
               const imgTag = document.createElement('img');
            const imgURL = json[i].imageUrl
            imgTag.setAttribute('src',`${imgURL}`);
            imgTag.setAttribute('height','150px');
            imgTag.setAttribute('width','150px');
            imgDiv.append(imgTag);
           }
          }
          const childA = document.querySelector('.A');
          section.before(imgDiv);
     });
   }

  
})




//loop through entire data, caps at 40 to find a certain house
 // for (let i=0; i<apiGOT.length; i++) {
    //     fetch(apiGOT)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         json.filter(hs => hs)
    //     })
    // }