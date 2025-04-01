class SpacialHeader extends HTMLElement {
    connectedCallback() {
        
            
    }
}

class SpacialFooter extends HTMLElement {
    connectedCallback() {

    }
}

// Function to load the header from header.html
function loadHeader() {
    const headerElement = document.getElementById('header-placeholder');

    fetch('\header.html')  // Path to your header file
        .then(response => response.text())
        .then(data => {
            headerElement.innerHTML = data;
        })
        .catch(error => console.error('Error loading the header:', error));
}

// Load the header when the page is loaded
window.onload = loadHeader;