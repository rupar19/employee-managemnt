import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import Employee1 from './Employee1';
import Employee2 from './Employee2';
import Employee3 from './Employee3';

export default class SinglePageComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <h2>This is an example of Single Page Application</h2>

                <Link style={{ "paddingRight": "10px" }} to="/">Home</Link>
                <Link style={{ "paddingRight": "10px" }} to="/about">About</Link>
                <Link style={{ "paddingRight": "10px" }} to="/contact">Contact</Link>


                <Switch>
                    <Route path="/contact" component={ContactComponent} />
                    <Route path="/about" component={AboutComponent} />
                    <Route path="/employee1" component={Employee1} />
                    <Route path="/employee2" component={Employee2} />
                    <Route path="/employee3" component={Employee3} />
                    <Route path="/" component={HomeComponent} />

                </Switch>

            </BrowserRouter>



        )
    }
}