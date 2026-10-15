document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form=document.getElementById("create-task-form")
  form.addEventListener("submit",(event)=>{
        event.preventDefault()
        const description = form.querySelector(
    '[name="new-task-description"]'
).value;
        buildToDo(description)
        function buildToDo(task){
          const add= document.createElement("li")
           add.textContent=task
           const tasklist=document.getElementById("tasks")
           tasklist.append(add)
        }
       
  })     
});
