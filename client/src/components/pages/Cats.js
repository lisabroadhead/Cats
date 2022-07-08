import React, { useEffect, useState } from 'react'
import styled from '../css/Cats.module.css'
import axios from 'axios';

const Cats = () => {
    const [cat,setCats] = useState([])

    const onClickHandler = (direction,num) => {
        var catOrder = cat
        let kitten = catOrder.splice(num,1)

        catOrder.splice(1,0,kitten)
        console.log()
        setCats(catOrder)
    }

    useEffect(()=>{
        axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
        .then(response=>{setCats(response.data)})
    }, [])

    return(
        <div className={styled.wrp}>
            <h1 className={styled.title}>Cats</h1>
            <p className={styled.subtitls}>Your Top Cat list</p>
            <div>
                {
                    cat.length < 0 ? "" : cat.map((item,i) => {
                        return <p key={i}>{item.name} <span><button onClick={() => onClickHandler("up",i)}>↑</button><button  onClick={() => onClickHandler("down",i)}>↓</button></span></p>
                    }) 
                }
            </div>
        </div>
    )
}

export default Cats;