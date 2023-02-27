const buttonCompany = document.querySelector("#button-company");
const inputSection = document.querySelector("#formGroupExampleInput");
const companySection = document.querySelector("#company-main");
const matricesDiv = document.querySelector("#matrix-part");
const matricesSection = document.querySelector("#matrices-section");


function createCompanyAlert(e){
    let companyQuantity = inputSection.value.trim();
    removeElement(".alert");
    removeElement("#matrix-calculate-button");
    let addAlert = document.createElement("div");
    companyQuantity = parseInt(companyQuantity);
    if(Number.isInteger(companyQuantity)){
        if(companyQuantity>5){
            addAlert.className = "alert alert-primary";
            addAlert.id = "company-alert";
            addAlert.role = "alert";
            addAlert.innerText = "Please enter a value less then 6.";
        }
        else{
            addAlert.className = "alert alert-success";
            addAlert.id = "company-alert";
            addAlert.role = "alert";
            addAlert.innerText = "The number of companies are: "+companyQuantity;
            tableGenerator(companyQuantity);
            matrixCalculator(companyQuantity);
        }
    }
    else{
        addAlert.className = "alert alert-danger";
        addAlert.id = "company-alert";
        addAlert.role = "alert";
        addAlert.innerText = "Please enter a number";
    }
    companySection.appendChild(addAlert);
    e.preventDefault();
}

function tableGenerator(companyQuantity, matrix){
    removeElement(".table-responsive-md");
    let tableDiv = document.createElement("div");
    tableDiv.className = "table-responsive-md";
    let table = document.createElement("table");
    table.className = "table table-bordered table-hover";
    let thead = document.createElement("thead");
    thead.className = "thead-dark";
    let tbody = document.createElement("tbody");
    let mainTr = document.createElement("tr");
    let corner = document.createElement("th");
    corner.scope = "col";
    corner.innerText = "#";
    mainTr.appendChild(corner);
    if(companyQuantity.length!==0){
        for(let i=1;i<=companyQuantity;i++){
            let th = document.createElement("th");
            th.scope = "col";
            th.innerText = i.toString();
            mainTr.appendChild(th);
            let secTr = document.createElement("tr");
            let secTh = document.createElement("th");
            secTh.scope = "row";
            secTh.innerText = i.toString();
            secTr.appendChild(secTh);
            for(let j=1;j<=companyQuantity;j++){
                let td = document.createElement("td");
                let inputBox = document.createElement("input");
                inputBox.type = "number";
                inputBox.placeholder = j.toString();
                inputBox.setAttribute('size', '5%');
                td.appendChild(inputBox);
                secTr.appendChild(td);
            }
            tbody.appendChild(secTr);
        }
    }
    else{

    }
    thead.appendChild(mainTr);
    table.appendChild(thead);
    table.appendChild(tbody);
    tableDiv.appendChild(table);
    appendTable(tableDiv);
}

function addMatrixCalculateButton(){
    removeElement(".matrix-calculate");
    const row2 = document.createElement("div");
    row2.className = "row";
    row2.id = "matrix-calculate-button";
    const matrixCalculateButton = document.createElement("button");
    matrixCalculateButton.className = "btn btn-primary mt-3 w-25";
    matrixCalculateButton.type = "submit";
    matrixCalculateButton.innerText = "Calculate Matrix";
    row2.appendChild(matrixCalculateButton);
    matricesSection.appendChild(row2);
    matrixCalculateButton.addEventListener("click", matrixCalculator);
}

function matrixCalculator(companyQuantity){

    const matrixMade = document.querySelector("table");
    const tbody = matrixMade.querySelector("tbody");
    const allTd = tbody.querySelectorAll("td");
    // defining the matrix we are going to make the calculations with
    let myMatrix = [];
    for(let i =0;i<companyQuantity;i++){
        myMatrix[i] = [];
        for(let j=0;j<companyQuantity;j++){
            myMatrix[i][j] = j;
        }
    }

}


function removeElement(selectorName){
    let ifExists =  document.querySelector(selectorName);
    if(ifExists!==null){
        ifExists.remove();
    }
}

function appendTable(tableDiv){
    matricesDiv.appendChild(tableDiv);
    addMatrixCalculateButton();
}

main();
function main(){
    buttonCompany.addEventListener("click",createCompanyAlert);
}