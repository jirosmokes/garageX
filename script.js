const inputText = document.querySelector('input');
const cardContainer = document.querySelector('.card-container');


const showNotification = (notifText) => {
    const notification = document.createElement('div');
    notification.classList.add('nullInput-Notification');
    notification.textContent = notifText;

    notification.style.color = "#ee1b10";

    document.body.appendChild(notification);
    notification.classList.add('show');

    // Remove the notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Add a car function
const addCarBtn = document.querySelector('.add-car-btn');
addCarBtn.addEventListener("click",() => {
    const carInput = inputText.value.trim().toUpperCase();

    if(cardContainer.children.length >= 12){
        showNotification(`You've reach the maximum amount of cars to store.`);
        inputText.value = '';
        return;
    }

    if(carInput == ''){
        showNotification(`You need to enter a car to store!`);
        return;
    }
    const carCard = document.createElement('div');
    carCard.classList.add('card');

    const imageHolder = document.createElement('img');
    imageHolder.src = "https://placehold.co/100x100";

    const carHeader = document.createElement('span');
    carHeader.textContent = carInput;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-car-btn');

    const removeBtnIcon = document.createElement('i');
    removeBtnIcon.classList.add('bx', 'bxs-trash');
    removeBtn.appendChild(removeBtnIcon);

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


