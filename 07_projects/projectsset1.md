# projects related to Dom

# project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

## project 1

```javascript
console.log("Aryan);

const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    // if (e.target.id === 'orange') {
    //   body.style.backgroundColor = e.target.id;
    // }
  });
});

```

## project 2
``` javascript
const form = document.querySelector('form');

//if i use this height out of form then this use case will give you empty value
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    // Home work in thst 
    if (bmi < 18.6) {
      results.textContent = `Under weight :${bmi}`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.textContent = `Normal weight:${bmi}`;
    } else {
      results.textContent = `Over weight :${bmi}`;
    }
  }
});
```
