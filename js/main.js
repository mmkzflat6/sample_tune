const body = document.body

/* ハンバーガーメニューの制御 */
const menu = document.querySelector(".humburger-menu")
const buttons = document.querySelector(".hm-button")

const toggleMenu = () => {
  menu.classList.toggle("menuIsOpen")     //.menuにmenuIsOpenクラスを付与
  buttons.classList.toggle("buttonIsOpen") //.buttonにbuttonIsOpenクラスを付与
  body.classList.toggle("scroll-off")     //bodyにscroll-offクラスを付与
}

buttons.addEventListener("click", () => {  //buttonをクリックした時、toggleMenuを実行する
  toggleMenu()
})

menu.addEventListener("click", () => {  //menuをクリックした時も、toggleMenuを実行しメニューを閉じる
  toggleMenu()
})
/* ハンバーガーメニューの制御 */

window.addEventListener("scroll", function() {
  const mvHeight = document.querySelector(".js-mv").offsetHeight;
  if (window.pageYOffset > mvHeight) {
    document.querySelector(".js-header").classList.add("header-change");
  } else {
    document.querySelector(".js-header").classList.remove("header-change");
  }
});
