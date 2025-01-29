const header = (name, address, phone) => {
  document.writeln("<center>");
  document.writeln("<hr style='width: 100%; border: solid 3px black;' />");
  document.writeln(`<h1 style="padding: .5rem;">${name}</h1`);
  document.writeln(`<h2 style="padding: .5rem;">${address}</h2>`);
  document.writeln(
    `<h3 style="margin-top: -2px ;padding: .5rem; filter: blur(2.5px); -webkit-filter: blur(2.5px);">${phone}</h3>`
  );
  document.writeln("<hr style='width: 100%; border: solid 3px black;' />");
  document.writeln("</center>");
};

header(
  (name = "Muhamad Arif Ulinnuha"),
  (address = "Mendiro RT04/RW07 Kalongan Ungaran Timur"),
  (phone = "6285877235985")
);
