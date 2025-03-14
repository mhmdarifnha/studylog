const display = document.getElementById("marquee");
let pesan = "Halo semuanya tesss ";
let pesan2 = " Ini adalah marquee pakai javascript";

function marquee() {
  display.innerText = pesan + pesan2;
  pesan = pesan.substr(1, pesan.length) + pesan.substr(0, 1);
  pesan2 = pesan2.substr(1, pesan2.length) + pesan2.substr(0, 1);
  window.status = pesan2;
  setTimeout(marquee, 100);
}
marquee();
// gatau gapaham aku...
