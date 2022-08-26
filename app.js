//search input

const rm = new RM();

const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', (e) => {
  //get input text
  const userInput = e.target.value;

  if (userInput !== '') {
    //search for the characters
    rm.searchCharacters(userInput)
      .then((data) => {
        console.log(data.results);
      })
      .catch((err) => console.log(err));
  }
});
