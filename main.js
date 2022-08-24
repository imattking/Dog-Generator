const breedsURL = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('#breeds');

// fetch breeds list from Dog CEO API
fetch(breedsURL)
    .then( res => res.json() )
    .then( data => {
        const breedsObject = data.message; // turn 'message' into and 'object'
        const breedsArray = Object.keys(breedsObject); // turn ojbect into and array
        for(let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i]; // sets option value to each index of the array, or the breed
            option.innerText = breedsArray[i]; // sets option text (between tags) to each index, or the breed
            select.appendChild(option) // adds current option to the select parent element
        }
    } )
    .catch( err => {
        console.log(`err: ${err}`)
    } );



// set up fetch request for API as user selects breed
select.addEventListener('change', event => {
    let dogURL = `https://dog.ceo/api/${event.target.value}/image/random`;
    console.log(dogURL);
})
//    

fetch('https://dog.ceo/api/breeds/image/random')
    .then( res => res.json() )
    .then( data => {
        console.log(data.message);
    })
    .catch( err => {
        console.log(`err: ${err}`);
    });