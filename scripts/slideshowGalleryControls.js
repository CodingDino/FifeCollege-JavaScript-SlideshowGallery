// script wide variable to hold the index for the current slide
// starts on 0 (the first slide)
var slideIndex = 0;

// function to move to the previous or next slides
// n is the number of slides to move between
// positive n means move to the next slides
// negative n means move to previous slides
function plusSlides(n) {
    // calculate what slide we should change to using our current slideIndex and the passed in parameter n, then call showSlide() and provide our calculated target slide
    showSlide(slideIndex + n);
}

// function to show the slide at the specified index n
function showSlide(n) {
    
    // Use getElementByClassName to get arrays of all HTML elements with the slide and dot classes, and store them in variables slides and dots
    // this will allow us to edit these elements
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    
    // Use getElementById to allow us to update the caption text based on the small image's alt text.
    var caption = document.getElementById("caption");
    
    // Make sure our target slide n is within the array bounds for the number of slides we have
    // If n is greater or equal to our number of slides, we're targeting a slide off the end of our array to the right, so we need to wrap around.
    if (n >= slides.length) {
        // Wrap around by setting our index to 0, the farthest left slide
        slideIndex = 0;
    } 
    // If n is less than 0 we are targeting a slide off the array to the left, so wrap around the other way
    else if (n < 0) {
        // Wrap around by setting our index to the slide array length minus 1, the farthest right slide
        slideIndex = slides.length - 1;
    }
    // If we have no out of bounds issues, just set our index to the targeted slide
    else {
        slideIndex = n;
    }
    
    // Update the appearance of our slides based on this index
    // Loop through the array of slides and set all of them to hidden (display = "none")
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    // After they are all hidden, find our target slide and change it's display type to block, showing it
    slides[slideIndex].style.display = "block"; 
    
    // Update the appearance of our dots based on the currently shown slide
    // Loop through the array of dots and remove the active class from all of them, if it is present.
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // After we ensure no dots are active, find our target slide's dot and add the active class to it, changing it's appearance to show it is the active slide
    dots[slideIndex].className += " active";
    
    // Update caption text based on selected small image's alt text
    caption.innerHTML = dots[slideIndex].alt;
}