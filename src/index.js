// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const panda = document.querySelector("#click-me");

const wrapper = document.querySelector(".wrapper")

const menu = document.querySelector("#menu")

const menuItem = document.querySelectorAll(".menu-item")

const toggleMenu = () => {
  if (menu.style.display === 'none') {
    menu.style.display = '';
  } else {
    menu.style.display = 'none';
  }
}

panda.addEventListener("click", (event) => {
  wrapper.classList.toggle("blurred");
  toggleMenu();
})

menuItem.forEach((menu) => {
  menu.addEventListener("click", (event) => {
    console.log(event)
    wrapper.classList.toggle("blurred");
    toggleMenu();
  })
})
