

function backlog() {
    for (let i = 0; i < tasks.length; i++) {
        // backend funktioniert nicht, anil fragen??
        // // category und priority auf chose... setzen???


        // minlength="5" mindestens 5 Zeichen ?
        // // required in felder von HTML Tasks angeben (Pflichtfelder)?
        // // dafür: add tasks in form tag reingeben und keine onload
        // funktion sondern onsubmit=""?
        // type= email?? damit email richtig angegeben wird
        // google: HTML5 form validation (weitere Tipps um die form von add tasks zu optimieren)
        document.getElementById('showTasksBacklog').innerHTML += `
         
         <div class="textAndField">
         
         <div id="prioColor${i}" class="dnone">
             <div>
                 <img src="images/Maria.png" alt="">
             </div>
 
         </div>
         <div class="board-card  bg1">
             <div class="cont-inside"><input type="text" placeholder="${tasks[i]['title']}"><input type="text" placeholder="E-mail">
             </div>
             <div>
                 <input class="category" type="text" placeholder="${tasks[i]['category']}">
             </div>
             <div>
                 <textarea name=""
                     id="discription">${tasks[i]['description']}</textarea>
             </div>
         </div>
     </div>
         `;
        prioType(i);
    }

}


//------------------Color change of Priority-------------//
function prioType(i) {

    if (tasks[i]['priority'] == 'low') {
        document.getElementById('prioColor' + i).classList.remove('dnone');
        document.getElementById('prioColor' + i).classList.add('prioL');
    }

    if (tasks[i]['priority'] == 'medium') {
        document.getElementById('prioColor' + i).classList.remove('dnone');
        document.getElementById('prioColor' + i).classList.add('prioM');
    }

    if (tasks[i]['priority'] == 'high') {
        document.getElementById('prioColor' + i).classList.remove('dnone');
        document.getElementById('prioColor' + i).classList.add('prioH');
    }
}