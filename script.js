// Load the sound file
const sound = new Audio('window.mp3');

// Function to play the sound
function playSound() {
    // Log to ensure the function is being called
    console.log("Playing sound");

    // Try to play the sound and handle errors
    sound.play().catch(error => {
        console.log("Sound play error:", error); // Log any sound playback errors
    });
}

// Function to open Start Menu
function openStartMenu() {
    playSound();
    const startMenuContent = document.getElementById('start-menu-content');
    startMenuContent.style.display = startMenuContent.style.display === 'none' ? 'block' : 'none';
}

// Function to open applications
function openApplication(appName) {
    playSound();
    switch (appName) {
        case 'notepad':
            window.open('notepad.html', '_blank');
            break;
        case 'calculator':
            window.open('calculator.html', '_blank');
            break;
        case 'myComputer':
            window.open('myComputer.html', '_blank');
            break;
        case 'recycleBin':
            window.open('recycleBin.html', '_blank');
            break;
        default:
            alert("Application not recognized.");
    }
}

// Function to open Programming Languages page
function openProgrammingLanguages() {
    playSound();
    window.open('programmingLanguages.html', '_blank'); // Open Programming Languages page in a new tab
}

// Function to switch between light and dark themes (Matrix style)
function switchTheme() {
    playSound(); // Play sound when switching themes
    const themeLink = document.getElementById('theme-link');
    const currentTheme = themeLink.getAttribute('href');

    // Reload sound to ensure it's ready after theme change
    sound.load();

    // Toggle between light and dark themes
    if (currentTheme === 'styles-light.css') {
        themeLink.setAttribute('href', 'styles-dark.css');
    } else {
        themeLink.setAttribute('href', 'styles-light.css');
    }
}