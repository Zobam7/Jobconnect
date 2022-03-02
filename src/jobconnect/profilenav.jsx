import React from 'react';
import { BrowserRouter} from "react-router-dom"
import Profile from './account';


class Profilenav extends React.Component {
    render() {
        return (
                <BrowserRouter>
                    <Profile/>
                </BrowserRouter>
        );
    }
}

export default Profilenav;