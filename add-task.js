


function addTasksStart() {
    // document.getElementById('showTasks').innerHTML = ``;
    document.getElementById('title_field').value = '';
    document.getElementById('start').value = '';
    document.getElementById('description').value = '';
    
}


async function addTasks() {
    let title = document.getElementById('title_field');
    let date = document.getElementById('start');
    let category = document.getElementById('cat');
    let priority = document.getElementById('cat-prio');
    let description = document.getElementById('description');
    
    let time = new Date();
    time.getTime();

    let allTasks = {
        'id': time.getTime(),
        'list': 'todo',
        'title': title.value,
        'date': date.value,
        'category': category.value,
        'priority': priority.value,
        'description': description.value,
    }

    tasks.push(allTasks);

    

    let tasksAsString = JSON.stringify(tasks);

    await backend.setItem('tasks', tasksAsString);
    
    addTasksStart();
}


