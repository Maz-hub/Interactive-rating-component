# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Select and submit a number rating
-   See the "Thank you" card state after submitting a rating

### Links

-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My Process

### Built With

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Vanilla JavaScript

### What I Learned

-   **DOM Manipulation with JavaScript:** I gained hands-on experience manipulating the Document Object Model (DOM) to create interactivity, such as hiding/showing states, handling button clicks, and updating content dynamically. For example, I used `document.querySelector` and `addEventListener` to manage rating selections and the Thank You State:

    ```javascript
    document
        .querySelector(".submit-btn")
        .addEventListener("click", function () {
            document.querySelector(".rating-state").style.display = "none";
            document.querySelector(".thank-you-state").style.display = "block";
            document.querySelector("#rating-value").textContent =
                selectedRating;
        });
    ```

-   **Problem-Solving:** I overcame challenges like adding spacing in the Thank You State (“You selected X out of 5”), which taught me to troubleshoot with `console.log`, test HTML vs. JavaScript solutions.

## Author

-   Frontend Mentor - [@Maz-hub](https://www.frontendmentor.io/profile/Maz-hub)
