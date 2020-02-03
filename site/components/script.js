let acc = document.getElementById('acc');
let block = document.getElementById('block-item');

block.style.display = 'none'

acc.addEventListener('click', function(){
    if(block.style.display == 'none'){
    block.style.display = 'block';
    }else {
        block.style.display = 'none'
    }
})


