let addInput = document.getElementById("addIngredient");

addInput.addEventListener("click", addIngredient);

function addIngredient() {
    let inDiv = document.getElementById('ingredientDiv');
    let newInput = document.createElement("input");

   newInput.setAttribute("type","text");
    newInput.setAttribute("class","form-control my-2");
    newInput.setAttribute("placeholder","Write here");
    newInput.setAttribute("name","ingredient[]");


    inDiv.appendChild(newInput);
}

let addInputIns = document.getElementById("addInstruction");

addInputIns.addEventListener("click", addInstruction);

function addInstruction() {
    let inDiv = document.getElementById('instructionDiv');
    let newInput = document.createElement("input");

   newInput.setAttribute("type","text");
    newInput.setAttribute("class","form-control my-2");
    newInput.setAttribute("placeholder","Write here");
    newInput.setAttribute("name","instruction[]");


    inDiv.appendChild(newInput);
}

let addInputCat = document.getElementById("addCategory");

addInputCat.addEventListener("click", addCategory);

function addCategory() {
    let inDiv = document.getElementById('categoryDiv');
    let newInput = document.createElement("input");

   newInput.setAttribute("type","text");
    newInput.setAttribute("class","form-control my-2");
    newInput.setAttribute("placeholder","Write here");
    newInput.setAttribute("name","category[]");


    inDiv.appendChild(newInput);
}
