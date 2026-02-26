const button = document.querySelector('#button');
let value = 0;

button.addEventListener('click', () => {
    value += 1;
    num.textContent = `${value}`;
    
    if (value%2 == 0) {
        num.style.backgroundColor = 'green';
    } else {
        num.style.backgroundColor = 'red';
    }
})