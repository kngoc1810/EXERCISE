import React, { Component } from 'react'
class TaskItem extends Component {
  
    onUpDateStatus = () => {
  
       this.props.onUpDateStatus(this.props.task.id)
        
    }
     render (){
        var {task, index} = this.props
    return (
        <tr>
            <td key = {index}>{task.name}</td>
            <td className="text-center">
                <span
                    className={task.status === true
                        ? 'label label-danger' : 'label label-success'
                    }
                    onClick = {this.onUpDateStatus}
                >{ this.props.task.status === true ? 'Done' : 'In Process'}
                </span>
            </td>   
        </tr>
    )
}
}
export default TaskItem;