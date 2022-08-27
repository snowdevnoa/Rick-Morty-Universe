//search input

const rm = new RM();
const ui = new UI();

const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', (e) => {
  //get input text
  const userInput = e.target.value;

  if (userInput !== '') {
    //search for the characters

    rm.searchCharacters(userInput)
      .then((characters) => {
        if (characters === undefined) {
          //show alert
          ui.showError('Wrong show buddy ._.');
        } else {
          console.log(characters);
          //show characters
          ui.displayResults(characters);
        }
      })
      .catch((err) => console.log(err));
  }
});
