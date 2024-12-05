function toggleDarkMode() {
    
    document.body.classList.toggle('dark-mode');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section');
    const h2s = document.querySelectorAll('h2');

    header.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    h2s.forEach(h2 => h2.classList.toggle('dark-mode'));

   
    const button = document.getElementById('dark-mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode'; // Text für Light Mode
    } else {
        button.textContent = 'Dark Mode'; // Text für Dark Mode
    }
}


document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
