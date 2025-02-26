document.addEventListener('DOMContentLoaded', function() {
    let selectedRating = null;

    const ratingButtons = document.querySelectorAll('.rating-btn');
    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset all buttons to their default styles
            ratingButtons.forEach(resetButton => {
                resetButton.style.backgroundColor = 'var(--dark-blue)';
                resetButton.style.color = 'var(--light-grey)';
            });
            
            // Style only the clicked button to show it's active
            button.style.backgroundColor = 'var(--orange)';
            button.style.color = 'var(--pure-white)';

            // Store the user's chosen rating
            selectedRating = button.value
        });
    });

    document.querySelector('.submit-btn').addEventListener('click', function() {
        document.querySelector('.rating-state').style.display = 'none';
        document.querySelector('.thank-you-state').style.display = 'block';
        document.querySelector('#rating-value').textContent = selectedRating;

    });
});

