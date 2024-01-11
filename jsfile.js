var sidenav = document.querySelector(".side-navbar-toggle");
function shownavbar() {
  sidenav.style.left = "0";
}
function closenavbar() {
  sidenav.style.left = "-40%";
}
// collections
var productcontainer = document.getElementById("product");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");
search.addEventListener("keyup", function () {
  var entervalue = event.target.value.toUpperCase();
  for (count = 0; count < productlist.length; count++) {
    var productname = productlist[count].querySelector("p").textContent;
    if (productname.toUpperCase().indexOf(entervalue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});
