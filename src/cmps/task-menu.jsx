import { ReactComponent as Trash } from '../assets/icons/trash-icon.svg'

export const TaskMenu = ({taskId,groupId,boardId}) => {

    const onRemoveTask =() => {
        const removeObj = {taskId,groupId,boardId}
    }

return <section className="task-menu">
    <div className="group-color-icon-container">
        <div className="group-color-icon"></div>
        <button>Change group color</button>
    </div>
    <button onClick={onRemoveTask} className='btn btn-svg btn-trash-task'><Trash /> Delete</button>
</section>
}