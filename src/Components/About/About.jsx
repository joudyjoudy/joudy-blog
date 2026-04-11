"use client"
import { useState } from "react";
import { useEffect } from "react";

const About = () => {
    const [name, setName] = useState("");
    useEffect(() => 
        {
            console.log("use Effect", name);
        }, [name])
        
    return(
    <div>
    <h2>About</h2>
    <input type="search" 
    placeholder="Search by name" 
    value={name} 
    onChange={(e) => setName(e.target.value)}
    />
    </div>
)
}
export default About;