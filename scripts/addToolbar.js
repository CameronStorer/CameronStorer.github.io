// This script adds the toolbar button functionality

// javascript to add button functionality
    // define possible button id's:
    let buttonNames = ["about-me", "achievements", "contact-me", "resume"];
    // take action
    document.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") { //Ensure it's a button
            if (buttonNames.includes(event.target.id)){ // Figure out which button
                window.parent.location.href = "https://cameronstorer.com/" + event.target.id;
            }
        }
    });