document.addEventListener('DOMContentLoaded', function() {
  const colors = [
    "#d65ca5", "#8dafe2", "#e25057",
    "#b6ca68", "#efbb43", "#a98de2"
  ];

  let colorIndex = 0;
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    });

    link.addEventListener('mouseleave', function() {
      this.style.color = '';
    });
  });
});

const colors = [];
const root = getComputedStyle(document.documentElement);
for(let i = 0; i < 8; i++) {
  colors.push(root.getPropertyValue(`--link-color-${i}`).trim());
}
