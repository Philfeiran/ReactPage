import React, { Component } from 'react';
import './List.css';
import TaskComponent from './TaskComponent';

class List extends Component{
    constructor(props) {
        super(props);
        this.state = { comps: [] };
      }
    render(){
        const { comps } = this.state;
        return (
            <div className='List'>
                <div className='List-header'>
                    <h2>{this.props.title}</h2>
                </div>
               
                <div className='List-body'>
                    {comps.map(comp => {
                    return <TaskComponent />;
                    })}
                     <button onClick={() => this.setState({ comps: comps.concat([Date.now()]) })}>add task</button>
                </div>
               
            </div>
            
        ); 
    }
}

export default List;