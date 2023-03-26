let opener = document.querySelector(".opener");
let teachers = [
    {name: 'Matteo', description: 'Docente Frontend di Hackademy 69', url: './media/Matteo.png'},
    {name: 'Marco', description: 'Docente Frontend e responsabile Hackademy', url: './media/Marco.png'},
    {name: 'Nicola', description: 'Docente Frontend e noto sex-symbol', url: './media/Nicola.png'},
    {name: 'Davide', description: 'Docente Backend e giocatore di ruolo', url: './media/Davide.png'},
];

let circle = document.querySelector(".circle");
let innerface = document.querySelector(".inner-face");
let cardName = document.querySelector("#cardname");
let carddescription = document.querySelector("#carddescription");
let flipcard = document.querySelector(".flip-card");

teachers.forEach((teacher)=>{

    let div = document.createElement("div");
    div.classList.add("moved");
    div.style.backgroundImage = `url(${teacher.url})`;
    circle.appendChild(div);
    

})

let movedDivs = document.querySelectorAll(".moved");
let check = false;

opener.addEventListener("click",()=>{
  
    if(check == false){
        opener.style.transform = "rotate(45deg)";
        movedDivs.forEach((moved , i)=>{
            let angle = (360 * i) / movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
        });
        check = true;
    }else{
        check = false;
        opener.style.transform = "rotate(0deg)";
        movedDivs.forEach((moved , i)=>{
        moved.style.transform = `rotate(0deg) translate(0px)`;
        flipcard.classList.add("d-none");
        });
    }
});

movedDivs.forEach((moved, i)=>{

    moved.addEventListener("click" , ()=>{
        flipcard.classList.remove("d-none");
        let docente = teachers[i];
        innerface.style.backgroundImage = `url(${docente.url})`
        cardName.innerHTML = docente.name;
        carddescription.innerHTML = docente.description;
    });

});