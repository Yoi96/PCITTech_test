document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('#product_list_navs .nav-item');

    // Set the first item to be active initially
    navItems[0].classList.add('active');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all nav items
            navItems.forEach(i => {
                i.classList.remove('active');
            });

            // Add 'active' class to the clicked item to make it blue
            item.classList.add('active');
        });
    });
});
