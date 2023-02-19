const imagem = document.querySelector('.conteudo__section__foto');

imagem.addEventListener('mouseenter', function() {
  this.setAttribute('src', './Assets/eu1-1.jpg');
});

imagem.addEventListener('mouseleave', function() {
  this.setAttribute('src', './Assets/eu1-1.png');
});