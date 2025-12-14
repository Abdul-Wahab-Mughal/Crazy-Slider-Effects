/**
 * Menu bar
 */
{
  function menu() {
    document.getElementById("nav").classList.toggle("nav-show");
  }
}

/**
 * Carousel
 */
{
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");
  let carousel = document.querySelector(".C-carousel");
  let list = document.querySelector(".C-carousel .list");
  let card = document.querySelector(".C-carousel .C-card");

  // Click
  next.onclick = () => showslider("next");
  prev.onclick = () => showslider("prev");

  // Timer
  let runtimeout;

  // slider show with Animation
  function showslider(type) {
    let itemSilder = document.querySelectorAll(".C-carousel .list .item");
    let itemCard = document.querySelectorAll(".C-carousel .C-card .item");

    if (type === "next") {
      list.appendChild(itemSilder[0]);
      card.appendChild(itemCard[0]);
      carousel.classList.add("next");
    } else {
      let lastitem = itemSilder.length - 1;
      list.prepend(itemSilder[lastitem]);
      card.prepend(itemCard[lastitem]);
      carousel.classList.add("prev");
    }

    // Number
    let id = document.querySelector(".C-carousel .list .item").id;
    document.getElementsByClassName("num")[0].innerHTML = id;

    // Line Color
    let total = document.querySelectorAll(".C-carousel .list .item").length - 1;
    let width_line = document.querySelector(".bottom-set .line .color-line");
    width_line.style.width = (100 / total) * (id - 1) + "%";

    // Timer Stop After 0.5 Second
    clearTimeout(runtimeout);
    runtimeout = setTimeout(() => {
      carousel.classList.remove("next");
      carousel.classList.remove("prev");
    }, 500);
  }
}
