import React from "react";

function Employee(){
    let emp=[
        {name : 'Nithin',age:30},
        {name:'Augastine',age:25},
        {name:'Arun', age:24}
    ]
    return(
        <>
        {
            emp.map((person)=>(
                <>
                    {/* <p>hjkhkjash</p> */}
                    <h6>Name: {person.name},   Age: {person.age}</h6>
                </>
            ))
        }
        </>

    );

}

export default Employee;