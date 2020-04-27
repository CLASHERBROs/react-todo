import React from 'react';
import { render } from 'react-dom';
// const styles = {
//   fontFamily:'sans-serif',
//   textAlign:'center',
// };

let id = 0;

const Todo = props => (
    <li>
    <input type="checkbox" onClick={()=>props.CompletedTodo()} checked = {props.todo.checked} />
    <button onClick={()=>props.onDelete()}>delete</button>
    <span>{props.todo.text}</span>
    </li>
)
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: [],

    }
  }

  doneTodo(id){
    this.setState({
todos:this.state.todos.map(todo=> {  if(todo.id !== id)
  
  {return todo}    
  else{ 
    todo.checked = !todo.checked
   if(todo.checked === false)
   {
     ++uncheckedTodos;
     return todo
   }
   else{
--uncheckedTodos;
return todo
   }
   }  
})})
  }
  addTodo(){
  
    const text = prompt("TODO text please!")
    this.setState({
      todos: [...this.state.todos,{id:id++,text: text,checked:false}],

    })

  }
  removeTodo(id){

this.setState({

 todos: this.state.todos.filter(todo=> todo.id!==id)
})
  }
render(){
  return(
  <div>
    <div> ToDoCount {this.state.todos.length}</div>
    <div> Unchecked Todo {this.state.todos.filter(todo=>!todo.checked).length} </div>
    <button onClick={()=>this.addTodo()}> aDD tODO</button>
    <ul>
  {this.state.todos.map(todo => <Todo onDelete={()=>this.removeTodo(todo.id)} CompletedTodo={()=>this.doneTodo(todo.id)} todo = {todo} />)}
</ul>
</div>
  )
}
}
render(<App />,document.getElementById('root'))
