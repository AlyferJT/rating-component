let allRatingButtons = document.querySelectorAll(".ratingBox-options-list-li")
let thankYouValue = document.querySelector(".ratingNumber")
let submitButton = document.querySelector(".ratingBox-button__btn")
let buttonNotSelectedError = document.querySelector(".buttonNotSelectedError")

let ratingBox = document.querySelector(".ratingBox")
let thankYouBox = document.querySelector(".thankYouBox")

let buttonNotSelected = true

let ratingValue = 0;

allRatingButtons[0].addEventListener("click", function () {
    allRatingButtons[0].classList.add("buttonSelect")
})

for (let i = 0; i < allRatingButtons.length; i++) {

    allRatingButtons[i].addEventListener("click", function () {

        for (let i = 0; i < allRatingButtons.length; i++) {
            allRatingButtons[i].classList.remove("buttonSelect")
        }

        allRatingButtons[i].classList.add("buttonSelect")

        ratingValue = allRatingButtons[i].textContent;
        thankYouValue.textContent = ratingValue
        buttonNotSelected = false

        buttonNotSelectedError.classList.add("displayNone")
    })

}

submitButton.addEventListener("click", function() {

    if (buttonNotSelected) {
        buttonNotSelectedError.classList.remove("displayNone")
    } else {
        ratingBox.classList.toggle("displayNone")
        thankYouBox.classList.toggle("displayNone")
    }
})