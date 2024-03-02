import React from 'react'

function Categories({ category, filterItems }) {
  return (
    <div className='btn-container'>
      {category.map((category) => {
        return (
            <button className='btn' type='button' key={category} onClick={() => filterItems(category)}>
                {category}
            </button>
        )
      })}
    </div>
  )
}

export default Categories
