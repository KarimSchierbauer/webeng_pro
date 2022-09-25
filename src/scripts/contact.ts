var form = document.getElementById('contact-form');

if(form){
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // @ts-ignore
        const firstname = form.elements.firstname.value;
        if(document.getElementById('thankyou') == null){
            const parentDiv = document.getElementById('contactResponseBox');
            const newParagraph = document.createElement('p');
            newParagraph.setAttribute('id','thankyou');
            newParagraph.innerText = `Thank you for contacting us ${firstname}!`;
            parentDiv.appendChild(newParagraph);
        }
        else{
            const newParagraph = document.getElementById('thankyou');
            newParagraph.innerText = `Thank you for contacting us ${firstname}!`;
        }
        
    });
}
