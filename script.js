// Function to change table style based on user selection
document.getElementById('styleSelect').addEventListener('change', function() {
    var style = this.value; // Get the selected style

    // Remove all previous styles
    document.getElementById('studentTable').classList.remove('style1', 'style2', 'style3');

    // Add the selected style class
    document.getElementById('studentTable').classList.add(style);
});