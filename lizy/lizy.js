// Mostrar solo una sección de rol a la vez
const roles = document.querySelectorAll('.role');

roles.forEach(role => {
  role.addEventListener('mouseenter', () => {
    roles.forEach(r => r.classList.remove('active'));
    role.classList.add('active');
  });

  role.addEventListener('mouseleave', () => {
    role.classList.remove('active');
  });
});

// Mostrar solo un bloque de info a la vez
const infoButtons = document.querySelectorAll('.info-btn');
const infoContents = document.querySelectorAll('.info-content');

infoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    infoContents.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
  });
});
