import { Task } from './Task';

export function Tasks({ tasks, onDelete, onComplete }) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={"bg-amber-300"}>
            <header>
                <div>
                    <p>Created tasks</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p >Completed tasks</p>
                    <span>{completedTasks} of {tasksQuantity}</span>
                </div>
            </header>

            <div className={'flex flex-col gap-2'}>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
                ))}
            </div>
        </section>
    )
}