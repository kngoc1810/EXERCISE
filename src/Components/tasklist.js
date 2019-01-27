import React, { Component } from 'react'
import TaskItem from './taskitem'

class TaskList extends Component {
    haveData(list){
        if (list.length>0){
            return true
        }              
        else {return false}
    }
  render() {
        var {tasks} = this.props      
        var elmTasks = tasks.map((task,index)=>{
            return <TaskItem
                        key ={task.id}
                        index ={index + 1}
                        task={task}
                        onUpdateStatus={ this.props.onUpdateStatus }
                    >
                    </TaskItem>       
         });
         var noData = <th>No Data</th>
        return (
          <div>
              
              <table className="table table-hover">
                  <thead>
                      <tr>
                          <th> Name </th>
                          <th> Done </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                         {this.haveData(tasks) ? elmTasks : noData }
                      </tr>
                  </tbody>
              </table>
              
          </div>
      )
  }
}

export default TaskList;