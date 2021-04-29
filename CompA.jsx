import { colors, Select } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";



const CompA = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [Moves, setMoves] = useState();


    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.Moves.length);
        }
        getData();
    });
    return (
        <>
            <h1>You Choose <span style={{ color: "red" }}>{num} value</span></h1>
            <h1>My name is <span style={{ color: "red" }}>{name}</span></h1>
            <h1>I have  <span style={{ color: "red" }}>{Moves} Moves</span></h1>
            <Select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1"> 1 </option>
                <option value="25"> 25 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
            </Select>
        </>
    )
};
export default CompA;