const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const select = document.querySelector('.todoe')
const edite = document.querySelector('.edit input');
const body = document.querySelector('.container');
const editp = document.querySelector('.edit p');


todoButton.addEventListener('click', addtodo);

todoList.addEventListener('click', deletcheck)
select.addEventListener('click',filtertodo )
window.addEventListener('DOMContentLoaded', gettodo)

todoList.addEventListener('dblclick',edit)
edite.addEventListener('dblclick', editin)
// addEventListener

function addtodo(event){

   event.preventDefault();

  
      const div = document.createElement('div');
      div.classList.add('todo');
   
      const li = document.createElement('li');
      li.classList.add('item');
      li.innerHTML = todoInput.value;
      div.appendChild(li);
   
      savetodo(todoInput.value)
   
      const complete = document.createElement('button');
      complete.classList.add('check');
      complete.innerHTML = '\/';
      div.appendChild(complete);
   
      const delet = document.createElement('button');
      delet.classList.add('delet');
      delet.innerHTML = '|||';
      div.appendChild(delet)
   
   
      todoList.appendChild(div);
   
      todoInput.value = '';
      // console.log(editin.classList)
     addt()

}


function deletcheck(e) {

   let items = e.target;

   if(items.classList[0] == 'delet'){
      items.parentElement.classList.add('todoo');
      setTimeout(() => {
      items.parentElement.remove()
      deletmarktodo(items.parentElement)
         
      }, 500);
      delettodo(items.parentElement);
   }

   if(items.classList[0] == 'check'){
      let load = items.parentElement;
      setTimeout(() => {
        load.classList.toggle('mark');

        if(load.classList.contains('mark')){
         marktodo(load);
             
         }else{
            deletmarktodo(load)
         }
      }, 300);

      
      // marktodo(load);


   }

}

function filtertodo(e) {

   const todoes= document.querySelectorAll('.todo') 


   todoes.forEach(todoe => {


      switch(e.target.value){
         case 'all':
            todoe.style.display = 'flex'

            break;
         case 'completed':
           if(todoe.classList[1] == 'mark'){
               todoe.style.display = 'flex'

          }else{
            todoe.style.display = 'none';

             }
            break;
         case 'uncompleted':
            if(!todoe.classList.contains('mark')){
              todoe.style.display = 'flex'
   
               }else{
               todoe.style.display = 'none'
   
               }
               break;
      }
   })
}

function savetodo(todoe){
   let todo;

   if(localStorage.getItem('todo') == null){
      todo = [];
   }else{
      todo = JSON.parse(localStorage.getItem('todo'))
   }

   todo.push(todoe);

   localStorage.setItem('todo', JSON.stringify(todo))
}

function gettodo() {
   let todoe;
   if(localStorage.getItem('todo') == null){
      todoe = []
   }else{
      todoe = JSON.parse(localStorage.getItem('todo'))
   }


  todoe.forEach(todo => {

  
   const div = document.createElement('div');
   div.classList.add('todo');

   const li = document.createElement('li');
   li.classList.add('item');
   li.innerHTML = todo;
   div.appendChild(li);


   const complete = document.createElement('button');
   complete.classList.add('check');
   complete.innerHTML = '\\/';
   div.appendChild(complete);

   const delet = document.createElement('button');
   delet.classList.add('delet');
   delet.innerHTML = '|||';
   div.appendChild(delet)


   todoList.appendChild(div);
  })

  getmarktodo(todoe)

}

function delettodo(todoe){
   let todo;
   if(localStorage.getItem('todo') == null){
      todo = [];
   }else{
      todo = JSON.parse(localStorage.getItem('todo'))
   }

      const todoindex = todoe.children[0].innerHTML;

      todo.splice(todo.indexOf(todoindex),1);

      localStorage.setItem('todo', JSON.stringify(todo))

}

function marktodo(mark) {
   let todo;
   if(localStorage.getItem('todoe') == null){
      todo = [];
   }else{
      todo= JSON.parse(localStorage.getItem('todoe'))
   }
   let loade = mark.children[0].innerHTML;
   todo.push(loade)


   localStorage.setItem('todoe', JSON.stringify(todo))
}


function getmarktodo(){
   let todon;
   if(localStorage.getItem('todoe') == null){
      todon = [];
   }else{
      todon = JSON.parse(localStorage.getItem('todoe'))
   }


   const alle = document.querySelectorAll('.todo-list .todo')

   todon.forEach(todo => {
      alle.forEach(maken =>{

         let make = maken.children[0].innerHTML;
         if(todo == make){
           maken.classList.add('mark');
         }
      })
   })

   
}

function deletmarktodo(load){
   let todo;
   if(localStorage.getItem('todoe') == null){
      todo = [];
   }else{
      todo = JSON.parse(localStorage.getItem('todoe'))
   }


    let lodeindex = load.children[0].innerHTML;

   todo.splice(todo.indexOf(lodeindex),1)

   localStorage.setItem('todoe', JSON.stringify(todo))
}

function edit(e){


      if(e.target.classList[0] == 'todo'){
   
         edite.value = e.target.children[0].innerHTML;
        body.classList.add('body-edit');
        edite.classList.add('recive');
        editp.classList.add('editq')
        e.target.classList.add('peace');




     
     }
   }




function editin(){
   const ediot = document.querySelectorAll('.todo');
      

   ediot.forEach(to => {
      if(to.classList.contains('peace')){

         let index =  to.children[0].innerHTML;


         function editstorage(){
            let todo ;    
            if(localStorage.getItem('todo') == null){
            todo = []
            }else{
            todo = JSON.parse(localStorage.getItem('todo'))
            }

         todo.splice(todo.indexOf(index), 1);
         to.children[0].innerHTML = edite.value;
         todo.push(edite.value)
         localStorage.setItem('todo', JSON.stringify(todo))
         }
      
         function editstoragemark(){
            let todo;
            if(localStorage.getItem('todoe') == null){
               todo = []
            }else{
               todo = JSON.parse(localStorage.getItem('todoe'))
            }
          
           todo.splice(todo.indexOf(index), 1)

           todo.push(edite.value)
           localStorage.setItem('todoe', JSON.stringify(todo))
         }



         //declearing function

         editstorage()
         editstoragemark()
      }else{

      }
   })
      body.classList.remove('body-edit');
      edite.value = '';
      edite.classList.remove('recive')
      editp.classList.remove('editq')
     

}
   