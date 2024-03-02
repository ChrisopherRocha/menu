import React from 'react'

function Categories({ category }) {
  return (
    <div className='btn-container'>
      {category.map((category) => {
        return (
            <button className='btn' type='button' key={category}>
                {category}
            </button>
        )
      })}
    </div>
  )
}

export default Categories
