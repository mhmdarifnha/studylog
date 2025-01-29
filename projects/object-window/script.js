window.status = "Welcome";
window.alert("Selamat Datang");
let nama = window.prompt("Inpukan nama kamu", "Budi");
document.writeln(`Nama kamu adalah ${nama}`);
let askGndr = window.confirm("Apakah kamu cewe?");

if (askGndr) {
  document.writeln("Kenalan dong");
} else {
  document.writeln("Oke");
}

window.close();
