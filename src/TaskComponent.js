import './List.css';
import Draggable from 'react-draggable'

function TaskComponent() {
    
    return (
        
        <Draggable className="task-draggable">
            <div className="task-com">
                    <input type="checkbox" ></input> 
                <label contenteditable="true">task name</label>
            </div>
           
        </Draggable>
      );
}

export default TaskComponent;