const textInput = document.getElementById('text-input');
const submitBtn = document.getElementById('submit-btn');


const vowels = ['a', 'e', 'i', "o", 'u'];

submitBtn.addEventListener('click', function (e) {
    // Prevent form submitting
    e.preventDefault();

    let counter = 0;

    // Save input value
    const text = textInput.value.toLowerCase();
    // Create string
    let string = [];
    // Push input value to string
    string.push(text);

    // Split string
    let letters = string[0].split('');

    letters.forEach(function (letter) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            counter += 1;
        } else {

        }
    });

    alert(`There are ${counter} vowels`);

    textInput.value = '';
});



