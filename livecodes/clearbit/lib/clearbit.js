const authorization = "Bearer sk_105a0cf7ee4e4094ecf047f60b838e9b";
const url = "https://person.clearbit.com/v1/people/email/"

const form = document.querySelector('#clearbitForm');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userLocation = document.querySelector('#userLocation');

const displayInfo = (value) => {
  userName.innerText = value.name;
  userEmail.innerText = value.email;
  userLocation.innerText = value.location;
}
const fetchData = (email) => {
  fetch(`${url}${email}`, {
    method: "GET",
    headers: {
      'Authorization': authorization,
      'Content-Type': 'application/json'
      }
  })
    .then(response => response.json())
    .then((data) => {
      const value = {
        name: data.name.fullName,
        email: data.email,
        location: data.geo.city
      }
      displayInfo(value);
    })
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form[0].value;
  fetchData(email);
});
