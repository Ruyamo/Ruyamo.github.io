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

// let bootIcon = document.querySelectorAll('a[href="#")');
// bootIcon.forEach(x => {
//     x.addEventListener('click', function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behaviour : 'smooth'
//         })
//     })
// })


    
