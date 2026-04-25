"use client"
import { useEffect ,useState } from "react";
import classes from "./ResultsTable.module.css";
export default function ResultsTable({ results }) {
    const [searchText, setSearchText] = useState("");
    const [searchedResults, setSearchedResults] = useState(results);
    
    useEffect(() => {
  setSearchedResults((prev) => {
    const updated = results.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return updated;
  });
}, [searchText, results]);
    return (
    <div className={classes["results"]}>
        <div className={classes["search"]}>
            <input 
                type="search" 
                placeholder="Search by name..." 
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
        <div className={classes["table"]}>
        <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Math</th>
                        <th>Science</th>
                        <th>Arabic</th>
                        <th>English</th>
                        <th>Total</th>
                        <th>percent</th>
                    </tr>
                </thead>
                <tbody>
                    {searchedResults.map((result, i) => {
                    const {name , math, science, arabic, english, total, percent} = result;
                    return(
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{name}</td>
                            <td>{math}</td>
                            <td>{science}</td>
                            <td>{arabic}</td>
                            <td>{english}</td>
                            <td>{total}</td>
                            <td>{percent}%</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
    </div>
    </div>
    );
}