let toggleNav = document.querySelector('.toggle-nav');

let list = document.querySelectorAll('.bi-list');
let times = document.querySelectorAll('.bi-x')

list.forEach(btn => {
    btn.addEventListener('click' , function(){
        toggleNav.classList.toggle('hidden')
    })
});

times.forEach(x => {
    x.addEventListener('click', function(){
        toggleNav.classList.toggle('hidden');
    })
})


let bodyS =  document.querySelector('body');
let togMode =  document.querySelector('.tog-mode');

togMode.addEventListener('click', run);
function run()
{
    colorChanger();
    bodyS.classList.toggle("darkMode");
}

// let bootIcon = document.querySelectorAll('a[href="#")');
// bootIcon.forEach(x => {
//     x.addEventListener('click', function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behaviour : 'smooth'
//         })
//     })
// })


function colorChanger(){
    let footicon =  document.querySelectorAll('.boot-icon2');
    let tog =  document.querySelector('.tog-mode')
    let loGo =  document.querySelector('.logo');
    let toggle = document.querySelector('.boot-icon3');
    let hOne = document.querySelector('h1');
    let para =  document.querySelectorAll('p');
    let h4 = document.querySelector('h4');
    let hThrees = document.querySelectorAll("h3");
    let navLinks =  document.querySelectorAll('.boot')


    navLinks.forEach(x =>{
        x.classList.toggle("h1darkMode")
    })
    h4.classList.toggle('h1darkMode');
    footicon.forEach(x =>
        x.classList.toggle("h1darkMode")
        )
    tog.classList.toggle('h1darkMode');
    toggle.classList.toggle('h1darkMode');
    loGo.classList.toggle("h1darkMode");
    hThrees.forEach(x => {
        x.classList.toggle('h1darkMode')
    })
    para.forEach(x =>{
        x.classList.toggle('h1darkMode');
    })
    hOne.classList.toggle("h1darkMode");
}

    
