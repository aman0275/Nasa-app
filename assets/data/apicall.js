import axios from 'axios';


async

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });