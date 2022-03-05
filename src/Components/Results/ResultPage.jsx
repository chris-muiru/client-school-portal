import Header from "../MainPage/Header";
import StudentResult from "./StudentResult";

const ResultPage=({schoolName})=>{
    let style={
        marginLeft:'50px',
        color:"green"

    }
    return(
        <div>
            <Header/>
            <h2>{schoolName}</h2>
            <StudentResult/>
            <h3 style={style}>Cumulative score:</h3>
        </div>
    )
}

export default ResultPage;