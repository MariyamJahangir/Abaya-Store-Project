
const bag = document.querySelector("#bag");
const cartbox = document.querySelector('#cartbox');


bag.addEventListener('mouseover', function(){
    cartbox.style.display = 'block' ;
});

bag.addEventListener('mouseout', function() {
    cartbox.style.display = 'none';
});

cartbox.addEventListener('mouseover', function(){
    cartbox.style.display = 'block' ;
});

cartbox.addEventListener('mouseout', function() {
    cartbox.style.display = 'none';
});
