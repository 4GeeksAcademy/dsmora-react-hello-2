import React, { useState } from 'react';


export const Card = () => {
    const [values, setValues] = useState([1, 2, 3, 4, 5])

    console.log(values)
    return (
        <div className={'bg-primary-subtle'} style={{ width: 300, height: 300 }}>
            <ul>
                {
                    values.map(item => (
                        <li className='d-flex' key={item}>
                            <h6 className='me-2'>
                                <b>{item}</b>. Item
                            </h6>

                            <i onClick={() => setValues((previus) => {
                                const newArray = previus.filter(element => element !== item)
                                return [...newArray];
                            })}
                                className='fa fa-trash'>
                            </i>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => setValues((previus) => {
                const newValue = previus.length + 1;
                const newArray = [...previus, newValue];
                return newArray
            })}>
                Add list element
            </button>
        </div>
    )
}



// <h3>{value.name}</h3>
//             <h3>{value.age}</h3>
//             <div className='p-3'>
//                 <input
//                     type='text'
//                     placeholder='name'
//                     value={value.name}
//                     onChange={(e) => setValue((previus) => {
//                         console.log(previus, 'prev');
//                         return ({ ...previus, name: e.target.value })
//                     })}
//                 />
//                 <input
//                     placeholder='age'
//                     type='number'
//                     value={value.age}
//                     onChange={(e) => setValue((previus) => {
//                         console.log(previus, 'prev');
//                         return ({ ...previus, age: e.target.value })
//                     })}
//                 />
//             </div>