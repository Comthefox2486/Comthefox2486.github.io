document.addEventListener("keydown", function(e) {
  // Check if the Ctrl key is pressed
  if (e.ctrlKey || e.metaKey) {
    // Prevent the default behavior
    e.preventDefault();
    // Add your custom logic here or leave it empty to disable Ctrl key
  }
});