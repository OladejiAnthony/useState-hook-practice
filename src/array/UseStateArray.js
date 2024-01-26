import React,{useState} from "react"
import {peopleData} from "../people-data"
import {BiTrash} from "react-icons/bi"

//Question: remove list item from the list on icon button click
function UseStateArray () {
  const [people, setPeople] = useState(peopleData);
    //console.log(people);
    //console.log(people[1].name);
   const removePerson = (id) => {
      const newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople); 
      //array that holds remaining person's
   }

  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", background: "blue"}}>
    <h1>UseState in Array</h1>
      {
        people.map((person) => {
          const {id, name} = person; //object destructuring used only during mapping
           //console.log(person);
           //console.log(person.name) 
          return (
            <div key={id} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: "50px", width: "300px", gap: "5px", padding: "2px 10px", background: "white"}}>
               <h2>{name}</h2>  
               {/*<h2>{person.name}</h2> - undestructured method*/}
               <BiTrash 
                  color="red" 
                  size={22} 
                  cursor="pointer" 
                  onClick={() => removePerson(id)} 
               />
            </div>
          )
        })
      }
      <button 
        onClick={() => setPeople([])}  //set people-data array to empty array on button click
        style={{background: "tomato", outline: "none", cursor: "pointer"}}
      >
        Clear All
      </button>
    </div>
  )
}

export default UseStateArray;


