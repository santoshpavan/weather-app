console.log('Client side JS file is loaded!');

// query selection by tag
const weather_form = document.querySelector('form');
const search_input = document.querySelector('input');
// query selection by id
const message = document.querySelector('#message');

weather_form.addEventListener('submit', (event) => {
    // to prevent the reload of the page
    event.preventDefault();
    let url = 'http://localhost:3000/weather?address=' + search_input.value;

    fetch(url).then((response) => {
        response.json().then( (data) => {
            if(data.error){
                message.textContent = data.error;
            } else{
                message.textContent = data.data;
            }
        });
    });
});