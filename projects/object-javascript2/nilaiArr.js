const loopNilai = () => {
  document.writeln("<h4 class='subBab'>Loop Array</h4>");
  let nilai = ["A", "B", "C", "D", "E"];
  for (let i = 0; i < nilai.length; i++) {
    document.writeln(`<p>${nilai[i]}</p>`);
  }
};

loopNilai();
