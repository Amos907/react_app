import React, { Component } from 'react'

class AddTask extends Component {
    render() {
        return (
            <div id ="form-wrapper">
                <div id ="form">
                    <div className = "flex-wrapper">
                        <div style ={{flex:6}}>
                            <input className ="form-control" type ="text" id = "title"></input>
                        </div>

                        <div style = {{flex:1}}>
                            <input id ="submit" type = "submit" className ="btn btn-warning"></input>
                        </div>
                    </div>
                </div>

            </div>
             
        )
    }
}

export default AddTask;
