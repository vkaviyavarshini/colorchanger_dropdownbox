import './colorchanger.css';
import { React, useState } from 'react';
import Select from 'react-select';


function Colorchanger ()
{
    const colors = [
        {
            id: 1,
            label: "lime",
        },
        {
            id: 2,
            label: "lavender",
        },
        {
            id: 3,
            label: "Crimson",
        },
        {
            id: 4,
            label: "darkblue",
        },
        {
            id: 5,
            label: "teal",
        },
        {
            id: 6,
            label: "rebeccapurple",
        },
        {
            id: 7,
            label: "ghostwhite",
        },
        {
            id: 8,
            label: "aquamarine",
        },
        {
            id: 9,
            label: "aliceblue",
        }
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }

    
return (
    <div>
        <style>
        {
            `body{
                background-color:` + color + ';'
        }
        </style>
        <center>
            <h1>Color Changer</h1>
        </center>
        <Select options={colors} onChange={click} className='select'></Select>
    </div>

    );
}
export default Colorchanger;