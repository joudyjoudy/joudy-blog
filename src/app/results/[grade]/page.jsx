import Results from "@/Components/Results/Results";
import { STUDENTS_RESULTS } from "@/data/studentsResults";
import { notFound } from "next/navigation";

export default async function GradePage({params}){
    const { grade } = await params;
    const gradeNumber = Number(grade);

    if(isNaN(gradeNumber) || gradeNumber < 1 || gradeNumber > 3) notFound();

    const results = STUDENTS_RESULTS[grade];
    if(results.length === 0) return <p>no results found for this grade</p>
     const updatedResults = results.map((res, i) => {
        const {math, science, arabic, english} = res;
        const total = math + science + arabic + english;
        const percent = Math.round((total/ 200) * 100 * 100) / 100;
        return {...res, total, percent}
     }).sort((a, b) => b.total - a.total)
    return <Results grade={gradeNumber} results={updatedResults} />
}