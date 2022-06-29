var Fname = document.getElementById('fname')
var Lname= document.getElementById('lname')
var Email = document.getElementById('email')
var Phone = document.getElementById('phone')
var Website = document.getElementById('website')
var btn = document.getElementById('btn');
var cards = document.querySelector('.cards');
var Male = document.getElementById('male')
var Female = document.getElementById('female')
var java = document.getElementById('java')
var cpp = document.getElementById('c++')
var pyhton = document.getElementById('python')
var other = document.getElementById('other')
var form = document.querySelector('form');
let selectImage;


btn.addEventListener('click', function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = []
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  if (!Fname.value||!Lname.value || !Email.value || !Phone.value) {
    alert('ERROR: Please enter all fields!')
  }
  else {
    cards.innerHTML += `
  <div class="card">
  <div class="card-body">
  <h4 class="title">${Fname.value} ${Lname.value}</h4>
 
  <p class="text">${Email.value}</p>
  <p class="text">${Phone.value}</p>
  <p class="text">${Website.value}</p>
  <p class="text">${values} </p>
   <p class="text">${Male.checked ? Male.value : Female.checked ? Female.value : 'Others'}</p>
  

  </div>`

    alert('!!Student Details Submitted Successfully!!')
    form.reset()
  }
});
