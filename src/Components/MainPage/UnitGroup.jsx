import  Unit from "./Unit";
import '../css/MainPage/unitgroup.css';
import StudentInfo from "./StudentInfo";
import Fee from "./Fee";
import StudentPic from "./StudentPic";
import Header from "./Header";


const UnitGroup=()=>{
    return(
        <div className="div-unitgroup">
            <Header/>
            <StudentPic/>
            <h3 className="h2-units">Units Info</h3>
            <Unit unitDetail="units done:"/>
            <Unit unitDetail="selected units:"/>
            <Unit unitDetail="remaining units:"/>
            <StudentInfo/>
            
            <Fee/>
        </div>
    )
}

export default UnitGroup;