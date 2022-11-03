import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

function TasksForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const tasksState = useSelector(state => state.tasks)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(updateTask({ title, description, id: params.id }));
    } else {
      dispatch(addTask({ title, description, id: uuid() }));
    }
    
    navigate('/');
  }

  useEffect(() => {
    if (params.id) {
      const task = tasksState.find(task => task.id === params.id);
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [params.id, tasksState])
  

  return (
      <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
          <label htmlFor="title" className="block text-xs font-bold mb-2">
              Title
          </label>
          <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          />
          <label htmlFor="description" className="block text-xs font-bold mb-2">
              Description
          </label>
          <textarea
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          />
          <button className='bg-indigo-600 px-2 py-1'>Save</button>
      </form>
  );
}

export default TasksForm