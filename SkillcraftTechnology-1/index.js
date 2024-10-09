window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const menuItems = document.querySelectorAll('.navbar li');
    const sections = document.querySelectorAll('section');

    // Change navbar style on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Animate menu items when scrolling
    menuItems.forEach((item, index) => {
        const itemOffset = item.getBoundingClientRect().top;

        // Check if the item is in view
        if (itemOffset < window.innerHeight - 50) {
            item.classList.add('visible');
        }
    });

    // Animate sections when in view
    sections.forEach(section => {
        const sectionOffset = section.getBoundingClientRect().top;

        // Check if the section is in view
        if (sectionOffset < window.innerHeight - 50) {
            section.classList.add('visible');
        }
    });
});

// Initial animation setup for menu items
window.addEventListener('load', () => {
    const menuItems = document.querySelectorAll('.navbar li');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100); // Delay each item
    });
});

// Initial animation setup for sections
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 100); // Delay each section
    });
});
