class UI {
  displayResults(charArray) {
    let output = '';

    charArray.forEach(function (character) {
      output += `
        
            <article>
             <h2>${character.name}</h2>    
            <div class='flex card'>
                <img src='${character.image}'/>
                <section class='box'>
                    
                    <span>${character.location.name}</span>
                    <span>${character.status}</span>
                </section>
            </div>  
            </article>
        
        `;
    });

    //ouput characters

    document.querySelector('.container.results').innerHTML = output;
  }
}
