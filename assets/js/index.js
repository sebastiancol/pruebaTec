const api='https://musicbrainz.org/ws/2/genre/all?limit=10&offset=10&fmt=json'
fetch(api)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);      
        getData(data);
        getPages(data);
    })
    .catch(err=>{
        
        console.error(err);
    })
    .finally('promesa finalizada');


function getData(data){  
    
    for(const i of data.genres){
        
        td.innerHTML+=`
            <tr>
                <td>${i.id}</td>
                <td>${i.disambiguation}</td>
                <td>${i.name}</td>
            </tr>
        `
    }

}

function getPages(data){
    let lift = "";
    //let count = "";
    let result ="";
    //lift+=data.genre-offset.value;
    //count+=data.genre-count;
    result +=lift*data.genres.lenght
  
    pages.innerHTML=`
        <li>${parseInt(result)}</li>
    `
    //return pages

    

}