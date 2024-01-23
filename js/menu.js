document.addEventListener('DOMContentLoaded', function(event) {

  // Hamburger menu
  var navbarToggler = document.querySelectorAll('.navbar-toggler')[0];
  navbarToggler.addEventListener('click', function(e) {
    e.target.children[0].classList.toggle('active');
  });
  
  // Select the <html> element
  var html = document.querySelectorAll('html')[0];
  
  // Select the first element with the attribute 'data-bs-toggle-theme'
  var themeToggle = document.querySelectorAll('*[data-bs-toggle-theme]')[0];
  
  // Select the logo image elements
  var logoLight = document.querySelectorAll('.navbar-brand img')[0];
  var logoDark = document.querySelectorAll('.navbar-brand img')[1];
  
  // Set the default theme to 'dark' for the <html> element
  html.setAttribute('data-bs-theme', 'light');
  
  // Function to toggle theme
  function toggleTheme() {
    // Check the current theme attribute value of the <html> element
    if (html.getAttribute('data-bs-theme') === 'dark') {
      // If the current theme is 'dark', change it to 'light'
      html.setAttribute('data-bs-theme', 'light');
      // Change the logo source to the light theme
      logoLight.style.display = 'none';
      logoDark.style.display = 'block';
    } else {
      // If the current theme is not 'dark', change it back to 'dark'
      html.setAttribute('data-bs-theme', 'dark');
      // Change the logo source to the dark theme
      logoLight.style.display = 'block';
      logoDark.style.display = 'none';
    }
  }
  
  // Check if a themeToggle element is found
  if (themeToggle) {
    // Add a click event listener to the themeToggle element
    themeToggle.addEventListener('click', function(event) {
      // Prevent the default behavior of the click event
      event.preventDefault();
  
      // Call the toggleTheme function to switch the theme
      toggleTheme();
    });
  }
  });
  