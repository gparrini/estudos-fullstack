import React, { useState } from "react";

export function CoursesList() {
  let courses = ["Html", "Javascript", "Python", "React"];

  const [listCourses, setListCourses] = useState(courses);
  const [filterText, setFilterText] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const applyFilter = () => {
    const filtered = listCourses.filter((course) =>
      course.toLowerCase().includes(filterText.toLowerCase())
    );
    setListCourses(filtered);
    setIsFiltered(true);
  };

  const resetFilter = () => {
    setListCourses(courses);
    setFilterText("");
    setIsFiltered(false);
  };

  return (
    <div>
      <h2>Lista de Cursos de Programação</h2>
      {listCourses.length > 0 ? (
        <ul>
          {listCourses.map((course, index) => (
            <li key={`${index}-${course}`}>{course}</li> // 1-Javascript
          ))}
        </ul>
      ) : (
        <div>
          <p>Curso Não encontrado</p>
          <button onClick={resetFilter}>Voltar</button>
        </div>
      )}

      {!isFiltered && (
        <>
          <input
            type="text"
            placeholder="Digite o curso para filtrar"
            onChange={(e) => setFilterText(e.target.value)}
          />
          <button onClick={applyFilter}>Filtrar</button>
        </>
      )}

      {isFiltered && listCourses.length > 0 && (
        <button onClick={resetFilter}>Voltar</button>
      )}
    </div>
  );
}
