import React from 'react'

function App() {
  return (
    <div className="form-container">
      <h1>Cadastro de Curso</h1>

      <form>
        {/* Campo entrada de nome do curso */}
        <input type="text" placeholder='Nome do curso' />
        <span className="error">O nome do curso é obrigatório</span>

        {/* Campo de data de inicio*/}
        <input type="date" lang='pt-BR' />

        {/* Seleção de Categoria */}
        <select>
          <option value="">Escolha a categoria...</option>
          <option value="programacao">Programação</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="outros">Outros</option>
        </select>

        {/* Campo de descrição */}
        <textarea placeholder='Descrição do curso' rows={4}/>

        {/* Botão */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default App
