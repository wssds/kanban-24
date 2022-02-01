//tasks.allTasks.filter(t => t['priority'] == 'low'); filtern geht ncih
// aus Array oder Server?
// Zeile 59 unklar??
let currentDraggedElement;

function updateHTML() {
    console.log(tasks);
    let todo = tasks.filter(t => t['list'] == 'todo');
    
    document.getElementById('todo').innerHTML = '';
    document.getElementById('dotoday').innerHTML = '';
    document.getElementById('inprogress').innerHTML = '';
    document.getElementById('done').innerHTML = '';

    for (let i = 0; i < todo.length; i++) {
        let task = todo[i];
        let color = colorBg(task['priority']);
        document.getElementById('todo').innerHTML += generateTodoHTML(todo[i]);
        document.getElementById('todo').style = 'background-color:'+color+';';
        //document.getElementById('doToday').innerHTML += generateTodoHTML(low[i]);
        //document.getElementById('inProgress').innerHTML += generateTodoHTML(low[i]);
        //document.getElementById('done').innerHTML += generateTodoHTML(low[i]);
    
    }

    
    
    
    let dotoday = tasks.filter(t => t['list'] == 'dotoday');

    for (let i = 0; i < dotoday.length; i++) {
        let task = dotoday[i];
        let color = colorBg(task['priority']);
        //document.getElementById('boardContent').innerHTML += generateTodoHTML(dotoday[i]);
        document.getElementById('dotoday').innerHTML += generateTodoHTML(dotoday[i]);
        document.getElementById('dotoday').style = 'background-color:'+color+';';

        //document.getElementById('inProgress').innerHTML += generateTodoHTML(medium[i]);
        //document.getElementById('done').innerHTML += generateTodoHTML(medium[i]);
    }


    let inprogress = tasks.filter(t => t['list'] == 'inprogress');

    for (let i = 0; i < inprogress.length; i++) {
        let task = inprogress[i];
        let color = colorBg(task['priority']);
        //document.getElementById('boardContent').innerHTML += generateTodoHTML(high[i]);
        //document.getElementById('dotoday').innerHTML += generateTodoHTML(high[i]);
        document.getElementById('inprogress').innerHTML += generateTodoHTML(inprogress[i]);
        document.getElementById('inprogress').style = 'background-color:'+color+';';

        //document.getElementById('done').innerHTML += generateTodoHTML(high[i]);
    }


    let done = tasks.filter(t => t['list'] == 'done');

    for (let i = 0; i < done.length; i++) {
        let task = done[i];
        let color = colorBg(task['priority']);
        //document.getElementById('boardContent').innerHTML += generateTodoHTML(high[i]);
        //document.getElementById('dotoday').innerHTML += generateTodoHTML(high[i]);
        document.getElementById('done').innerHTML += generateTodoHTML(done[i]);
        document.getElementById('done').style = 'background-color:'+color+';';

        //document.getElementById('done').innerHTML += generateTodoHTML(high[i]);
    }

}



function generateTodoHTML(element) {
    return ` <div class="flex">
                <button onclick="poppey(${element.id})" draggable="true" ondragstart="startDragging(${element.id})" type="button" class="popupButton dnone" data-bs-container="body" data-bs-toggle="popover"
                data-bs-placement="top">${element.title}
                </button>
                <span class="popuptext d-none" id="Popup${element.id}">${element.category}<br>${element.date}<span class="popupi popup"onclick="popupclose(${element.id})">X</span></span>
            </div>    
    `;
}

function poppey(x) {
    document.getElementById("Popup" + x).classList.remove('d-none')
}

function popupclose(y) {
    document.getElementById("Popup" + y).classList.add('d-none')
}

function colorBg(priority) {
    if(priority == 'low'){
        color = 'rgb(172, 209, 86)';
    } else if (priority == 'medium'){
        color = 'rgb(250, 147, 87)';
    } else if (priority == 'high'){
        color = 'rgba(247, 43, 104, 0.767);';
    }
    return color;
}


// function boardinfo() {
//     for (let i = 0; i < tasks.length; i++) {
//         // backend funktioniert nicht, anil fragen??
//         // // category und priority auf chose... setzen???


//         // minlength="5" mindestens 5 Zeichen ?
//         // // required in felder von HTML Tasks angeben (Pflichtfelder)?
//         // // dafür: add tasks in form tag reingeben und keine onload
//         // funktion sondern onsubmit=""?
//         // type= email?? damit email richtig angegeben wird
//         // google: HTML5 form validation (weitere Tipps um die form von add tasks zu optimieren)
//         document.getElementById('boardContent').innerHTML += `
                                        
//             <button id="startDragging${i}" draggable="true" ondragstart="startDragging(${i})" type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
//                 data-bs-placement="top" data-bs-content="${tasks[i].date}<br>${tasks[i].category}<br>">
//                 ${tasks[i].title}
//             </button>
//          `;
        

//     }
//     updateHTML();

// }

// id den json objekten hinzufügen? erkennt doch zahl durch i aus der for 
//schleife oder nicht?

function startDragging(i) {
    currentDraggedElement = i;
    //document.getElementById('startDragging' + i)
}

//function generateTodoHTML(variable) {}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(list) {
    let task = tasks.find(t => t.id === currentDraggedElement);
    task['list'] = list;
    
    updateHTML();
}