import React from 'react'
import PropTypes from 'prop-types'

function TodoItem ( {todo, index}) {
    return <li>
        <span></span>
        <strong>{index + 1}</strong>
        {todo.title}</li>
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem