window.onload = function() {
    setTimeout(function() {
        // Hide the loader and show the content after 2 seconds
        document.getElementById('loader').style.display = 'none';
        document.querySelector('.mainContent').style.display = 'block';
        document.querySelector('.formSection').style.display = 'block';
        document.querySelector('.foot').style.display = 'block';
    }, 2000); // 2 seconds delay
}




document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hide the form
    document.querySelector('.formSection .container').style.display = 'none';

    // Show the thank you message
    document.getElementById('thankyou-message').style.display = 'block';


});