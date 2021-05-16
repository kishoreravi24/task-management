// Drag and Drop action
const containers = document.querySelectorAll('.main-container');
const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        if(container.id == 'completed-main-container')  {
            const draggable = document.querySelector('.dragging');
            const draggable_child = document.querySelector('.dragging > h3').innerHTML;
            document.querySelector('.dragging > h3').innerHTML = '';
            var newcontent = document.createElement('del');
            newcontent.innerHTML = `<h3>${draggable_child}</h3>`
            draggable.appendChild(newcontent)
            container.appendChild(draggable)
        } else {
            const draggable = document.querySelector('.dragging');
            container.appendChild(draggable)
        }
    })
})

//Add note
const addNote = () => {
    var note = document.getElementById('textField').value;
    document.getElementById('textField').value = '';
    var mydiv = document.getElementById("todo-main-container");
    console.log(mydiv.id)
    for (let i = 0; i < 1; i++) {
        var newcontent = document.createElement('div');
        newcontent.className = "draggable";
        newcontent.draggable = true;
        newcontent.innerHTML = `<h3>${note}</h3>`
        mydiv.append(newcontent)
    }

    const containers = document.querySelectorAll('.main-container');
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        })

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        })
    })

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const draggable = document.querySelector('.dragging');
            container.appendChild(draggable)
        })
    })
}