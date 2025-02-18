let bank = [];
let oddBank = [];
let evenBank = [];
let extBank = [];

function sortOne(numbers) {
  extBank.push(numbers.pop());
  addEvens(extBank);
  addOdds(extBank);

  render();
}

function addNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    bank.push(numbers[i]);
  }
  render();
}

function addEvens(numbers) {
  evenBank = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenBank.push(numbers[i]);
    }
  }
  render();
}

function addOdds(numbers) {
  oddBank = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
      oddBank.push(numbers[i]);
    }
  }
  render();
}

function bankCount() {
  // TODO
  const $bankContainer = document.createElement("p");
  $bankContainer.textContent = `${bank}`;
  return $bankContainer;
}

function getEvens() {
  const $evenContainer = document.createElement("p");
  $evenContainer.textContent = `${evenBank}`;
  return $evenContainer;
}

function getOdds() {
  const $oddContainer = document.createElement("p");
  $oddContainer.textContent = `${oddBank}`;
  return $oddContainer;
}

function OaEForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
      <label>
       Add a number to the bank
        <input name="numbers" type="text" min="0" />
      </label>
      <button id = "addNumber">Add number</button>
      <button id = "sort1">Sort 1</button>
      <button id = "sortAll">Sort all </button>
    `;

  const $addNumber = $form.querySelector("#addNumber");
  const $sort1 = $form.querySelector("#sort1");
  const $sortAll = $form.querySelector("#sortAll");

  // TODO: add a `submit` event listener
  $addNumber.addEventListener("click", (event) => {
    event.preventDefault();

    const data = new FormData($form);
    const numbers = data.get("numbers");

    // addSheep(Number(count));
    const toAdd = numbers.split(" ").map(Number);
    addNumbers(toAdd);

    render();
  });

  $sort1.addEventListener("click", (event) => {
    event.preventDefault();

    const data = new FormData($form);
    const numbers = data.get("numbers");

    // addSheep(Number(count));
    const toAdd = numbers.split(" ").map(Number);
    sortOne(bank);
  });

  $sortAll.addEventListener("click", (event) => {
    event.preventDefault();

    const data = new FormData($form);
    const numbers = data.get("numbers");

    // addSheep(Number(count));
    const toAdd = numbers.split(" ").map(Number);
    addEvens(bank);
    addOdds(bank);
  });

  return $form;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
      <h1>Odds and Events</h1>
      
      
      
      <main>
     
      </main>
      <h2>Bank</h2>
      <bankCount></bankCount>

      <h2>Even</h2>
<Evens></Evens>

      <h2>Odd</h2>
<Odds></Odds>
    `;
  const form = OaEForm();
  $app.querySelector("main").appendChild(form);
  $app.querySelector("bankCount").replaceWith(bankCount());

  $app.querySelector("Evens").replaceWith(getEvens());
  $app.querySelector("Odds").replaceWith(getOdds());
}

render();
