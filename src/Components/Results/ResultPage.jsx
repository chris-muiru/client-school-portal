import Header from "../MainPage/Header";
import StudentResult from "./StudentResult";

const ResultPage=({schoolName})=>{
   
    return(
        <div>
            <Header/>
            <h2>{schoolName}</h2>
            <StudentResult/>
        </div>
    )
}

export default ResultPage;