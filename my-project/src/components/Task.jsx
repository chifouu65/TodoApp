import {BsCheck, BsFillCheckCircleFill} from 'react-icons/bs';
import {TbTrash} from 'react-icons/tb';

export function Task({task, onDelete, onComplete}) {
    return (
        <div className='bg-amber-400 h-20 flex flex-row w-full '>
            <button className={'bg-amber-100 p-7 w-20 rounded-sm flex justify-center items-center h-20'}
                    onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill fill={'green'}/> : 'Not completed'}
            </button>

            <p className={task.isCompleted ?
                'w-full truncate ... max-h-20 bg-amber-200 p-3 rounded-sm h-20' :
                "w-full truncate ... bg-amber-100  p-3 rounded-sm h-20"}>
                {task.title}
            </p>

            <button className={'bg-amber-100 p-7 rounded-sm flex justify-center items-center h-20'}
                    onClick={() => onDelete(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}