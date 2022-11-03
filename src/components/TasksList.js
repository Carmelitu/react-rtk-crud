import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../features/tasks/tasksSlice'
import Header from './Header'

function TasksList() {
  const dispatch = useDispatch()
  const tasksState = useSelector(state => state.tasks)

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
      <div className="w-4/6">
          <Header />
          <div className="grid grid-cols-3 gap-4">
              {tasksState.map((t) => (
                  <div key={t.id} className="bg-neutral-800 p-4 rounded-md">
                      <header className="flex justify-between">
                          <h3>{t.title}</h3>
                          <div className="flex gap-x-2">
                              <Link to={`/edit/${t.id}`} className='bg-zinc-600 px-2 py-1 text-xs rounded-md'>Editar</Link>
                              <button
                                  onClick={() => handleDelete(t.id)}
                                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                              >
                                  Delete
                              </button>
                          </div>
                      </header>
                      <p>{t.description}</p>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default TasksList