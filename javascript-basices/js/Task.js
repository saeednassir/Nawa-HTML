

function Task(title,Completed){
    this.title = title;
    this.Completed = Completed;

    this.isCompleted = function(){
        if(this.Completed){
            alert('YES');
        }else{
            alert('NO');
        }
    }
}

let task1 = new Task('learn Css',false);
alert(task1.isCompleted());

let task2 = new Task('learn php',true);
alert(task2.title);