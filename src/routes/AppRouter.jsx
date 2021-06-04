import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/cliente" component={ ClienteScreen } />
                <Route exact path="/login" component={ LoginScreen } />
            </Switch>
        </Router>
    )
}