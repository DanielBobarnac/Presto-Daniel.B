let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll(".nav-link");
let logonavbar = document.querySelector("#logoNavbar");
let ancora = document.querySelector("#ancora");
let collapse = document.querySelector("#collapse");
let firstnumber = document.querySelector("#firstnumber");
let secondnumber = document.querySelector("#secondnumber");
let thirdnumber = document.querySelector("#thirdnumber");
let fourthnumber = document.querySelector("#fourthnumber");
let check = false;
let confirm = true;

window.addEventListener('scroll',()=>{
    let scrolled = window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove('bgrblue');
        navbar.classList.add('bgrverde');
        navbar.style.height= "70px";
        links.forEach((link)=>{link.style.color = "var(--blue)"})
        logonavbar.src = "http://127.0.0.1:5500/media/barcablue.png";
        ancora.src = "http://127.0.0.1:5500/media/ancorablue.png";
        collapse.classList.remove('bgrblue');
        collapse.classList.add('bgrverde');
    }else{
        navbar.classList.add('bgrblue');
        navbar.classList.remove('bgrverde');
        navbar.style.height= "110px";
        logonavbar.src = "http://127.0.0.1:5500/media/barcaturchese.png"
        ancora.src = "http://127.0.0.1:5500/media/ancoraturchese.png"
        links.forEach((link)=>{link.style.color = "var(--turchese)"})
        collapse.classList.add('bgrblue');
        collapse.classList.remove('bgrverde');
    }
});


ancora.addEventListener("click",()=>{
    if(check == false){
        ancora.style.transform = "rotate(-90deg)";
        check = true ;
    }else{
        ancora.style.transform = "rotate(0deg)";
        check = false;
    }
})


function CreateInterval(n , element , time){
    let counter = 0;
    let interval = setInterval(()=>{
        if(counter < n){
            counter++
            element.innerHTML = counter;
    
        }else{
            clearInterval(interval);
        }
    },time);

    setTimeout(()=>{
        confirm = true
    },20000);
    
}

function countdown(){
    let counter2 = 20;
    let interval2 = setInterval(()=>{
        
        if(counter2 > 0){
            counter2--
            fourthnumber.innerHTML = counter2;
    
        }else{
            clearInterval(interval2);
        }
    },1000);
}


let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && confirm){
            CreateInterval(400,firstnumber,50);
            CreateInterval(100,secondnumber,60);
            CreateInterval(200,thirdnumber,20);
            countdown();
            confirm = false;
        }
    })

});

observer.observe(firstnumber);


// recensioni

let reviews = [
    {user: "Daniel" , description:"Questo sito e' fatto molto bene" , rank: 5},
    {user: "Angelo" , description:"Sito carino" , rank: 3},
    {user: "Francesco" , description:"Mi sarebbe piaciuto un'altro tema" , rank: 2},
    {user: "Tina" , description:"Daniel sei bravissimo!<3" , rank: 5},
]

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach((recensione)=>{

    let div = document.createElement("div");
    div.classList.add(".swiper-slide");
    div.innerHTML = `
            <div class="card-review">
              <p class="lead text-center">${recensione.description}</p>
              <p class="h4 text-center">${recensione.user}</p>
              <div class="d-flex justify-content-center star">
               
              </div>
            </div>
    `;
    swiperWrapper.appendChild(div);
});

let stars = document.querySelectorAll(".star");

stars.forEach((star ,index)=>{

    for(let i = 1 ; i <= reviews[index].rank ; i++){
        let icon = document.createElement("i");
        icon.classList.add("fa-solid" , "fa-star");
        star.appendChild(icon);

    }

    let difference = 5 - reviews[index].rank;
    for(let i = 1 ; i <= difference ; i++){
        let icon = document.createElement("i");
        icon.classList.add("fa-regular" , "fa-star");
        star.appendChild(icon);

    }

})

// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "flip",
    grabCursor: true,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
        delay: 2000,
      },

  });