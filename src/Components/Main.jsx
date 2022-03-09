import UnitGroup from "./MainPage/UnitGroup";
import ResultPage from "./Results/ResultPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookUnits from "./BookUnits/BookUnits";

const Main = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/dash/result" exact>
						<ResultPage schoolName="Slinger university" />
					</Route>
					{/* using the component prop to render UI components */}
					<Route exact path="/dash" component={UnitGroup} />
					<Route exact path="/dash/book-unit" component={BookUnits} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};
export default Main;
