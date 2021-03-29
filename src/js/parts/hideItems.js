export default function hideItems() {
  const showBtns = document.querySelectorAll(".show-js");

  showBtns.forEach((item) => {
    item.addEventListener("click", function (event) {
      const showItems = item.parentNode.querySelectorAll(".item__hidden");
      showItems.forEach((image) => {
        image.classList.toggle("_hidden");
      });
      this.classList.toggle("_hide");
      this.innerHTML == "Показать ещё"
        ? (this.innerHTML = "Скрыть")
        : (this.innerHTML = "Показать ещё");
      if (!item.classList.contains("_hide")) {
        item.scrollIntoView({ block: "center", behavior: "auto" });
      }
    });
  });
}
