const quotesAPI = "https://api.gameofthronesquotes.xyz/v1/characters"

const formContainer = document.querySelector('.form-container');

const main = document.querySelector('main');
const quoteDIV = document.createElement('div');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const allInputs= document.querySelectorAll('input');
    // if (allInputs.target.value) {

    // }
    const name = e.target.lannister.value
    if (!name) {
        window.alert('You must choose a member first!')
    }
    fetch(quotesAPI)
    .then (response => response.json())
    .then ((json)=> {
        quoteDIV.innerHTML='';
        // form.reset();
        for (let i=0; i<json.length; i++) {
            if (json[i].name === name) {
                json[i].quotes.forEach((el) => {
                   const quotes =  document.createElement('p')
                   quotes.textContent = `"${el}"`
                    quoteDIV.append(quotes);
                    formContainer.append(quoteDIV);
                })
            }
        }
    })
} )


// for (let i=0; i<json.length; i++) {
//     if (json[i].name ===  name ) {
//        newArr. push (json[i].quotes);
// }
// }
// for (let i=0; i<json.length; i++) {
// const li = document.createElement('p');
// li.textContent = `${newArr[i]}`
// formContainer.after(li);
// }