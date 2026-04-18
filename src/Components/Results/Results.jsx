import ResultsTable from "./ResultsTable";

const Results = ({  grade , results  }) => {
    return(
        <div>
            <h2>Grade {grade} results</h2>
            <ResultsTable results={results} />
        </div>
    )
}
export default Results;