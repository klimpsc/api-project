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
