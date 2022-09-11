const apiGOT = 'https://anapioficeandfire.com/api/characters'
fetch(apiGOT)
    .then((response)=> response.json())
    .then ((json) => {
        console.log(json);
    })
    .catch((err)=> console.log(err));

const apiQuotes = 'https://api.gameofthronesquotes.xyz/v1/characters'
    fetch(apiQuotes)
    .then((res)=> res.json())
    .then((obj)=> {
        console.log(obj);
    })
    .catch((err)=> console.log(err));
