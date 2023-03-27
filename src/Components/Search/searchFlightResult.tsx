'use strict'

import styled from "styled-components"

export default function SearchFlightResult() {
    return (
        <Box>
            <div className="info">
                <div className="departure">
                    <p className="time">19:10 - 22:00</p>
                    <p>Florianópolis - Fiumicino</p>
                </div>
                <div className="return">
                    <p className="time">19:10 - 22:00</p>
                    <p>Fiumicino - Florianópolis</p>
                </div>
            </div>
            <div className="actionButton">
                <p> R$ Price</p>
                <button>Save This Offer</button>
            </div>
        </Box>
    )
}

const Box = styled.div`
    width: 85%;
    height: 200px;
    border: 1px solid #000000;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    .info {
        width: 80%;
        display: flex;
        flex-direction: column;
        .time {
            font-weight: 700;
        }
    }
    .actionButton {
        border-left: 1px solid black;
        width: 20%;
        height: 80%;
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction: column;
        button {
            background: #F19C79;
            border-radius: 5px;
            border: 1px solid white;
            height: 40px;
            width: 80%;
            font-size: 17px;
        }
    }
`