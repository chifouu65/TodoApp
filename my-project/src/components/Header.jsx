import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header({handleAddTask}) {
    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        handleAddTask(title);
        setTitle('');
    }

    function onChangeTitle(e) {
        setTitle(e.target.value);
    }

    return (
        <header className={'bg-amber-200'}>
            <form onSubmit={handleSubmit} className={'grid p-3 grid-cols-2l flex w-full'}>
                <input className={"w-full h-20 min-w-full"} placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
                <button className={'flex flex-col h-20 justify-evenly'}>Create <AiOutlinePlusCircle size={20} /></button>
            </form>
        </header>
    )
}