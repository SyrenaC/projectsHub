let toggleSwitch = document.querySelector("input[type='checkbox']");
let nav = document.getElementById("nav");
let toggleIcon = document.getElementById("toggle-icon");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0/50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.remove("fa-sun");
  toggleIcon.children[1].classList.add("fa-moon");
  image1.src = "./img/coffee_time_dark.svg";
  image2.src = "./img/undraw_engineering_team_a7n2拷貝2.svg";
  image3.src = "./img/undraw_well_done_re_3hpo拷貝.svg";
}
function lightMode() {
  nav.style.backgroundColor = "";
  toggleIcon.children[0].textContent = "light Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
  image1.src = "./img/coffee_time_light.svg";
  image2.src = "./img/undraw_engineering_team_a7n2.svg";
  image3.src = "./img/undraw_well_done_re_3hpo.svg";
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
}
toggleSwitch.addEventListener("change", switchTheme);
