import React, { useState } from 'react'

export function CoursesList() {
    let courses = ["Html", "Javascript", "Python", "React"];

    const [listCourses, setListCourses] = useState(courses);

  return (
    <div>
        <h2>Lista de Cursos de Programação</h2>
        <ul>
            {listCourses.map((course, index) => (
                <li key={`${index}-${course}`}>{course}</li> // 1-Javascript
            ))}
        </ul>
    </div>
  )
}

