import React, {Component} from 'react';
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status : false
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }

    onSubmit = (event) => {
       event.preventDefault();
       this.props.onSubmit(this.state)
       this.onClear()
    }

    onClear = () => {
        this.setState({
            name : ''
        })
    }
    render(){
        return (
            <div className='pannel-body'>
                <form onSubmit = {this.onSubmit}>
                <div className = 'form-group'>
                    <ul>
                    <label> Task Name: </label>
                    <input 
                        type='text'
                        name = 'name'
                        value = {this.state.name}
                        onChange = {this.onChange}
                    />
                    </ul>
                </div>
                <div className='text-center'>
                    <button type ='submit' className='btn btn-warning'>
                        <span className='fa fa-plus mr-5'></span>Add
                    </button>
                </div>

                </form>
            </div>
          
        )
    }
}
export default TaskForm