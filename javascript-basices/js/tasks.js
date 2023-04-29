const addForm = document.querySelector('#add-form');
const form = document.querySelector('#add-form form');
 const input = document.querySelector('#add-form input');
 const addBtn = document.querySelector('#add-form button');
 const list = document.querySelector('#list');
 const btn = document.getElementById('add');
 const btn2 =  document.querySelector('.btn');
 const textSpan = document.querySelector('span#text');
const loadBtn = document.querySelector('#load');

loadBtn.addEventListener('click',function(){
    let result =fetch('data/task.json');
    result.then(function(response) {
        return response.json();
    }).then(function(json){
        console.log(json);  
        for(i=0; i < json.length; i++)
        {
            list.innerHTML += '<li>'+ json[i].completed +'</li>';
        }
    });

});

let task = {
    title : "Learn Java Script",
    level : "Beginner",
    completed : true,
    isCompleted : function(){
        if(this.completed)
        {
            //alert('YES');
        }
        else{
            //alert('NO');
        }
    }

};

task.completed = false;
task.isCompleted();

/*task.title = "Saeed";
alert(task.title);*/

 btn.innerHTML = 'Add new <b>Task</b>';

 btn.addEventListener('click', function(){
    /*let task = prompt('Enter the task name ?');
    list.innerHTML += '<li>' + task + '</li>';*/

    addForm.classList.remove('d-none');

});

form.addEventListener('submit',function(event){
    event.preventDefault();
    list.innerHTML += '<li>' + input.value + '</li>';
    input.value = "";
    addForm.classList.add('d-none');
});


input.addEventListener('keyup',function(e){
    console.log(e.key);
    
    

    textSpan.innerHTML = input.value;
});







btn.addEventListener('click',function(){
    /*let h1 = document.querySelector('h1');
    h1.style.color = 'red';
    h1.style.backgroundColor = 'green';*/
});
