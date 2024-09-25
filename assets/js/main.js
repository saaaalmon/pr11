let drop = document.getElementById('dropdown-items');
dropdown.addEventListener('mouseover', function () {
    drop.style.display = 'flex';
    drop.style.transform = 'translateY(0)';
    drop.style.transition = 'transform 0.3s ease-in-out';
});
dropdown.addEventListener('mouseout', function () {
    drop.style.transform = 'translateY(-200px)';
    drop.style.transition = 'transform 0.3s ease-in-out'; 
    setTimeout(function () {
        drop.style.display = 'none';
    }, 300);
});