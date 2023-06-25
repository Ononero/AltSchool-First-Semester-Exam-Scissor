
// JS code for the form functionality

const urlInput = document.getElementById('url-input');
const domainSelect = document.getElementById('domain');
const aliasInput = document.getElementById('alias-input');
const trimUrlBtn = document.getElementById('trim-url-btn');

// This Adds an event listener to the Trim URL button
trimUrlBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  // This Gets the selected domain value
  const selectedDomain = domainSelect.value;

  // This Gets the URL and Alias values
  const url = urlInput.value;
  const alias = aliasInput.value;

  // This Validates the URL
  if (url.trim() === '') {
    alert('Please enter a valid URL.');
    return;
  }

  // This Validates the selected domain
  if (selectedDomain === '') {
    alert('Please choose a domain.');
    return;
  }

 
  // This Clears the input fields
  urlInput.value = '';
  aliasInput.value = '';

  // This Displays success message
  const message = `You Rock! URL trimmed successfully`;
  alert(message);
});
