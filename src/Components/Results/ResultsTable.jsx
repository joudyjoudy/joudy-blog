export default function ResultsTable({ grade, results }) {
    return (
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
                    {results.map((result, i) => {
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
                <tfoot></tfoot>
            </table>
    );
}