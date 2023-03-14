const buttonCompany = document.querySelector("#button-company");
const inputSection = document.querySelector("#formGroupExampleInput");
const companySection = document.querySelector("#company-main");
const matricesDiv = document.querySelector("#matrix-part");
const matricesSection = document.querySelector("#matrices-section");
const containerForFirst = document.querySelector("#card-container");

//this function is responsible for creating an alert after the button is been clicked
function createCompanyAlert(e){
    // we read the input box here
    let companyQuantity = inputSection.value.trim();
    //removing alert and the matrix calculation button if they exist so that they wouldn't been duplicated
    removeElement(".alert");
    removeElement("#matrix-calculate-button");
    //creating the alert. Here, we check if the quantity is an integer and if it is less then 5 or not.
    // depending on the number, we create different alerts. So far the tools supports up to 5 companies.
    let addAlert = document.createElement("div");
    companyQuantity = parseInt(companyQuantity);
    if(Number.isInteger(companyQuantity)){
        if(companyQuantity>5){
            addAlert.className = "alert alert-primary";
            addAlert.id = "company-alert";
            addAlert.role = "alert";
            addAlert.innerText = "Please enter a value less then 6.";
        }
        // here, if user input the value we can process, we generate the table
        else{
            addAlert.className = "alert alert-success";
            addAlert.id = "company-alert";
            addAlert.role = "alert";
            addAlert.innerText = "The number of companies are: "+companyQuantity;
            //create the first inputs for the first matrix
            createFirstValues(companyQuantity);
            // generating the table
            tableGenerator(companyQuantity);
        }
    }
    else{
        addAlert.className = "alert alert-danger";
        addAlert.id = "company-alert";
        addAlert.role = "alert";
        addAlert.innerText = "Please enter a number";
    }
    companySection.appendChild(addAlert);
}

// table is being generating depending on how many companies are there
function tableGenerator(companyQuantity){
    // removing an existing table
    removeElement(".table-responsive-md");
    // here, we are creating the table
    // first we create the parent elements and then the table's itself, after that we append it at the end of this function
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
        // here, we are putting input boxes into every cell in the table
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
    // finally, we append the elements of the table from child to parent basically
    thead.appendChild(mainTr);
    table.appendChild(thead);
    table.appendChild(tbody);
    tableDiv.appendChild(table);
    appendTable(tableDiv);
}
// this function is responsible for creating a matrix calculate button
function addMatrixCalculateButton(){
    // removing element if exists
    removeElement(".btn btn-primary mt-3 w-25");
    // creating the button with its parent elements
    const row2 = document.createElement("div");
    row2.className = "row";
    row2.id = "matrix-calculate-button";
    const matrixCalculateButton = document.createElement("button");
    matrixCalculateButton.className = "btn btn-primary mt-3 w-25";
    matrixCalculateButton.type = "submit";
    matrixCalculateButton.innerText = "Calculate Matrix";
    row2.appendChild(matrixCalculateButton);
    matricesSection.appendChild(row2);
}

// this function is responsible for removing an element
function removeElement(selectorName){
    let ifExists =  document.querySelector(selectorName);
    if(ifExists!==null){
        ifExists.remove();
    }
}

// appending table to the table
function appendTable(tableDiv){
    matricesDiv.appendChild(tableDiv);
    addMatrixCalculateButton();
}

function createFirstValues(companyQuantity){
    removeElement("#second-container-card");
    //creating the container
    let cardContainer = document.createElement("div");
    cardContainer.className = "card text-center w-50";
    cardContainer.id = "second-container-card";
    let cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.innerText = "Please enter the first values";
    cardContainer.appendChild(cardHeader);
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let containerBody = document.createElement("div");
    containerBody.className = "container d-flex mb-3";
    for(let i=0;i<companyQuantity;i++){
        let flexChild = document.createElement("div");
        flexChild.className = "flex-child"
        let label = document.createElement("label");
        label.className = "form-label d-flex justify-content-center align-items-center";
        label.innerText = "Company "+(i+1);
        let input = document.createElement("input");
        input.className = "form-control";
        input.placeholder = "Enter Value";
        flexChild.appendChild(label);
        flexChild.appendChild(input);
        containerBody.appendChild(flexChild);
    }
    cardContainer.appendChild(containerBody);
    containerForFirst.appendChild(cardContainer);
    matricesSection.appendChild(containerForFirst);
}

main();
function main(){
    //when the user create matrix button clicks, createCompanyAlert triggers
    buttonCompany.addEventListener("click", createCompanyAlert);
    document.addEventListener("keyup", function(e) {
        if (event.code === 'Enter') {
            createCompanyAlert();
        }
    });
}