const img = document.querySelectorAll(".content img");
var olmasin = 0;
for (let index = 0; index < img.length; index++) {
  img[index].onmouseenter = function () {
    img[index].nextElementSibling.textContent = 1;

    kontrol2();
  };
  function kontrol2() {
    if (
      img[0].nextElementSibling.textContent == 1 &&
      img[1].nextElementSibling.textContent == 1 &&
      img[2].nextElementSibling.textContent == 1 &&
      img[3].nextElementSibling.textContent == 1 &&
      img[4].nextElementSibling.textContent == 1 &&
      olmasin == 0
    ) {
      window.alert("bütün yemekleri incelediniz :D");
      olmasin = 1;
     
    }
  }
}
