import './App.css';
import {Employees} from "./components/Employees";

function App() {
    return (
        <div className="App">
            <div id="header" className="header">
            </div>

            <div id="body">
                <div id="container">
                    <div id="blue">
                        <div id="yellow"/>
                    </div>

                    <div id="table">
                        <Employees/>
                    </div>
                </div>
            </div>


            <div id="footer"/>
        </div>
    );
}

export default App;
