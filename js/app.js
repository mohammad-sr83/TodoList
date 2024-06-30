let todoInput=document.getElementById('itemInput')
let addBtn=document.getElementById('addButton')
let clearBtn=document.getElementById('clearButton')
let todoList=document.getElementById('todoList')
let arrrey=[]
clearBtn.addEventListener('click',function(){
    todoList.innerHTML=''
    localStorage.clear()
})
function todoBtnList(labelValue,btnComp){
  let arreyfunc={
        contect:labelValue,
        status:'notcomplate'
    }
    arrrey.push(arreyfunc)
    let li =document.createElement('li')
    li.className='completed well'
    let label =document.createElement('label')
    label.innerHTML=labelValue
    let btnCom=document.createElement('button')
    btnCom.innerHTML=btnComp
    btnCom.className='btn btn-success'
    let btnDelete=document.createElement('button')
    btnDelete.innerHTML='Dlelete'
    btnDelete.className='btn btn-danger'
    li.append(label,btnCom,btnDelete)
    btnCom.addEventListener('click',function(){
        let todoObj=JSON.parse(localStorage.getItem('todo'))
        todoObj.forEach(function(event){
            if (event.contect===labelValue) {
              event.status='complate'
            }
          });
        btnCom.innerHTML='uncomplate'   
        localStorage.setItem('todo',JSON.stringify(todoObj)) 
    })
    btnDelete.addEventListener('click',function(){
        let todoObj=JSON.parse(localStorage.getItem('todo'))
        let index = todoObj.findIndex(function(event){
            return event.contect===labelValue
        })
        todoObj.splice(index,1)
        localStorage.setItem('todo',JSON.stringify(todoObj))
        li.remove()
      })
    todoList.append(li)
    todoInput.value=''
    localStorage.setItem('todo',JSON.stringify(arrrey))
}
addBtn.addEventListener('click',todoBtnList(todoInput.value,'complate'))

todoInput.addEventListener('keydown',function(ev){
    if (ev.which == 13) {
        todoBtnList(todoInput.value,'complate')
    }
})
window.onload=function(){
    let todoLI =JSON.parse(localStorage.getItem('todo'))
    todoLI.forEach(function(event){
        let li =document.createElement('li')
        li.className='completed well'
        let label =document.createElement('label')
        label.innerHTML=event.contect
        let btnCom=document.createElement('button')
        btnCom.innerHTML=event.status
        btnCom.className='btn btn-success'
        btnCom.addEventListener('click',function(){
            let todoObj=JSON.parse(localStorage.getItem('todo'))
            todoObj.forEach(function(event){
                if (event.contect===label.innerHTML) {
                  event.status='complate'
                }
              });
            btnCom.innerHTML='uncomplate'   
            localStorage.setItem('todo',JSON.stringify(todoObj)) 
        })
        let btnDelete=document.createElement('button')
        btnDelete.innerHTML='Dlelete'
        btnDelete.className='btn btn-danger'
        btnDelete.addEventListener('click',function(){
            let todoObj=JSON.parse(localStorage.getItem('todo'))
            let index = todoObj.findIndex(function(event){
                return event.contect===label.innerHTML
            })
            todoObj.splice(index,1)
            localStorage.setItem('todo',JSON.stringify(todoObj))
            li.remove()
          })
        li.append(label,btnCom,btnDelete)
        todoList.append(li)
        todoInput.value=''
        localStorage.setItem('todo',JSON.stringify(todoLI))
    })    
}
