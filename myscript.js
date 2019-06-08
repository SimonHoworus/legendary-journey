/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
window.onscroll = function() {scrollFunction()};
function scrollFunction()
 {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        document.getElementById("myBtn").style.display = "block";
    else
        document.getElementById("myBtn").style.display = "none";
    }

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
