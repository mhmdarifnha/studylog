import { projects } from "./data.js";

const itemsContainer = document.getElementById("items");
itemsContainer.innerHTML = '';

projects.forEach((project) => {
    itemsContainer.innerHTML += `
    <div class="item">
    <a href="${project.href}">
    <div class="thumbnail">
        <img src="${project.thumbnail}" alt="${project.title}">
    </div>
    <h3 class="project-title">${project.title}</h3>
    </a>
</div>
    `
})