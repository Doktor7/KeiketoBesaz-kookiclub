import React, {Component} from 'react';
import NavbarComponent from "../../components/Navbar/Navbar";
import OneLayer from "../../assets/one laye cake.png";
import TwoLayer from "../../assets/double laye cake.png";

import {Button} from "react-bootstrap";
import "./Floors.scss";

class FloorsContainer extends Component {

    hadnleChange = (event) => {
        const value = event.target.value;
        localStorage.setItem("floors", value)

    };
    render() {
        return (
            <div >
                <div className="web-background"></div>
                <NavbarComponent />
                <div className="d-flex h-100">
                    <div className="d-flex w-100 justify-content-center align-items-center">
                        <div className="container CenterForFloor">
                            <div className="row justify-content-center">
                                <div className="floorsQuestion">
                                    <p>چند طبقه؟</p>
                                </div>
                            </div>
                            <form className="row mt-4 justify-content-center align-items-center" onSubmit={() => {this.props.history.push()}}>

                                {/*<form className="w-100 justify-content-center" >*/}
                                <div className="col-sm-6">
                                    <div className="row justify-content-center align-items-center my-2">
                                        <img alt ={"Keiketo Besaz"} src={OneLayer} className="m-auto svg-1"/>

                                    </div>
                                    <div className="row justify-content-center mb-4">
                                        <Button onClick={this.hadnleChange}  name={"floor"} value = "oneLayer"  className = "floors-button" variant={"danger"}>یک طبقه</Button>
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="row justify-content-center align-items-center my-2">
                                        <img alt ={"Keiketo Besaz"} src={TwoLayer} className="m-auto"/>
                                    </div>
                                    <div className="row justify-content-center mb-4">
                                        <Button  onClick={this.hadnleChange}  name={"floor"} value = "twoLayer"  className = "floors-button" variant={"danger"}>دو طبقه</Button>
                                    </div>
                                </div>
                                {/*</form>*/}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FloorsContainer;