import React from 'react'

export function TodoList({todos}) {
  return (
    <div>{todos.map((todo) => todo.text)}</div>
  )
}

