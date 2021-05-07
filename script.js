let button = document.getElementById('button');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('input');
let orderedList = document.getElementById('orderedList');





button.addEventListener('click', function(e) {
    e.preventDefault();
    let para = document.createElement('li');
    let btn = document.createElement('button');
    let btn2 = document.createElement('button');
    btn.classList.add('btn');
    btn2.classList.add('btn');
    btn.innerText = 'delete!';
    btn2.innerText = 'Done!';
    para.classList.add('listed');
    para.innerText = input.value;
    toDoContainer.appendChild(para);
    para.appendChild(btn);
    para.appendChild(btn2);
    input.value = '';
    btn.addEventListener('click', function (){
        toDoContainer.removeChild(para);
    })
    btn2.addEventListener('click', function(){
        para.style.textDecoration = 'line-through';
    })
    
    });
   




