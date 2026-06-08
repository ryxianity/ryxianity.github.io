console.log("6 7");

const start_button = document.getElementById("start_button");

const about_help = document.getElementById("about_help");

const about_popup = document.getElementById("about_popup");

const about_popup_close = document.getElementById("about_popup_close");

let percentage = 67;

about_help.addEventListener("click", function() {
  about_popup.classList.toggle("show", true);
});

about_popup_close.addEventListener("click", function() {
  about_popup.classList.toggle("show", false);
});

function button_pressed() {
  if (percentage >= 100)
    percentage = 0;
  document.getElementById("spittinbars").style = "width: " + percentage.toString() + "%";
  ++percentage;
}