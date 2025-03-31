ScrollReveal({
  distance: "70px",
  duration: 3000,
  delay: 20,
});

ScrollReveal().reveal(".hero__title", {
  origin: "top",
});
ScrollReveal().reveal(
  ".section__title, .section__text, .hover-border, .sistemapts h1, .h1title",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".hero__fialogo, .table__etapas ", {
  origin: "left",
});
ScrollReveal().reveal(".hero__f1logo, .classification__table", {
  origin: "right",
});
