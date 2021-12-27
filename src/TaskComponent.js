import './List.css';
import Draggable from 'react-draggable'

function TaskComponent() {
    
    return (
        
        <Draggable className="task-draggable">
            <div className="task-com">
                <div className='tc-title'>
                    <input type="checkbox" className='checkbox'></input> 
                    <label contenteditable="true">task name</label>
                </div>
            </div>
           
        </Draggable>
      );
}

export default TaskComponent;