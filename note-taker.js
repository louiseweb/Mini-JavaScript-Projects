const textField = document.getElementById('text-field');
const addBtn = document.getElementById('add-btn');
const notes = document.getElementById('notes');
const overlay = document.getElementById('note-taker-overlay');
const closeBtn = document.getElementById("close-btn");
const overlayNote = document.getElementById('overlay-note');
const overlayText = document.getElementById('overlay-text');

let noteNum = 0;

addBtn.addEventListener('click', function () {

    if (textField.value === '') {
        alert("Please enter a note")
    } else {
        noteNum += 1;
        let text = textField.value;
        // Create Div
        const note = document.createElement('div');
        note.classList.add('note-taker__note');

        const h3 = document.createElement('h3');
        h3.textContent = `Note ${noteNum}`;
        const p = document.createElement('p');
        p.textContent = text;
        const detailsBtn = document.createElement('button');
        detailsBtn.textContent = 'View details';
        note.append(h3, p, detailsBtn);
        notes.appendChild(note);

        detailsBtn.addEventListener('click', function () {
            overlay.classList.add('show');
            overlayText.innerHTML = text;
            document.body.classList.add('no-scroll');
        });

        textField.value = '';
    }

});

closeBtn.addEventListener('click', function () {
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});


