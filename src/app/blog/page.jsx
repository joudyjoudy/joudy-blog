"use client"

import { useState } from "react"
import classes from "./page.module.css"
export default function BlogPage(){
    const [counter, setCounter] = useState(0)
    const [showList, setShowList] = useState(true)
    const hideNavList = () => setShowList(false);
    const increaseCounter = () => {
        if(counter >= 10) return;
        setCounter(counter + 1)
    }
    const decreaseCounter = () => {
        if(counter <= 0) return;
        setCounter(counter - 1)
    }
    const resetCounter = () =>setCounter(0);
    const toggleMenu = () => setShowList(!showList);
    
    return (
    <section> 
        <h2>blog page</h2>
        <div>
        <p>{counter}</p>
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter}>-</button>
        <button onClick={resetCounter}>reset</button>
        </div>
        <br />
        <hr />
        <br />

        <div>
            <button onClick={toggleMenu}>{showList ? "Hide" : "Show"} menu</button>
            {showList && (<ul className={`${classes['list']} 
                ${!showList ? classes['hide-list'] : ''}`}>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>)}
        </div>
    </section>
    )
}