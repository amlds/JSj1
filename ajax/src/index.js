/* const ul = document.querySelector('#results')
const form = document.querySelector('#search-form')

const fetchMovies = (movieSearch) => {
  ul.innerHTML = "";
  fetch(`http://www.omdbapi.com/?s=${movieSearch}&apikey=8691812a`)
    .then(response => response.json())
    .then((data) => {
      if(data){
        data.Search.forEach(film => {
          const string = `
            <li>
              <img src="${film.Poster}" alt="c'est un film">
              <p>${film.Title}</p>
            </li>
          `
          ul.insertAdjacentHTML('beforeend', string);
        });
      }
    })
}

form.addEventListener('keydown', (event) => {
  setTimeout(() => {
    fetchMovies(event.target.value)
  }, 50);
})
 */
const form = document.querySelector('#form')
console.log(form)

const submitConnect = () => {
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  const request = {
    "email": email,
    "password": password
  }

  console.log(request)

  fetch('https://reqres.in/api/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request)})
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  console.log('send')
  submitConnect();
})
