import React, {Component} from 'react';
import Cream from "../../assets/Creame.svg";
import Fondant from "../../assets/fondant.svg";
import NavbarComponent from "../../components/Navbar/Navbar";

import {Button} from "react-bootstrap";

class ChoosenKeikContainer extends Component {
    render() {
        let image = null;

        // eslint-disable-next-line no-lone-blocks
        {localStorage.getItem("kind") === "Cream" ?
            image = <img alt ={"Keiketo Besaz"} src={Cream} className="m-auto responsive-images"/> :
            image = <img  alt ={"Keiketo Besaz"} src={Fondant} className="m-auto responsive-images"/>
        }

        return (
            <div>
                <div className="web-background"></div>
                <NavbarComponent/>
                <div className="d-flex vh-100">
                    <div className="web-background"></div>
                    <div className="d-flex w-100 justify-content-center align-items-center">
                        <div className="center container ">
                            <div className="row justify-content-center">
                                {image}
                            </div>
                            <div className="row justify-content-center">
                                <Button href={"/howmuchkeik"} variant="danger" size = "lg" className = "keiketoBesaz-button">ادامه</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChoosenKeikContainer;