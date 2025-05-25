// Show/Hide Projects Dropdown
document.getElementById('projects-button').addEventListener('click', function() {
    const dropdown = document.getElementById('projects-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Handle Login Form Submission
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
      alert('Login Successful!');
      // Redirect to checklist page (in a real app, you would handle authentication here)
      window.location.href = 'checklist.html';
    } else {
      alert('Please enter both username and password');
    }
  });
  
  // Handle New Checklist Item
  document.getElementById('new-item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newItem = document.getElementById('new-item').value;
    
    if (newItem) {
      const listItem = document.createElement('li');
      listItem.textContent = newItem;
      document.getElementById('checklist').appendChild(listItem);
      document.getElementById('new-item').value = ''; // Clear the input field
    }
  });
  