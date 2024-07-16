import React from "react"
import { useState } from "react"
export default function  Profile() {

    const [items, setItems] = useState([1, 2, 3, 4])

    let divItems = items.map((item, index) => {
        return <div key={index} style={ {color: 'red', backgroundColor: 'black', padding: '10px'} }>{item}</div>
    })
   

    return (
        <div >
            {divItems}
        </div>

    )
}