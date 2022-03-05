import Header from '../MainPage/Header';

export const Unit = ({ unit , onClick }) => (
    <tr>
    <td id="td-unit-code">{unit.unit_code}</td>
    <td id="td-unit-name">{unit.unit_name}</td>
    <td id="td-checkbox"><input type="checkbox" onClick={onClick}/>
    </td>
    </tr>
)

export const UnitsTable = ({ children, submit}) => {
    return  (
        <div className="bookunit">
          <Header/>
          <div className="modal">
                <div className="modal-content" id="myModal">
                    <div className="modal-header">
                        <h4 id="units">Units</h4>
                    </div>
                    <div className="modal-body">
                        <div>
                            <table id="table">
                                <thead>
                                    <tr>
                                    <th>unit code</th>
                                    <th>unit name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        children
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <button id="myBtn" type="submit" onClick={ submit }>book units</button>
          </div>
        </div>
    )
}
