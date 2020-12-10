//on top dugme
let pageHeight = window.innerHeight;
var naPocetak = document.getElementById("na-pocetak");

window.onscroll = function () {
  scroll()
};

function scroll() {
  if (document.body.scrollTop > pageHeight / 2 || document.documentElement.scrollTop > pageHeight / 2) {
    naPocetak.style.display = "block";

  } else {
    naPocetak.style.display = "none";
  }
}


//radio button cekeri na about us strani
$(document).ready(function () {
  $("#story-prvi").show();
  $("#story-drugi").hide();
  $("#story-treci").hide();
});
$(document).ready(function () {
  $("#radio1").click(function () {
    $("#story-prvi").fadeIn("slow");
    $("#story-drugi").hide();
    $("#story-treci").hide();
  });
});
$(document).ready(function () {
  $("#radio2").click(function () {
    $("#story-drugi").fadeIn("slow");
    $("#story-prvi").hide();
    $("#story-treci").hide();
  });
});
$(document).ready(function () {
  $("#radio3").click(function () {
    $("#story-treci").fadeIn("slow");
    $("#story-prvi").hide();
    $("#story-drugi").hide();
  });
});


//responzivan meni
let prikazi = document.getElementById("moj-meni");
let brojac = 1;

function menjaj() {
  let pageWidth = window.outerWidth;
  if (pageWidth > 1000) {
    prikazi.style.display = "none";
  }
}


//responzivno meni dugme
$(document).ready(function () {
  $(".dugme-meni").click(function () {
    $("#moj-meni").toggle("swing");
  })
});


//modal
$(document).ready(function () {
  $(".modal").hide();
  $(".naslovno-dugme").click(function () {
    $(".modal").fadeIn("slow");
  })
  $(".izadji").click(function () {
    $(".modal").fadeOut("slow");
  })
});


//validacija modala
function validacija() {

  var x = document.forms["PrvaForma"]["e-mail"].value;
  var y = document.forms["PrvaForma"]["Phone"].value;
  var a = document.forms["PrvaForma"]["password"].value;
  var b = document.forms["PrvaForma"]["Confirm"].value;

  if (x.search("@") == -1 && isNaN(y) && a != b) {
    alert("Broj i e-mail nisu uneti u validnom formatu a sifre nisu iste");
    return false;
  } else if (x.search("@") == -1) {
    alert("E-mail nije unet u validnom formatu");
    return false;
  } else if (isNaN(y)) {
    alert("Broj nije unet u validnom formatu");
    return false;
  } else if (a != b) {
    alert("Sifre nisu iste");
    return false;
  }
}

//slajder
$("#example, #slajder").vegas({
  slides: [{
      src: "img/slika3.jpg"
    },
    {
      src: "img/slika1.jpg"
    },
    {
      src: "img/shop2.jpg"
    },
    {
      src: "img/slika4.jpg"
    },
    {
      src: "img/slika5.jpg"
    },
    {
      src: "img/slika6.jpg"
    }
  ]
});