


// random quote Generator functionality
const randomQuote = "https://api.gameofthronesquotes.xyz/v1/random";
fetch(randomQuote)
  .then((response) => response.json())
  //creates p elements and .targaryen selector for appending/positioning of quote.
  .then((json) => {
    console.log(json);
    const quote = document.createElement("p");
    quote.textContent = '"' + json.sentence + '.."';
    quote.classList.add("quote");
    const Targ = document.querySelector(".targaryen");
    const container = document.createElement("div");
    Targ.after(container);
    container.classList.add("quote-container");
    container.append(quote);
    // adds Name and house member for quote
    const speaker = document.createElement("p");
    const name = json.character.name;
    speaker.classList.add("speaker");
    speaker.textContent = name + " from " + json.character.house.name;
    quote.after(speaker);
  })
  .catch ((err)=> console.log(err));



// grabs all form tags and sets up a loop to add event listeners. each button console logs the house

const imgsAPI = "https://thronesapi.com/api/v2/Characters";

//creates variable to check for Jon Snow in the Json data 
const whitelist = { Stark: [{ first: "Jon", last: "Snow" }] };


fetch(imgsAPI)
  .then((response) => response.json())
  .then((json) => {
    const imgDivAll = document.createElement("div");
    imgDivAll.classList.add("img-container");
    const allForms = document.querySelectorAll("form");

    //loops through forms to create event listeners on all form submissions
    for (let forms of allForms) {
      forms.addEventListener("submit", (event) => {
        event.preventDefault();
        const house = event.target.dataset.search;
        imgDivAll.innerHTML = "";
       
        // Loops through Json data to display the images of the members of the house based on form submission that matches the house name
        for (let i = 0; i < json.length; i++) {
          const valid = whitelist[house] || [];
          const isWhitelisted = valid.some(
            (person) =>
              person.first + person.last ===
              json[i].firstName + json[i].lastName
          );
          if (json[i].lastName === house || isWhitelisted) {
            const imgTag = document.createElement("img");
            const imgDivSingle = document.createElement('div');
            imgDivSingle.classList.add('image-div')
            const imgURL = json[i].imageUrl;
            const spanName = document.createElement('span');
            spanName.textContent = `${json[i].firstName} ${json[i].lastName}`
            imgTag.setAttribute("src", `${imgURL}`);
            imgTag.setAttribute("height", "150px");
            imgTag.setAttribute("width", "175x");
            imgDivSingle.append(imgTag);
            imgDivSingle.append(spanName);
            imgDivAll.append(imgDivSingle);
          }
        }
        const childA = document.querySelector(".A");
        childA.after(imgDivAll);
      });
    }
  })
  .catch ((err)=> console.log(err));

//loop through entire data, caps at 40 to find a certain house
// for (let i=0; i<apiGOT.length; i++) {
//     fetch(apiGOT)
//     .then((response) => response.json())
//     .then((json) => {
//         json.filter(hs => hs)
//     })
// }


   // if (json[i].firstName === "Talisa") {
            //   const snowURL = json[2].imageUrl;
            //   const newTagImg = document.createElement("img");
            //   newTagImg.setAttribute("src", `${snowURL}`);
            //   imgDiv.append(newTagImg);
            //   newTagImg.setAttribute("height", "150px");
            //   newTagImg.setAttribute("width", "150px");
            // }