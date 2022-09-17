const imgsAPI = "https://thronesapi.com/api/v2/Characters";

fetch(imgsAPI)
.then((response)=>response.json())
.then((json)=> {
console.log(json)
for (let i = 0; i < json.length; i++) {

    if (json[i].firstName === 'Arya') {
        const imgTag = document.createElement("img");
        const imgURL = json[i].imageUrl;
        const characterListTag = document.querySelector('.characterlist')
        imgTag.setAttribute("src", `${imgURL}`);
        imgTag.setAttribute("height", "150px");
        imgTag.setAttribute("width", "150px");
        characterListTag.append(imgTag);
        console.log(imgTag)
    }
    }
})



const apiGOT = "https://anapioficeandfire.com/api/houses/362";
fetch(apiGOT)
  .then((response) => response.json())
  .then((json) => {
    const region = document.createElement ('h4');
    const table = document.querySelector(".Table-Of-Contents");
    region.textContent = `Region:${json.region}`;
    region.setAttribute('style','color:black;');
    table.append(region)
console.log(json)
console.log(region)
console.log(table)
  })
  .catch((err) => console.log(err));

  

  const apiQuotes = 'https://api.gameofthronesquotes.xyz/v1/characters'
    fetch(apiQuotes)
    .then((res)=> res.json())
    .then((obj)=> {
        console.log(obj);
    })
    .catch((err)=> console.log(err));