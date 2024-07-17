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

## project 3

```javascript
// both method are same just for your refrence
const clock = document.getElementById('clock');

//const clock = document.querySelector('clock');
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```


### project 4


```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
//console.log(random);

//. used for class and # used for id

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
//validation that value is between 1-100 or positive or is this  a value
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number over 1 ');
  } else if (guess > 100) {
    alert('Please enter a number under 100');
  } else if (guess == 0) {
    alert('Please enter a numbner more than 0');
  } else {
    prevGuess.push(guess); //pushing in array
    if (numguess === 5) {
      dispalyGuess(guess);
      displaymessage(`Game Over. random number was ${randomNumber}`);
      endgame();
    } else {
      dispalyGuess(guess);
      checkguess(guess);
    }
  }
}

//check that value is equal to random number if equal then use dispaly message function or if value is loww then say low or if high then say high
function checkguess(guess) {
  if (guess === randomNumber) {
    displaymessage(`you guessd it right`);
    endgame();
  } else if (guess < randomNumber) {
    displaymessage(`number id too low`);
  } else if (guess > randomNumber) {
    displaymessage(`number id too high`);
  }
}
//clean the value
function dispalyGuess(guess) {
  userinput.value = '';
  guessslot.innerHTML += `${guess},  `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newgame" >Start new game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newGamebutton = document.querySelector('#newgame');
  newGamebutton.addEventListener('click', function (e) {
    let randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numguess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}


```


### project 5 

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
     <div class='color'>
     
     <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
     </div>
     
     `;
});

```

### project 6


```javascript

// generate a random color

const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalid;

const startChangingcolor = function () {
  if (!intervalid) {
    intervalid = setInterval(chnagebgcolor, 500);
  }
  function chnagebgcolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};

const stopChangingcolor = function () {
  clearInterval(intervalid);
  intervalid = null;
};

document.querySelector('#start').addEventListener('click', startChangingcolor);

document.querySelector('#stop').addEventListener('click', stopChangingcolor);

```
