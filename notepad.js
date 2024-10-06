// Function to save notes to local storage
function saveNotes() {
    const notes = document.getElementById('notes').value;
    localStorage.setItem('savedNotes', notes);
    alert('Notes saved!');
}

// Function to clear the notes field
function clearNotes() {
    document.getElementById('notes').value = '';
}

// Function to load saved notes from local storage
function loadNotes() {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
        document.getElementById('notes').value = savedNotes;
    }
}

// Call loadNotes when the page is loaded
window.onload = loadNotes;