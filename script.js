const portfolioPieces = document.querySelectorAll('.portfolio-img');

portfolioPieces.forEach(element => {
  element.addEventListener('mouseover', function() {
    const infoCard = element.querySelector('.info-card');
    if (infoCard) {
      infoCard.style.opacity = '1';
    }
  });

  element.addEventListener('mouseout', function() {
    const infoCard = element.querySelector('.info-card');
    if (infoCard) {
      infoCard.style.opacity = '0';
    }
  });
});
