import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between screen gap-5 mt-10'>
      <div className='w-[45%] bg-yellow-300 rounded px-9 py-6' >
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] bg-emerald-500 rounded px-9 py-6' >
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-2xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-[45%] bg-blue-500 rounded px-9 py-6' >
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3>
      </div>
      <div className='w-[45%] bg-red-500 rounded px-9 py-6' >
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
