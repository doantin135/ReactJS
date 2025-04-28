import React from 'react';
import Person from './Person';
function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
    const person = [
        {
            id: 1,
            old: 32,
            name: 'Bruce'
        },
        {
            id: 2,
            old: 25,
            name: 'Clark'
        },
        {
            id: 3,
            old: 28,
            name: 'Diana'
        }
    ]
    const nameList = names.map((name, index) => <h2 key = {index}>{index} {name}</h2>)
  return <div>{nameList}</div>
}

export default NameList