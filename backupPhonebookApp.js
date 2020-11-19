import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App =() => {
  const [ persons, setPersons ] = useState([    // persons is state
    {
      name: 'Arto Hellas',
      number: '999-9999-999'
    }
  ])

  const [ filteredPeople, setFiltedPeople ] = useState(persons)   //useState is a hook    // filteredPeople is state

  
  const handleSubmit = event => {   //click handle for the "Add" button 
    event.preventDefault() // this method prevents a rerender in react
    if(checkDuplicates(persons, event.target[0].value)){
      alert(`${event.target[0].value} is a duplicate`)
    }else{
      setPersons(
        [
          ...persons, 
          {
            name: event.target[0].value, 
            number: event.target[1].value
          }
        ]);
      event.target[0].value = '' //refreshes input
      event.target[1].value = '' 
    }
  }
  
  const checkDuplicates = (state, inputName) => {
   return state.find(element => element.name === inputName)
  }

  const filterList = (event) => {
    const filteredPeople = persons.filter(person =>  person.name.indexOf(event.target.value) != -1)
    setFiltedPeople(filteredPeople);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with
        <input onChange={filterList}/>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input />
        </div>
        <div>
          number: <input type="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPeople.map((person, index) => (<p key={index}>{person.name}   {person.number}</p>))}
    </div>
  )
}

export default App;
