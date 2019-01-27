import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header'
import Footer from './Components/footer'
import TaskList from './Components/tasklist'
import TodoForm from './Components/addform';
import TaskForm from './Components/taskform';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     taskList : []
    }   
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var taskList =  JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        taskList : taskList
      })
    }   
  }

  addTodo(val){
    const todo = {name:val, isDone: false }
    if(localStorage.getItem('tasks') == null) {
      var taskList = []
      taskList.push(todo)
      localStorage.setItem('tasks', JSON.stringify(taskList))
    } else {
      var taskList = JSON.parse(localStorage.getItem('tasks'))
      taskList.push(todo)
      localStorage.setItem('tasks', JSON.stringify(taskList));
    } 
    this.setState({
      taskList: JSON.parse(localStorage.getItem('tasks'))
    }) 
  }
  s4(){
    return Math.floor((1+Math.random()) * 0x1000 ).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + this.s4() + '-' + this.s4()+ '-' + this.s4() 
  }


  onSubmit = (data) => {
    var {taskList} = this.state;
    data.id = this.generateID();
    taskList.push(data)
    this.setState({
      tasks : taskList
    });
    localStorage.setItem('tasks', JSON.stringify(taskList))
    
  }

  onUpDateStatus = (id) => {
    console.log(id)
    var {taskList} = this.state  
    var index = this.findIndex(id);
    if(index !== -1){
      taskList[index].status = ! taskList[index].status
      this.setState({
          taskList:taskList
      })
    }
  }

  findIndex = (id) => {
    var {taskList} = this.state
    var result = -1
    taskList.forEach((task,index) => {
      if(task.id === id){
        result = index;
      }
    });
    return result;
  }

  render() {
    return (
      <div>         
        <Header/>  
        <TaskForm onSubmit={this.onSubmit}/>
        <TaskList 
          tasks={this.state.taskList} 
          onUpDateStatus={this.onUpDateStatus}
         />            
        <Footer/>
       
      </div>
    )     
  }
}

//<TodoForm addTodo={this.addTodo.bind(this)}/>
//<TaskForm onSubmit={this.onSubmit}/>  
  
export default App;
