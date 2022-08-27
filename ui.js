class UI {
  displayResults(charArray) {
    let output = '';

    charArray.forEach(function (character) {
      output += `
        
            <article>
             
            <div class='flex card'>
                <img src='${character.image}'/>
                <section class='box'>
                    <h2>${character.name}</h2>    
                    <span>${character.location.name}</span>
                    <span>${character.status}</span>
                    <span>${character.species}</span>

                </section>
            </div>  
            </article>
        
        `;
    });

    //ouput characters

    document.querySelector('.container.results').innerHTML = output;
  }

  showError(msg, className) {}
}
