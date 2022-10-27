const form = document.querySelector("form");
const boutton = document.getElementById("submit");
const chargement = document.getElementById("chargement");

boutton.addEventListener("click", () =>{
    let input = document.querySelectorAll("input");

    if (input[0].value == "etudiant@gmail.com" & input[1].value == "1234"){
        form.action = "etudiants/index.html";
    }
    
    else{
        if (input[0].value == "attacher@gmail.com" & input[1].value == "1234"){
            form.action = "attache_classe/index.html";
        }
        else{
            if (input[0].value == "responsable@gmail.com" & input[1].value == "1234"){
                form.action = "Responsable_p/index.html";
            }
            else{
                if (input[0].value != "" & input[1].value != ""){
                    alert("Compte inexistant !!");
                }
            }
        }
    }
})

window.addEventListener("load", () => {
    chargement.classList.add("fondu");
})