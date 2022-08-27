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
                    <span>Location: ${character.location.name}</span>
                    <span>Status: ${character.status}</span>
                    <span>Species: ${character.species}</span>

                </section>
            </div>  
            </article>
        
        `;
    });

    //ouput characters

    document.querySelector('.container.results').innerHTML = output;
  }

  showError(msg, className) {
    this.clearError();
    //create error element and add message and class
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(msg));
    div.className = className;

    //insert into DOM
    const parentEle = document.querySelector('.search');
    const childNode = document.getElementById('search');

    parentEle.insertBefore(div, childNode);

    //Timeout after 3 sec
    setTimeout(() => {
      this.clearError();
    }, 3000);
  }

  clearError() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
