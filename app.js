const container = document.querySelector('.container');
const button = document.querySelector('button');
numOfDiv = 101;

button.addEventListener('click', function () {
    while (numOfDiv > 100) {
        numOfDiv = parseInt(prompt("Enter the number of squares per side: "));
    }

    container.innerHTML='';

    for (let j = 0; j < numOfDiv * numOfDiv; j++) {
        let child = document.createElement('div');
        child.classList.add('childdiv');
        child.style.width = `${(container.clientWidth / numOfDiv) - 8}px`;
        container.appendChild(child);
    }
    numOfDiv = 101;

})


