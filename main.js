// Get all the main menu items
const menuItems = document.querySelectorAll('.main-menu li');
const allPages = document.querySelectorAll('.template')

let animationArray = ['righ-to-left', 'left-to-right', 'top-to-bottom', 'bottom-to-top']

// Mobile Menu Toggle
let bars = document.querySelector('.mob-toggle')
let MobMenu = document.querySelector('.main-header')

bars.addEventListener('click', function (e) {
    MobMenu.classList.toggle('left-block')
    e.preventDefault()
})




// Add a click event listener to each menu item
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
    // Remove the active class from all the menu items
    menuItems.forEach((item) => {
        item.classList.remove('active')
    })

    // Hide Menu After Choosing A Page
    document.querySelector('.main-header').classList.remove('left-block')

    // Get Tab Name
    let menuItemWord = menuItem.querySelector('span').textContent
    
    for (let i =0; i<allPages.length ;i++) {
        let dataWord = allPages[i].getAttribute('data-name')
        if (dataWord === menuItemWord) {
            allPages[i].classList.remove('d-none')
        } else {
            allPages[i].classList.add('d-none')
        }
    }
    // Add the active class only to the clicked menu item
    event.currentTarget.classList.add('active');

    
    });
});



// Pages Setup
allPages.forEach((page) => {
    page.classList.add('d-none')
})

// Assign Animation Randomly for Each Sub Pages [about me, resume...]
for (let i =0;i<animationArray.length;i++) {
    allPages[i].classList.add(animationArray[Math.floor(Math.random() * animationArray.length)])
}


// image animation

let img = document.querySelector('.the-img')
img.addEventListener('mousemove', (e) => {
    
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15
    img.style.transform = ` rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})

img.addEventListener('mouseout', (e)=>{
    img.style.transform = ` rotateX(${0}deg) rotateY(${0}deg)`

})


// Start Carousal 

// Carousal Btns
let btnLeft = document.querySelector('.one')
let btnRight = document.querySelector('.two')

// Carousal
let carousal = document.querySelector('.all-testimonials-wrapper')
let testemonialsCount = document.querySelectorAll('.testimonial-template')


console.log(testemonialsCount.length)

btnLeft.addEventListener('click', () => {
    
    carousal.style.marginLeft = 'calc(-50%)'
})

btnRight.addEventListener('click', () => {
    
    
    carousal.style.marginLeft = '0px'
})


// Resume Functions
let resumeTab = document.querySelector('.resume')
let fill = document.querySelector('.fill')
resumeTab.addEventListener('click', () => {
fill.classList.add('fill-animation')
})


// Elzero Training 


