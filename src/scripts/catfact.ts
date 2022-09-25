var form = document.getElementById('cat-form');

if(form){
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // @ts-ignore
    const catxhttp = new XMLHttpRequest();
    catxhttp.onload = function() {
        let responseJson = JSON.parse(catxhttp.responseText);
        if(document.getElementById('catfact') == null){
            const parentDiv = document.getElementById('cat-form');
            const newParagraph = document.createElement('p');
            newParagraph.setAttribute('id','catfact');
            newParagraph.innerText = responseJson.fact;
            parentDiv.appendChild(newParagraph);
        }
        else{
            const newParagraph = document.getElementById('catfact');
            newParagraph.innerText = responseJson.fact;
        }
      }
      catxhttp.open("GET", 'https://catfact.ninja/fact');
      catxhttp.send();
    
});
}
