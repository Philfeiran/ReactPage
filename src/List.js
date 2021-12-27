import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
                    <h3>{this.props.title}</h3>
                    <Button className='jiahao'>+</Button>
                </div>
               
                <div className='List-body'>
                    {comps.map(comp => {
                    return <TaskComponent />;
                    })}
                    <div className='List-button'>
                        <button className='List-addbutton' onClick={() => this.setState({ comps: comps.concat([Date.now()]) })}>+ Add task</button>
                    </div>
                </div>
               
            </div>
            
        ); 
    }
}

export default List;