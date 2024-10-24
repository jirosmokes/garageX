const inputText = document.querySelector('input');

const addCarBtn = document.querySelector('.add-car-btn');

const cardContainer = document.querySelector('.card-container');

addCarBtn.addEventListener("click",() => {
    const carInput = inputText.value;

    const carCard = document.createElement('div');
    carCard.classList.add('card');

    let carHeader = document.createElement('span');
    carHeader.textContent = carInput;
    carCard.appendChild(carHeader);

    cardContainer.appendChild(carCard);

    inputText.value = '';

})