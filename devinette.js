let entreNom = document.querySelector("#nom")
let userEmails = document.querySelectorAll(".email")
let form1 = document.querySelector("#form1")
let form2 = document.querySelector(".form2")
let btnValid = document.querySelector("#btnValid")
let selectLevelP = document.querySelector(".selectLevelP")
let onePoint = document.querySelector(".onePoint")
let TroisES = document.querySelector(".TroisES")
let enterN = document.querySelector(".enterN")
let facile = document.querySelector('#facile')
let moyen = document.querySelector('#moyen')
let difficile = document.querySelector('#difficile')
let label = document.getElementsByTagName('label')
let entreEnt = document.querySelector('.entreEnt')
let doitEntrerDixCent = document.querySelector('.doitEntrerDixCent')
let pasBonNumber = document.querySelector('.pasBonNumber')
let troisPoint = document.querySelector('.troisPoint')
let nombrMille = document.querySelector('.nombrMille')
let cinqES = document.querySelector('.cinqES')
let cinqPoint = document.querySelector('.cinqPoint')
let dixEs = document.querySelector('.dixEs')
let errorNmber = document.querySelector('.errorNmber')
let win = document.querySelector('.win')
let pasBNubrD = document.querySelector('.pasBNubrD')
let gangner = document.querySelector('.gangner')
let inputOui = document.querySelector('.inputOui')
let frmquiter = document.querySelector('.frmquiter')
let perder = document.querySelector('.perder')
let scoreF = document.querySelector('.scoree')
let votreScore = document.querySelector('.votreScore')
let numberScore = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0
let audioSucces = document.querySelector('#succes')
let audioLose = document.querySelector('#lose')
let error = document.querySelector('#error')
let authentification = document.querySelector('#authe')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let validerAU = document.querySelector('#validerAU')


//  pour tester si le nom est deja existe ou nn 
const getEmail = () => {
    if (localStorage.getItem("email")) {
        authe.style.display = "none"
        form2.style.display = "block"
        Array.from(userEmails).forEach(useremail => {
            useremail.innerText = localStorage.getItem("email")
        })
    }
    // il teste est ce que le score est deja la 
    if (localStorage.getItem("score")) {
        scoreF.innerText = localStorage.getItem("score");
        votreScore.innerText = localStorage.getItem("score");
    }
}
// // score// //


getEmail();

validerAU.addEventListener("click", (event) => {
    event.preventDefault()
    let email = emailInput.value.toLowerCase();
    let password = passwordInput.value.toLowerCase()
    if (email && password) {
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,

            }),

        })
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                if (result.token) {
                    authentification.style.display = "none"
                    form2.style.display = "block"
                    localStorage.setItem("email", email)
                    Array.from(userEmails).forEach(useremail => {
                        useremail.innerText = emailInput.value;
                    })
                }
                else if (result.error) {
                    alert(result.error)
                }

            })
    }
})


// const Valid = btnValid.addEventListener("click", (event) => {
//     event.preventDefault()
//     // kandiroh bach les donnes duawlna maymchiwch
//     if (entreNom.value != "") {
//         localStorage.setItem("nom", entreNom.value)
//         Array.from(userNames).forEach(username => {
//             username.innerText = localStorage.getItem("nom")
//         })

//         form1.style.display = "none"
//         form2.style.display = "block"

//     }
//     else {
//         alert("Entrer votre nom")
//     }
// })



let nbrDevinette
let guess1 = 3
let guess2 = 5
let guess3 = 10

facile.addEventListener("input", () => {
    if (facile.checked) {
        enterN.style.display = "block"
        selectLevelP.style.display = "none"
        TroisES.style.display = "block"
        onePoint.style.display = "block"

        troisPoint.style.display = "none"
        cinqES.style.display = "none"
        entreEnt.style.display = "none"

        nombrMille.style.display = "none"
        cinqPoint.style.display = "none"
        dixEs.style.display = "none"
        nbrDevinette = 1 + Math.floor(Math.random() * 10)
        moyen.disabled = true;
        difficile.disabled = true;
    }

})

function numberBetwenOneTen() {
    if ((inptNumber.value < 1 || inptNumber.value > 10)) {
        enterN.style.display = "block"
        enterN.style.color = "red"
        errorNmber.style.display = "none"
    }
}

moyen.addEventListener("input", () => {


    if (moyen.checked) {

        enterN.style.display = "none"
        selectLevelP.style.display = "none"
        TroisES.style.display = "none"
        onePoint.style.display = "none"
        troisPoint.style.display = "block"
        cinqES.style.display = "block"
        entreEnt.style.display = "block"
        nombrMille.style.display = "none"
        cinqPoint.style.display = "none"
        dixEs.style.display = "none"
        nbrDevinette = 10 + Math.floor(Math.random() * 100)
        facile.disabled = true
        difficile.disabled = true
    }
})
difficile.addEventListener("input", () => {


    if (difficile.checked) {

        enterN.style.display = "none"
        selectLevelP.style.display = "none"
        TroisES.style.display = "none"
        onePoint.style.display = "none"
        troisPoint.style.display = "none"
        cinqES.style.display = "none"
        entreEnt.style.display = "none"
        nombrMille.style.display = "block"
        cinqPoint.style.display = "block"
        dixEs.style.display = "block"
        nbrDevinette = 100 + Math.floor(Math.random() * 1000)
        moyen.disabled = true
        facile.disabled = true
    }
})

const makeRed = () => {
    if (facile.checked) {
        enterN.style.color = "red"
        entreEnt.style.color = "greenyellow"
        nombrMille.style.color = "greenyellow"
    }
    else if (moyen.checked) {
        entreEnt.style.color = "red"
        enterN.style.color = "greenyellow"
        nombrMille.style.color = "greenyellow"
    }

    else if (difficile.checked) {
        nombrMille.style.color = "red"
        enterN.style.color = "greenyellow"
        entreEnt.style.color = "greenyellow"
    }
}
btnLEVEL.addEventListener("click", () => {

    let inptNumber = document.querySelector("#inptNumber")
    let facile = document.querySelector('#facile')
    let moyen = document.querySelector('#moyen')
    let difficile = document.querySelector('#difficile')
    if (!facile.checked) {
        // si on a pas checked
        selectLevelP.style.color = "red";
    }
    if (inptNumber.value == "") {
        makeRed();
    }
    else if ((inptNumber.value < 1 || inptNumber.value > 10) && facile.checked) {
        // si on a commance le jeu  ila kan m7ssour mabin 3 dyal esseay
        // dok les essay li andkhel f input khas ykon mabin 1 et 10
        if (guess1 > 0 && guess1 < 3) {
            enterN.style.display = "block"
            enterN.style.color = "red"
            errorNmber.style.display = "none"

        } else {
            enterN.style.color = "red"
            entreEnt.style.color = "greenyellow"
            nombrMille.style.color = "greenyellow"
        }

    }

    else if (inptNumber.value != nbrDevinette && facile.checked) {

        errorNmber.style.display = "block"
        errorNmber.style.color = "red"
        enterN.style.display = "none"
        selectLevelP.style.display = "none"
        TroisES.style.display = "block"
        onePoint.style.display = "none"
        error.play();

        if (guess1 > 0) {
            guess1--
            TroisES.textContent = `Vous avez ${guess1}  Essais pour deviner;`
            TroisES.style.color = "red"


        }

        if (guess1 === 0) {
            form2.style.display = "none"
            perder.style.display = "block"
            audioLose.play()

        }


    }
    else if (inptNumber.value == nbrDevinette && facile.checked) {

        form2.style.display = "none"
        gangner.style.display = "block"
        votreScore.innerHTML = numberScore + 1
        scoreF.innerHTML = numberScore + 1
        localStorage.setItem("score", numberScore + 1)
        audioSucces.play();


    }

    else if ((inptNumber.value < 10 || inptNumber.value > 100) && moyen.checked) {
        if (guess2 > 0 && guess2 < 5) {
            entreEnt.style.display = "block"
            entreEnt.style.color = "red"
            errorNmber.style.display = "none"
            pasBonNumber.style.display = "none"

        }
        else {
            entreEnt.style.color = "red"
            enterN.style.color = "greenyellow"
            nombrMille.style.color = "greenyellow"
            errorNmber.style.display = "none"
            errorNmber.style.display = "none"
        }

    }
    else if (inptNumber.value != nbrDevinette && moyen.checked) {

        pasBonNumber.style.display = "block"
        pasBonNumber.style.color = "red"
        enterN.style.display = "none"
        entreEnt.style.display = "none"
        selectLevelP.style.display = "none"
        TroisES.style.display = "none"
        onePoint.style.display = "none"
        errorNmber.style.display = "none"
        troisPoint.style.display = "none"
        cinqES.style.display = "block"
        if (guess2 > 0) {
            guess2--
            cinqES.textContent = `Vous avez ${guess2}  Essais pour deviner;`
            cinqES.style.color = "red"
        }
        if (guess2 === 0) {
            form2.style.display = "none"
            perder.style.display = "block"

        }

    }
    else if (inptNumber.value == nbrDevinette && moyen.checked) {

        form2.style.display = "none"
        gangner.style.display = "block"
        votreScore.innerHTML = numberScore + 3
        scoreF.innerHTML = numberScore + 3
        localStorage.setItem("score", numberScore + 3)
    }
    else if ((inptNumber.value < 100 || inptNumber.value > 1000) && difficile.checked) {


        if (guess3 > 0 && guess3 < 10) {
            nombrMille.style.display = "block"
            nombrMille.style.color = "red"
            errorNmber.style.display = "none"
            pasBonNumber.style.display = "none"
            pasBNubrD.style.display = "none"

        }
        else {
            nombrMille.style.color = "red"
            enterN.style.color = "greenyellow"
            entreEnt.style.color = "greenyellow"
        }

    }
    else if (inptNumber.value != nbrDevinette && difficile.checked) {

        pasBNubrD.style.display = "block"
        pasBNubrD.style.color = "red"
        pasBonNumber.style.display = "none"
        enterN.style.display = "none"
        entreEnt.style.display = "none"
        selectLevelP.style.display = "none"
        TroisES.style.display = "none"
        onePoint.style.display = "none"
        errorNmber.style.display = "none"
        troisPoint.style.display = "none"
        cinqES.style.display = "none"
        cinqPoint.style.display = "none"
        dixEs.style.display = "block"
        nombrMille.style.display = "block"

        if (guess3 > 0) {

            guess3--
            dixEs.textContent = `Vous avez ${guess3}  Essais pour deviner;`
            dixEs.style.color = "red"
            nombrMille.style.display = "none"

        }
        if (guess3 === 0) {
            form2.style.display = "none"
            perder.style.display = "block"

        }

    }
    else if (inptNumber.value == nbrDevinette && difficile.checked) {

        form2.style.display = "none"
        gangner.style.display = "block"
        votreScore.innerHTML = numberScore + 5
        scoreF.innerHTML = numberScore + 5
        localStorage.setItem("score", numberScore + 5)

    }

    else {
        selectLevelP.style.color = "greenyellow";
        enterN.style.color = "greenyellow"
        entreEnt.style.color = "greenyellow"
        nombrMille.style.color = "greenyellow"
    }
})


function playAgain() {

    gangner.style.display = "none"
    location.reload(form2);
    perder.style.display = "none"

}
function NoPlay() {
    gangner.style.display = "none"
    frmquiter.style.display = "block"
    perder.style.display = "none"
}




