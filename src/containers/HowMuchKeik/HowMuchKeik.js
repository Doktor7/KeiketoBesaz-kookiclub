import React, {Component} from 'react';
import "./HowMuchKeik.scss";
import NavbarComponent from "../../components/Navbar/Navbar";
// import {Dropdown, Button, ButtonGroup} from "react-bootstrap";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class HowMuchKeikContainer extends Component {

    render() {
        const options = [
            { value: 'one', label: '10 الی 5 نفر' },
            { value: 'two', label: '20 الی 25 نفر', className: 'myOptionClassName' },

        ];
        const defaultOption = options[0]
        return (
            <div>

                <div className ="web-background"></div>
                <NavbarComponent/>
                <div className="d-flex vh-100">
                    <div className="d-flex w-100 justify-content-center align-items-center">
                        <div className="center container ">
                            <div className="row justify-content-center">
                                <div className="forHowMany">
                                    <p>برای چند نفر؟</p>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <Dropdown className="w-50 mt-3 dropdownMenu" options={options}  value={defaultOption} placeholder="Select an option" />
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default HowMuchKeikContainer;