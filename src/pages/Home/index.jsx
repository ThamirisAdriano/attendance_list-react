import React, {useState, useEffect} from 'react';

import './styles.css';

import {Card} from '../../components/Card';
export function Home() {
  const [studentName, setStudentName] = useState(); //dois elementos: estado(lugar armazenamento)/ função que atualiza esse estado
  const [students, setStudents] = useState([]); //estado criado para armazenamento de valores
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName, 
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent]); //... para tirar o estado anterior do vetor
  }

  useEffect(() => {
    //corpo do useEffect - é executado assim que a interface é renderizada
    fetch('https://api.github.com/users/thamirisadriano')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  }, []); //array serve para colocar os estados que useEffect depende, qdo está vazio será executado 1 vez
//caso haja um estado dentro do array, esse useEffet fica dependendo da mudança desse esatdo para renderizar

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
     
      <input 
      type="text" 
      placeholder="Digite o nome..." 
      onChange={e => setStudentName(e.target.value)} //propriedade entrega um evento quando o valor do input muda, informa qual o valor atual
      />
      <button type="button" onClick={handleAddStudent}>
         Adicionar
         </button>

      {
        students.map(student => //map é usado para percorrer cada item da lista - para cada item é gerado um card
        <Card 
        key={student.time}
        name={student.name} 
        time={student.time}/>)  
        }
      
    </div>
  )
}


