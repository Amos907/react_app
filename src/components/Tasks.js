import React, { Component } from 'react'
import {fetchTasks} from '../Actions/taskActions'
import {connect} from 'react-redux';

class Tasks extends Component {
    componentWillMount(){
        this.props.fetchTasks();
    }
    render() {
        const all_tasks = this.props.tasks.map(task =>(
            <div>
                 <h3>{task.title}</h3>
            </div>
        ));
        return (
            <div>
                {all_tasks}
            </div>
             
        )
    }
}

const mapStateToProps = state => ({
    tasks:state.tasks.fetch_tasks
});

export default connect(mapStateToProps, {fetchTasks})(Tasks);
