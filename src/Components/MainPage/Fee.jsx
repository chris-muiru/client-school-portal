import '../css/MainPage/fee.css';
const Fee=()=>{
    let choice=['orangered','blue','green','rgb(51, 47, 47)'];
    let backgroundColor=choice[Math.floor(Math.random()*choice.length)];
    return(
        <div>
            <h3 className="heading-fee">Fee info</h3>
             <div className="div-fee" style={{backgroundColor}}>
                <h4 className="fee-details">
                    <p>billed:</p>
                    <p> paid:</p>
                    <p>balance:</p>

                </h4>
            </div>
        </div>
    )
}
export default Fee;