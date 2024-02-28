  const circles = document.querySelectorAll('.circle');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  nextButton.addEventListener('click', () => {
    if (currentIndex < circles.length - 1) {
      currentIndex++;
      circles[currentIndex].classList.add('active');
      prevButton.disabled = false;
    }

    if (currentIndex === circles.length - 1) {
      nextButton.disabled = true;
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      circles[currentIndex].classList.remove('active');
      currentIndex--;
      nextButton.disabled = false;
    }

    if (currentIndex === 0) {
      prevButton.disabled = true;
    }
  });