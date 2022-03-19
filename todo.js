const items = document.querySelectorAll('li');
const button = document.querySelector('button');

items.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove();
    });
});


