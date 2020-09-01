$(document).ready (function(){

  new WOW().init();


});

var mq1 = window.matchMedia( "(max-width: 1440px)" );
var mq2 = window.matchMedia( "(max-width: 1024px)" );
var mq3 = window.matchMedia( "(max-width: 768px)" );


 if (mq1.matches) {
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("footer").style.visibility = "hidden";
    document.getElementById("intro").style.opacity = '0';
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("footer").style.visibility = "visible";
    document.getElementById("intro").style.opacity = '1';
    }
}
else if (mq2.matches) {
  function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("footer").style.visibility = "hidden";
    document.getElementById("intro").style.opacity = '0';
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("footer").style.visibility = "visible";
    document.getElementById("intro").style.opacity = '1';
    }

}
else if (mq3.matches) {
  function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("footer").style.visibility = "hidden";
    document.getElementById("intro").style.opacity = '0';
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("footer").style.visibility = "visible";
    document.getElementById("intro").style.opacity = '1';
    }
  }
else {
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("intro").style.marginRight = "100px";
    document.getElementById("footer").style.visibility = "hidden";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("intro").style.marginRight= "0";
    document.getElementById("footer").style.visibility = "visible";
  }

}
