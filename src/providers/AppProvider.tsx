import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from 'router';

const AppProvider = () => {
    // you can wrap all your providers like global state framework, context, etc
    return (
        <Router>
            <AppRouter />
        </Router>
    )
}
export default AppProvider;