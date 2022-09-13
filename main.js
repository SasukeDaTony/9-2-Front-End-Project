const apiGOT = "https://anapioficeandfire.com/api/houses";
fetch(apiGOT)
  .then((response) => response.json())
  .then((json) => {
    console.log(json[0].name);
  })
  .catch((err) => console.log(err));

// const apiQuotes = 'https://api.gameofthronesquotes.xyz/v1/characters'
//     fetch(apiQuotes)
//     .then((res)=> res.json())
//     .then((obj)=> {
//         console.log(obj);
//     })
//     .catch((err)=> console.log(err));





// grabs all form tags and sets up a loop to add event listeners. each button console logs house
const allForms = document.querySelectorAll("form");
for (let forms of allForms) {
  forms.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.dataset.search);
    const house = event.target.dataset.search;
    
  });
}



//loop through entire data, caps at 40 to find a certain house
 // for (let i=0; i<apiGOT.length; i++) {
    //     fetch(apiGOT)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         json.filter(hs => hs)
    //     })
    // }