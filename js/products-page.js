// dropdown mobile filter
const dropDownFilter = document.querySelector('#dropDownFilter');
const filterBtn = document.querySelector('#filterBtn');

if(window.innerWidth<=768){
    filterBtn.addEventListener('click', ()=>{
        if(dropDownFilter.style.height === "100%"){
            dropDownFilter.style.height = '0px';
        }else{
            dropDownFilter.style.height = '100%';
        }
    });
}

// display products
import productsJson from "./products.json";
const container = document.querySelector('#container-products');
let templateCard = (name, tagType, imgLink)=>{
    return (`
    <div class="card product-card" style='width: 18rem;' data-tagtype="${tagType}">
        <img class="card-img-top" src="${imgLink}" alt="product">
        <div class="card-body">
            <h5 class='card-title'>${name}</h5>
            <p class='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis tempore corrupti maiores et. </p>
            <a href="#" class='btn btn-primary'>BOOK A CALL</a>
        </div>
    </div>
    `);
};
productsJson.forEach(product=>{
    container.innerHTML += templateCard(product.name, product.tagType, product.imgLink);
});


// filter logic
const filterButton = document.querySelector('#applyFilter');
const resetButton = document.querySelector('#resetFilter');
const products = document.querySelectorAll('.product-card')
const checkMarks = document.querySelectorAll('.mark');

filterButton.addEventListener('click', ()=>{
    let tags = [];
    function isNotMarked(product, markedTags){
        let mt;
        for(mt=0; mt<markedTags.length; mt++){
            if(product != markedTags[mt].name){
                return true;
            }else{
                return false;
            }
        }
    }

    // get marked tags
    let i;
    for(i=0; i<checkMarks.length; i++){
        if(checkMarks[i].checked){tags.push(checkMarks[i])};
    }

    // loop through marked tags
    let t;
    for(t=0; t<tags.length; t++){
        let tag = tags[t];
        let p;
        // loop through products
        for(p=0; p<products.length;p++){
            let productTag = products[p].getAttribute('data-tagType');
            if(productTag != tag.name && isNotMarked(productTag, tags)){
                products[p].style.display = 'none';
            }else{
                products[p].style.display = 'initial';
            }
        }
    }
});

resetButton.addEventListener('click', ()=>{
    // display all products
    let p;
    for(p=0; p<products.length;p++){
        products[p].style.display = 'initial';
    }
    // reset checkboxes
    let i;
    for(i=0; i<checkMarks.length; i++){
        checkMarks[i].checked = false;
    }
});