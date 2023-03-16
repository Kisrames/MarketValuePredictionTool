const floatChecker = (inputValue) => {
    let flag = true;
    if(parseFloat(inputValue)){
        if(inputValue>=1){
            flag=false;
        }
    }
    else{
        flag=false;
    }
    return flag;
};

const setBorderRed = (input) => {
    input.style.border = "5px solid #D70040";
    input.style.borderRadius = "20px";
};

const setBorderNormal = (input) => {
    input.style.border = "";
    input.style.borderRadius = "";
};

const matrixCreator = () => {
    const companyInput = inputSection.value.trim();
    const companyQuantity = parseInt(companyInput);
    let matrix = new Array((companyQuantity));
    for(let i=0;i<companyQuantity;i++){
        matrix[i] = new Array(companyQuantity);
    }
    return [matrix, companyQuantity];
};

const extractMatrix = () => {
    const [matrix, company]= matrixCreator();
    const tbody = document.querySelector("tbody");
    const trs = tbody.querySelectorAll("tr");
    for(let i=0;i<company;i++){
        const inputs = trs[i].querySelectorAll("input");
        for(let j=0;j<company;j++){
            matrix[i][j] = inputs[j].value;
        }
    }
    console.log(matrix);
};

const readValues = () => {
    const allInputs = document.querySelectorAll("#only-float");
    let j=0;
    let flag = true;
    for(let i=0;i<allInputs.length;i++){
        const value = allInputs[i].value;
        if(floatChecker(value)){
            setBorderNormal(allInputs[i]);
        }
        else{
            setBorderRed(allInputs[i]);
            flag=false;
        }
    }
    if(flag===true){
        extractMatrix();
    }
};