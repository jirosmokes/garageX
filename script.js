const inputText = document.querySelector('input');
const cardContainer = document.querySelector('.card-container');

// Add a car function
const addCarBtn = document.querySelector('.add-car-btn');
addCarBtn.addEventListener("click",() => {
    const carInput = inputText.value.trim();

    if(cardContainer.children.length >= 12){
        alert("You've reached the maximum number of vehicles.");
        return;
    }

    if(carInput == ''){
        alert('Enter a value');
        return;
    }
    const carCard = document.createElement('div');
    carCard.classList.add('card');

    const imageHolder = document.createElement('img');
    imageHolder.src = "https://placehold.co/100x100";

    const carHeader = document.createElement('span');
    carHeader.textContent = carInput;

    carHeader.addEventListener("mouseover", () => {
        carHeader.style.fontWeight = "bold";
    })

    const removeBtn = document.createElement('button');
    removeBtn.textContent = `Remove`;
    removeBtn.classList.add('remove-car-btn');

    // Remove each card for user's choice
    removeBtn.addEventListener("click",() => {
        cardContainer.removeChild(carCard);
    })

    cardContainer.appendChild(carCard);
    
    carCard.appendChild(imageHolder);
    carCard.appendChild(carHeader);
    carCard.appendChild(removeBtn);
    inputText.value = '';

})