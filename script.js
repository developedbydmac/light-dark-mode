let toggleSwitch = document.querySelector('input[type="checkbox]');

// Switch Theme Dynamically 
function switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    //   localStorage.setItem('theme', 'dark');
      darkMode();
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    //   localStorage.setItem('theme', 'light');
      lightMode();
    }
  }
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);