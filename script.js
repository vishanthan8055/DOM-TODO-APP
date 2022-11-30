const form = document.querySelector('.my-form');
const name = document.querySelector('#name');
const task = document.querySelector('#task');
const list = document.querySelector('.items');


form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(name.value == '' || task.value ==''){
        alert("Enter valid data");
        name.value = '';
        task.value = '';
    }
    else{
        const li = document.createElement('li');
        const h = document.createElement('h3');
        const p = document.createElement('p');
        // li.appendChild(
        //     h.appendChild(
        //         document.createTextNode(`${name.value}`)
        //     ));
        // li.appendChild(    
        //     p.appendChild(
        //         document.createTextNode(`${task.value}`)
        //     )
        // );
        li.innerHTML=(`<h3>${name.value}</h3><p>${task.value}</p>`);
        li.classList.add('item')
        list.append(li);
        name.value = '';
        task.value = '';
    }
}
if(document.querySelector(".del") !== null){
const close = document.querySelector('.del');
close.addEventListener("click",deleteTask);
function deleteTask(e){
    const i = document.querySelector("li:first-child");
    i.parentElement.removeChild(i);
}
}
