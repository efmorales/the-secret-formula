// Part one

let alertForm = document.querySelector("#alertForm");
let textInput = document.querySelector("#textInput");
// let submitButton = document.querySelector("#submitButton");



alertForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert(textInput.value);

    textInput.value = "";

})


// Part two

let sandwichForm = document.querySelector("#sandwichForm");

let ingredientSelect = document.querySelectorAll("#sandwichForm .ingredients")

console.log(typeof ingredientSelect);

for (let i = 0; i < ingredientSelect.length; i++) {
    
    console.log(ingredientSelect[i].id);
    
}


sandwichForm.addEventListener("submit", function(event){

    event.preventDefault();

    let newStr = "";

    for (let i = 0; i < ingredientSelect.length; i++) {
        
        if (ingredientSelect[i].checked === true){

            newStr += `${ingredientSelect[i].id}, `;

        }
    }

    alert(`Your sandwich contains: ${newStr}`);

})

// 3.

let hairForm = document.querySelector("#haircutForm");

let hairDate = document.querySelector("#hairDate");
let hairHour = document.querySelector("#hairHour");
let hairName = document.querySelector("#hairName");
let hairShort = document.querySelector("#hairShort");
let hairLong = document.querySelector("#hairLong");

let hairChoice = ""

console.log(hairLong.value);

hairForm.addEventListener("submit", function(event){
    
    event.preventDefault();

    if (hairShort.value === "on"){
        hairChoice = "Short";
    } else if (hairLong.value === "on"){
        hairChoice = "Long";
    }

    alert(`Haircut scheduled for ${hairDate.value} at ${hairHour.value} with ${hairName.value} for ${hairChoice} hair.`); 

    hairDate.value = "";
    hairHour.value = "";
    hairName.value = "";
    hairShort.checked = true;

});

// 4.

let accountForm = document.querySelector("#accountForm");

let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPass = document.querySelector("#userPass");
let userPassTwo = document.querySelector("#userPassTwo");


accountForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert(`Congratulations, your new account: ${userName.value} associated to ${userEmail.value} has been created succesfully.`)

    userName.value = "";
    userEmail.value = "";
    userPass.value = "";
    userPassTwo.value = "";
})