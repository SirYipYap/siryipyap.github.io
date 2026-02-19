
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("filterContent").style.display = "none";
});

function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    newForm.style.display = "none";

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {
    const newForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");

    filterForm.style.display = "none";

    if (newForm.style.display === "none" || newForm.style.display === "") {
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";
    }
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }
        else if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }
        else if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

function addNewArticle() {
    const title = document.getElementById("inputHeader").value.trim();
    const text = document.getElementById("inputArticle").value.trim();

    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");

    if (title === "" || text === "") {
        alert("Please fill in all fields.");
        return;
    }

    let type = "";
    let markerText = "";

    if (opinionRadio.checked) {
        type = "opinion";
        markerText = "Opinion";
    } else if (recipeRadio.checked) {
        type = "recipe";
        markerText = "Recipe";
    } else if (lifeRadio.checked) {
        type = "update";
        markerText = "Update";
    } else {
        alert("Please select an article type.");
        return;
    }

    const newArticle = document.createElement("article");
    newArticle.classList.add(type);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = markerText;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    const linkPara = document.createElement("p");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "Read more...";
    linkPara.appendChild(link);

    newArticle.appendChild(marker);
    newArticle.appendChild(h2);
    newArticle.appendChild(p);
    newArticle.appendChild(linkPara);

    document.getElementById("articleList").appendChild(newArticle);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;

    filterArticles();

    document.getElementById("newContent").style.display = "none";
}