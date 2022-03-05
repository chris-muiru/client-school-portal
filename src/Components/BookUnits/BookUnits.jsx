import '../css/BookUnit/bookunit.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Unit, UnitsTable } from "./View"

// get all available units
const getUnits = async () => {
    let promise=await axios.get('/units/');
    return promise.data
}

// post selected units to server
const registerUnits = (units) => fetch('http://localhost:8000/book/',
        {
            method:"POST", 
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(units)
        }
)



const BookUnits = () => {
    const [ units, setUnits ] = useState([])
    const [ selectedUnits, setSelectedUnits ] = useState([])
    
    
    const fetchData=async()=>{
        setUnits(
            await getUnits()
        )
    }
    useEffect(
        ()=>{
        fetchData()
        }
    ,[])
        

    const selectUnit = (unit) => {
        const index = selectedUnits.findIndex( entry => entry.unit_code === unit.unit_code)

        if(index === -1)  {
            selectedUnits.push(unit)
        } else {
            selectedUnits.splice(index, 1)
        }
    } 

    const submitUnits = async () => {
        try {
            await registerUnits(selectedUnits)
            // display message
        } catch (error) {
            console.log(error)
            // report error
        } finally {
            setSelectedUnits([])
        }
    }

    return (
        <UnitsTable submit={ submitUnits }> {
            units.map( unit => {
                return (
                    <Unit key={ unit.unit_code } unit={unit} onClick={ () => selectUnit(unit) }/>
                )
            })
        }
        </UnitsTable>
    )
}

export default BookUnits
