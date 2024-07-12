new TypeIt("#eng-main", {
  speed: 100,
  waitUntilVisible: true,
  startDelay: 1000,
  afterComplete: function (instance) {
    instance.destroy();
  },
})
  .type("LEE DOHYUNG", { delay: 500 })
  .move()
  .type("I'm ", { delay: 500 })
  .move()
  .type("Hello, ")
  .move(null, { to: "END" })
  .break()
  .type("<strong><i>A Developer</i></strong>")
  .break()
  .type("with <strong>open minds</strong> and <strong> ears</strong>")
  .go();

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const formRow = document.querySelector(".form-row");
    formRow.classList.add("transition-left");
  }, 13500);
});
