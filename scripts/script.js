document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.language-tests');
    const mainContent = document.getElementById('main-content');
    const homebutton = document.querySelectorAll('.home');

    function clearcontent() {
        mainContent.innerHTML = '';
    }

    // Function to show the buttons grid
    function showButtons() {
        mainContent.innerHTML = ''; // Clear the main content area

        const buttonGrid = document.createElement('div');
        buttonGrid.className = 'button-grid';

        // Button data: array of objects with text, image paths, and redirect paths
        const buttonsData = [
            { text: 'Portuguese', imgSrc: './images/portugal.png', redirectPath: 'portuguese.html' },
            { text: 'French', imgSrc: './images/france.png', redirectPath: 'frenchlvlselect.html' },
            //{ text: 'Filipino', imgSrc: './images/philippines.png', redirectPath: 'filipino.html' }
        ];

        // Add buttons to the grid
        buttonsData.forEach(buttonData => {
            const buttonWrapper = document.createElement('div');
            buttonWrapper.className = 'button-wrapper';

            const img = document.createElement('img');
            img.src = buttonData.imgSrc; // Set image source with relative path

            const button = document.createElement('button');
            button.innerText = buttonData.text; // Set button text

            // Add click event to redirect to the specified path
            button.addEventListener('click', function() {
                window.location.href = buttonData.redirectPath;
            });

            buttonWrapper.appendChild(img);
            buttonWrapper.appendChild(button);
            buttonGrid.appendChild(buttonWrapper);
        });

        mainContent.appendChild(buttonGrid);
    }

    // Add click event to each sidebar link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            showButtons(); // Show the buttons grid
        });
    });

    homebutton.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            clearcontent();
        });
    });
});
