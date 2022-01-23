const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const amountInput = document.getElementById('amount-input');
const addBtn = document.getElementById('add-btn');
const table = document.getElementById('table');

// Add item
addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (nameInput.value === '' || dateInput.value === '' || amountInput.value === '') {
        alert('Please fill in all fields');
    } else {
        // Create table row
        const tableRow = document.createElement('tr');
        // Add class to row
        tableRow.classList.add('table__row');

        // Create table data
        nameData = nameInput.value;
        dateData = dateInput.value;
        amountData = amountInput.value;

        const data = [];

        data.push(nameData, dateData, amountData);

        data.forEach(function (item, index) {
            const tableData = document.createElement('td');
            tableData.textContent = data[index];
            tableRow.appendChild(tableData);
        });

        // Create checkbox
        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('tracker__checkbox');
        checkboxCell.appendChild(checkbox);
        tableRow.appendChild(checkboxCell);

        // Append row to table
        table.appendChild(tableRow);

        // Clear input fields
        nameInput.value = '';
        dateInput.value = '';
        amountInput.value = '';

        // Remove item function
        tickedItem(checkbox);
    }
});

// Remove item
function tickedItem(checkbox) {
    checkbox.addEventListener('click', function () {
        setTimeout(function () {
            checkbox.parentElement.parentElement.innerHTML = " ";
        }, 500);

    });
};