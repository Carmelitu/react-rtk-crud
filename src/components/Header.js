import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const tasksState = useSelector(state => state.tasks)
  return (
    <header className='flex justify-between items-center py-4'>
      <h1>Tasks: {tasksState.length}</h1>
      <Link to='/new' className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>Create Task</Link>
    </header>
  )
}

export default Header