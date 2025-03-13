import React,{useState} from "react";

const AddTask = ({addTask}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please add a task');
            return;
        }
        addTask({ text, completed: false });
        setText('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type={'text'}
                placeholder={'task name'}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type={'submit'}>add a task</button>
        </form>
    );
};

export default AddTask;