import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Cream from "../../assets/Creame.svg";
import Fondant from "../../assets/fondant.svg";
import NavbarComponent from "../../components/Navbar/Navbar";
import {Button} from "react-bootstrap";
import "./KindOfKeik.scss";
class KindOfKeikContainer extends Component {
    state = {
        kind : ""
    };

    hadnleChange = (event) => {
        const value = event.target.value;
        // this.setState(prevState => {
        //     const newState = {...prevState};
        //     newState[name] = value;
        //     return newState;
        // }, () => {localStorage.setItem("kind", this.state.kind);console.log(this.state)});
        localStorage.setItem("kind", value)

        // this.props.history.push(`/choosenkeik/`);


    };


    render(){
        return (
            <div >
                <div className="web-background"></div>
                <NavbarComponent />
                <div className="d-flex h-100">
                    <div className="d-flex w-100 justify-content-center align-items-center">
                <div className="container CenterForKind">
                    <div className="row justify-content-center">
                        <form className="w-100" onSubmit={() => {this.props.history.push(`/choosenkeik/`)}}>
                            <div className="col-sm-6">
                                <div className="">
                                    <img alt ={"Keiketo Besaz"} src={Cream} className="m-auto"/>
                                </div>
                                <div className="row justify-content-center">
                                    <Button onClick={this.hadnleChange} type="submit" name={"kind"} value = "Cream"  className = "kindOfKeik-button" variant={"danger"}>خامه ای</Button>
                                </div>
                            </div>
                            <div className="col-sm-6 ">
                                <div className="">
                                    <img alt ={"Keiketo Besaz"} src={Fondant} className=""/>
                                </div>
                                <div className="row justify-content-center">
                                    <Button  onClick={this.hadnleChange} type="submit" name={"kind"} value = "Fondant"  className = "kindOfKeik-button" variant={"danger"}>فوندانت</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                    </div>
                </div>
            </div>
    );}
};

export default KindOfKeikContainer;