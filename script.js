const collaborator  = document.querySelector(".collaborator");
const  prise = document.querySelector(".prise");
const calendar  = document.querySelector(".calendar");
const notebook  = document.querySelector(".notebook");

const arrow = document.querySelector(".arrow");
const firstArrow = document.querySelector(".arrow1");
const secondArrow = document.querySelector(".arrow2");
const thirdArrow = document.querySelector(".arrow3");

const collaboratorCard = document.querySelector(".collaborator-form");
const priseCard = document.querySelector(".prise-form");
const calendarCard = document.querySelector(".calendar-form");
const notebookCard = document.querySelector(".notebook-form");


collaborator.addEventListener("click", editCollaborator)

function editCollaborator(){
    collaboratorCard.classList.toggle('active');
    collaboratorCard.classList.toggle('form');
    arrow.classList.toggle("translated")
}

// ===========================================


prise.addEventListener("click", editPrise)

function editPrise(){
    priseCard.classList.toggle('active');
    priseCard.classList.toggle('form');
    firstArrow.classList.toggle("translated")
}


// ============================================


notebook.addEventListener("click", editNotebook)

function editNotebook(){
    notebookCard.classList.toggle('active');
    notebookCard.classList.toggle('form');
    thirdArrow.classList.toggle("translated")
}



