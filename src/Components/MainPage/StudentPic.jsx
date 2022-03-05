import student from '../img/MainPage/student.png'
import '../css/MainPage/studentpic.css';
const StudentPic=()=>{
    return(
        <div className="div-studentpic">
            <img src={student} alt="" className="img-studentpic" />
        </div>
    )
}
export default StudentPic;