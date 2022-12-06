let button = document.getElementById("buscar");
let section = document.querySelector("section")
button.addEventListener('click', ()=>{
    if (section.style.visibility === 'hidden') {
        section.style.visibility = 'visible';
  } else {
        section.style.visibility = 'hidden';
  }
    enviarApi()
});

async function enviarApi (){
    let data = document.getElementById('data').value;
    let Key = "KUGkSMoT9CN4n4K9P7iHiSaFaUThkUexuHBv734x";
    const returnApi = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${Key}&date=${data}`);
    const resposta = await returnApi.json();
    const guardaDados = resposta;
    console.log(guardaDados);
    console.log(resposta);
    useApiData(guardaDados);
   
};
function useApiData (guardaDados){
    
    document.querySelector("#container").innerHTML = guardaDados.explanation;
    // document.querySelector("#imagem").innerHTML += `<img src="${guardaDados.url}">`;
    document.querySelector("#title").innerHTML = guardaDados.title;

    if (guardaDados.media_type === "image"){
        document.querySelector("#imagem").innerHTML =
         `<img src="${guardaDados.url}" alt="">`
        
    } else {
        document.querySelector("#imagem").innerHTML =
        ` <iframe width="560" height="315" src="${guardaDados.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      
    }
   
};