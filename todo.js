const items = document.querySelectorAll('li');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

//create a list element when button is clicked
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new';
    ul.prepend(li);
});

//iterate through each for loop and remove each task when clicked
items.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove();
    });
});



