const searchFunction = (keyword) => {
  const result = `https://www.google.com/search?q=${keyword}`;
  if (keyword == "") {
    return;
  }
  window.open(result);
};

document.getElementById("inputSearch").addEventListener("keydown", (e) => {
  const keyword = document.getElementById("inputSearch").value;
  if (e.key === "Enter") {
    e.preventDefault();
    searchFunction(keyword);
  }
});

const btnSearch = () => {
  const keyword = document.getElementById("inputSearch").value;
  if (keyword == "") {
    return;
  }
  const result = `https://www.google.com/search?q=${keyword}`;
  window.open(result);
};
