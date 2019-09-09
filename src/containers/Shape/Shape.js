import React, {Component} from 'react';
import NavbarComponent from "../../components/Navbar/Navbar";
import "./Shape.scss";
import Cicle from "../../assets/Circle cake.png";
import Rectangle from "../../assets/Rectangle cake.png";
import {Button} from "react-bootstrap";


class ShapeContainer extends Component {
    hadnleChange = (event) => {
        const value = event.target.value;
        localStorage.setItem("shape", value)

    };
    render() {
        return (
            <div >
                <div className="web-background"></div>
                <NavbarComponent />
                <div className="d-flex h-100">
                    <div className="d-flex w-100 justify-content-center align-items-center">
                        <div className="container CenterForShape">
                            <div className="row justify-content-center">
                                <div className="shapeQuestion">
                                    <p>چه شکلی باشه؟</p>
                                </div>
                            </div>
                            <form className="row mt-4 justify-content-center align-items-center" onSubmit={() => {this.props.history.push()}}>

                                {/*<form className="w-100 justify-content-center" >*/}
                                <div className="col-sm-6">
                                    <div className="row justify-content-center align-items-center my-2">
                                        <img alt ={"Keiketo Besaz"} src={Cicle} className="m-auto svg-1"/>

                                    </div>
                                    <div className="row justify-content-center mb-4">
                                        <Button onClick={this.hadnleChange}  name={"shape"} value = "circle"  className = "shape-button" variant={"danger"}>دایره</Button>
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="row justify-content-center align-items-center my-2">
                                        <img alt ={"Keiketo Besaz"} src={Rectangle} className="m-auto"/>
                                    </div>
                                    <div className="row justify-content-center mb-4">
                                        <Button  onClick={this.hadnleChange}  name={"shape"} value = "rectangle"  className = "shape-button" variant={"danger"}>مربع</Button>
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

export default ShapeContainer;