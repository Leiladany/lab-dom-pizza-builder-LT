// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible'
    } else {
  oneMush.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible'
    } else {
  greenPepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
  const whitesauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    whitesauce.classList.add('sauce-white')
  } else {
    whitesauce.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free')
  } else {
    crust.classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active')
  } else {
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }

  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active')
  } else {
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }

  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active')
  } else {
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }

  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active')
  } else {
    document.querySelector('.btn-sauce').classList.remove('active')
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active')
  } else {
    document.querySelector('.btn-crust').classList.remove('active')
  }
}

function renderPrice() {

  let totalPrice = basePrice

  const ingredientsList = document.querySelector('.panel.price ul')
  ingredientsList.innerHTML = ''

  for (let ingredient in state) {
    if (state[ingredient]) {
      const unit = document.createElement('li');
      unit.innerText = `${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      ingredientsList.append(unit);
      totalPrice += ingredients[ingredient].price;
    }
  }

  const price = document.querySelector('.panel.price strong')
  price.textContent = `$ ${totalPrice}`
}


renderEverything()

document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
})

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  })

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})