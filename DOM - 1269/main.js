const list = document.querySelector('#players');

const element = list.querySelector(".red");
console.log(element.innerText);


const insertList = (name) => {
  list.insertAdjacentHTML("beforeend", `<li>${name}</li>`);
}

insertList('Luke');
insertList('Anakin');

const list2 = document.querySelectorAll('#fifa-wins li');

list2[list2.length - 1].insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

list2.forEach(li => {
  let pays = li.innerText.split(' ')[0];
  console.log(pays);
  if(pays === "Brazil"){
    li.style.display = "none"
  }
});

const email = document.querySelector('#email');
console.log(email.value);

email.addEventListener('keyup', (e) => {
  console.log(email.value)
})

const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
  console.log('click')
  e.target.classList.toggle('red')
})

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
    debugger
  });
});
