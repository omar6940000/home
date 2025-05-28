    const slider = document.getElementById('slider');

    function scrollSlider(direction) {
      const cardWidth = document.querySelector('.card').offsetWidth + 24;
      slider.scrollLeft += direction * cardWidth;
    }

    // Mouse drag functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('pointerdown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.setPointerCapture(e.pointerId);
    });

    slider.addEventListener('pointerup', (e) => {
      isDown = false;
      slider.releasePointerCapture(e.pointerId);
    });

    slider.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });
