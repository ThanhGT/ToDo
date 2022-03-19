const button = document.querySelector('button');
const ul = document.querySelector('ul');

//create a list element when button is clicked
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new';
    ul.prepend(li);
});

/** attach event listener to the ul so that any new li tags
 *  will also have an event listener attached to it */
ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});



