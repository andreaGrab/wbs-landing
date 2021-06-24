// get DOM target elements
const items = document.querySelectorAll('.carousel-item');
let titleCaro = document.querySelector('.title-slide');
let descriptionCaro = document.querySelector('.description-slide');

// defining on class change function
function onClassChange(item){
    let itemCaro = item;
    let lastClass = itemCaro.className;
    window.setInterval(()=>{
        let currentClass = itemCaro.className;
        if(currentClass === "carousel-item active"){
            // get title & descritption from bootstrap slide DOM
            let titleSlide = itemCaro.childNodes[3].children[0].innerHTML;
            let descriptionSlide = itemCaro.childNodes[3].children[1].innerHTML;
            // setting target DOM elements to bootstrap DOM elements value
            titleCaro.innerHTML = titleSlide;
            descriptionCaro.innerHTML = descriptionSlide;
            
            lastClass=currentClass;
        }
    }, 10);
}

// looping through list items from bootstrap carousel 
let i;
for(i=0; i<items.length; i++){
    onClassChange(items[i]);
}