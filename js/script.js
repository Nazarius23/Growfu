document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest(".menu-header__icon")) {
    document.documentElement.classList.toggle("menu-open");
  }
}
