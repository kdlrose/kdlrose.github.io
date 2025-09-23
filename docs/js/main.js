document.addEventListener('DOMContentLoaded', function() {
  const colors = [
    '#d65ca5', // moon
    '#8dafe2', // mercury
    '#e25057', // mars
    '#b6ca68', // jupiter
    '#efbb43', // venus
    '#a98de2'  // saturn
  ];
 
  let colorIndex = 0;
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    });

    link.addEventListener('mouseleave', function() {
      this.style.color = 'var(--fg-bright)';
    });
  });
});
