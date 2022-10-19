let toDoRepository = (function() {
    let repository = [
      {
        task: "Task",
        note: "Note",
        tags: ["grass", "poison"]
      }
    ];
    function add(task) {
      if (
        typeof task === "object" &&
        "task" in task &&
        "note" in task &&
        "tags" in task
      ) {
        repository.push(task);
      } else {
        console.log("Task is not complete");
      }
    }
    function getAll() {
      return repository;
    }
    function addListItem(task) {
      let taskList = document.querySelector(".task-list");
      let button = document.querySelector("#task-list__button");
      let taskLi = document.createElement("li");
      let taskItem = document.createElement("div");
      let done = document.createElement("div");
      let note = document.createElement("p");
      let remove = document.createElement("div");

      note.innerText = task.task;

      taskItem.classList.add("taskItem");
      done.classList.add("done");
      note.classList.add("note");
      remove.classList.add("remove");
      
      let taskItemUnit = function() {
        taskItem.appendChild(done);
        taskItem.appendChild(note);
        taskItem.appendChild(remove);      
        taskLi.appendChild(taskItem);
        taskList.appendChild(taskLi);
      }

      taskItemUnit();
            

      button.addEventListener('click', function(event) {
        addListItem(task)
      });

    }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();
  
  //toDoRepository.add({ task: "Task", note: "Note", tags: ["electric"] });


  
  console.log(toDoRepository.getAll());
  
  toDoRepository.getAll().forEach(function(task) {
    toDoRepository.addListItem(task);
  });
  