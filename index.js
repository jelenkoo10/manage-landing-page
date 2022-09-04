const nav = document.querySelector("nav")
const overlay = document.getElementById("overlay")
const closeBtn = document.getElementById("close-btn")
const burger = document.getElementById("hamburger")
const formSubmit = document.getElementById("form-submit")
const input = document.getElementById("input")
const reviewCards = document.getElementsByClassName("review-card")
const dotArray = ["first", "second", "third", "fourth"]
const dots = document.getElementsByClassName("dot")
let isWarned = false

function validateEmail(userInput) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userInput)) {
        return true
    }
    return false
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

const warning = document.createElement("p")
warning.classList.add("warning")
warning.textContent = "Please insert a valid email"

if (window.innerWidth < 1100) {
    overlay.style.display = "none"
}

burger.addEventListener("click", function() {
    if (overlay.style.display == "none") {
        overlay.style.display = "flex"
        closeBtn.style.display = "block"
        burger.style.display = "none"
    }
})

closeBtn.addEventListener("click", function() {
    if (overlay.style.display == "flex") {
        overlay.style.display = "none"
        closeBtn.style.display = "none"
        burger.style.display = "block"
    }
})

formSubmit.addEventListener("click", function() {
    if (validateEmail(input.value)) {
        input.value = ""
        alert("Your mail address has been saved!")
        warning.style.display = "none"
        input.style.border = "none"
    } else {
        input.style.border = "2px solid red"
        warning.style.display = "block"
        if (!isWarned) {
            insertAfter(input, warning)
            isWarned = true
        }
    }
})

function cardInitialization() {
    if (window.innerWidth < 1100) {
        for (let i = 0; i < 4; i++) {
            if (i == 1) {
                reviewCards[i].style.display = "block"
                if (!dots[i].classList.contains("selected")) {
                    dots[i].classList.add("selected")
                }
            }
            else {
                reviewCards[i].style.display = "none"
                if (dots[i].classList.contains("selected")) {
                    dots[i].classList.remove("selected")
                }
            }
        }
    }
}

cardInitialization()

function seeCard(number) {
    for (let i = 0; i < 4; i++) {
        if (i == number) {
            reviewCards[i].style.display = "block"
            if (!dots[i].classList.contains("selected")) {
                dots[i].classList.add("selected")
            }
        }
        else {
            reviewCards[i].style.display = "none"
            if (dots[i].classList.contains("selected")) {
                dots[i].classList.remove("selected")
            }
        }
    }
}

