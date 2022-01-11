import ReactDOM from 'react-dom';
import Searchtwt from './Search';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';

const App = () => {

    return (
        <Router>
            <header>twerticle</header>
            
            <Routes>
                <Route path="/" element= {<Searchtwt />} />
            </Routes>

        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));