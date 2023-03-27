'use strict'

import styled from "styled-components"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { themes } from "../sidebar"

export default function SearchBox() {
    return (
        <Box>
            <form>
                    <input type="text" id="from" name="from" placeholder="From"  required/>
                    <input type="text" id="destiny" name="destiny"placeholder="Destiny" required/>
                    <input type="date" placeholder="Depart" value="01/27/2023" required/>
                    <input type="date" placeholder="Return" required/>
                    <button type="submit"><HiMagnifyingGlass /></button>
            </form>
        </Box>
    )
}

const Box = styled.div`
    width: 85%;
    height: 200px;
    border: 1px solid #000000;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    input {
        margin-left: 10px;
        width: 170px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #F19C79;
        -webkit-box-shadow: 9px 15px 24px -12px rgba(0,0,0,0.61);
        -moz-box-shadow: 9px 15px 24px -12px rgba(0,0,0,0.61);
        box-shadow: 9px 15px 24px -12px rgba(0,0,0,0.61);
        }
    button {
        margin-left: 10px;
        width: 50px;
        height: 50px;
        font-size: 20px;
        background: #F19C79;
        border: 1px solid white;
        border-radius: 7px;
        }    
`