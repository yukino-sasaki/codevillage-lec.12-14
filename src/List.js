import React from 'react'
import Item from './Item'

const List = ({ todos }) => {
    return (
        <ul>
            <Item content={todos[0].content} />
            <Item content={todos[1].content} />
            <Item content={todos[2].content} />
            <Item content={todos[3].content} />
        </ul>
    )
}

export default List;