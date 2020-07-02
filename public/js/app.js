
fetch('http://localhost:3000/weather?address=raleigh').then((response) => {
    response.json().then( (data) => {
        if(data.error){
            console.log('Error', data.error);
        } else{
            console.log('Data', data.data);
        }
    })
})