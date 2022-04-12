import { HashRouter } from "react-router-dom";
import MRouter from "./Router";
import Tabbar from "./components/Tabbar";
function App() {
	return (
		<HashRouter>
			<MRouter />
			<Tabbar />
		</HashRouter> 
	);
}

export default App;
