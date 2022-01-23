const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
let listItems = document.getElementById('list-items');


let savedItems = '';

add.addEventListener('click', function (e) {
    // Stop form submitting
    e.preventDefault()

    // Get value from input
    const item = input.value;

    if (item === '') {
        alert('Please enter a task.');
    } else {
        // Create li element 
        const li = document.createElement('li');
        li.classList.add('todos__item');

        // Create Checkbox element
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add('todos__checkbox');
        checkBox.setAttribute('id', 'checkbox');

        // Add input value to element
        li.innerHTML = `<p>${item}</p>`;

        // Append child nodes
        li.appendChild(checkBox);
        listItems.appendChild(li);

        tickedItem(checkBox);

        input.value = '';
    }
});

// Remove an item
function tickedItem(checkBox) {
    checkBox.addEventListener('click', function () {
        setTimeout(function () {
            checkBox.parentElement.style.display = "none";
        }, 500);

    });
};


// Clear all items
clear.addEventListener('click', function () {
    setTimeout(function () {
        listItems.innerHTML = '';
    }, 500);
});





