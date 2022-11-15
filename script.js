const burger = document.querySelector(".burger-menu");
const nav = document.querySelector(".navbar-menu");
const activeClass = "open";
document.body.addEventListener("click", ({ target }) => {
  const close = () => {
    nav.classList.remove(activeClass);
    burger.classList.remove(activeClass);
    document.body.classList.remove(activeClass);
  };
  if (target === burger || target.classList.contains("burger-menu__bar")) {
    if (nav.classList.contains(activeClass)) {
      close();
    } else {
      nav.classList.add(activeClass);
      burger.classList.add(activeClass);
      document.body.classList.add(activeClass);
    }
  } else if (target.classList.contains("navbar-menu__item") || target === nav) {
    close();
  }
});
