import {useEffect, useState} from "react";

export default function customers() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [customers, setCustomers]=useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{
        fetch('https://localhost:8080/customers')
            .then(response => response.json())
            .then(data => {
                setCustomers(data);
            }).catch(e => {
                console.log(e)
        })
    },[]);

    return (
        <>
            The customers page
        </>
    )
}