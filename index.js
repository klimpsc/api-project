fetch('https://www.dnd5eapi.co/api/classes/wizard')
    .then(res => {
        if (res.ok) {
            console.log('success');
            return res.json();
        }   else {
            console.log('not successful')
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

fetch('')
    .then (response => {
        console.log(response);
        return response.blob();
    })
    .then(blob => {
        console.log(blob);
        document.getElementById('Races').src = blob;
    })

