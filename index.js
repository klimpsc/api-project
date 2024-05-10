//"https://www.dnd5eapi.co/api/monsters"

fetch("https://www.dnd5eapi.co/api/monsters").then((data)=>{
    //console.log(data);
    return data.json();
}).then((fetchedData)=>{
    console.log(fetchedData)
})