import { projects } from "./data.js";

const itemsContainer = document.getElementById("items");
itemsContainer.innerHTML = '';

const displayProjects = (projects) => {
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
}

displayProjects(projects)

const input = document.getElementById('searchInput');
const button = document.getElementById('searchButton')
const searching = document.getElementById("searching");
const show = document.getElementById('showAll');
const loading = document.getElementById('loading');
const dots = document.getElementById('dots')

let dotCount = 0;
let loadingInterval;

function showLoading() {
    loading.style.display = 'block';
    dotCount = 0;
    dots.textContent = '';

    loadingInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        dots.textContent = '.'.repeat(dotCount);
    }, 500)
}

function hideLoading() {
    clearInterval(loadingInterval);
    loading.style.display = 'none';
}

const search = (keyword) => {
    if (!keyword) {
        searching.innerHTML = 'Ketik sesuatu untuk mencari...';
        show.textContent = '';
        displayProjects(projects)
    } else {
        searching.innerHTML = '';
        const filteredProjects = projects.filter((project) =>
            project.title.toLowerCase().includes(keyword.toLowerCase()));
        showLoading();
        setTimeout(() => {
            searching.textContent = `Hasil pencarian untuk ${keyword}`;
            show.textContent = 'Tampilkan semua';
            displayProjects(filteredProjects);
            hideLoading();
            input.value = '';
        }, 1500);
    }
};

input.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        search(input.value);
    }
});

button.addEventListener('click', () => {
    search(input.value);
})

show.addEventListener('click', () => {
    showLoading();
    searching.textContent = '';
    setTimeout(() => {
        displayProjects(projects);
        show.textContent = '';
        hideLoading();
    }, 1500)
})