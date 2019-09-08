import React from 'react';
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";
import KeiketoBesaz from "../../assets/Logo.svg";
const HomeComponent = () => {
    return (
        <div className="d-flex vh-100">
            <div className="web-background"></div>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <div className="center container align-middle">
                    <div className="row justify-content-center">
                        <img src={KeiketoBesaz} className="responsive-images align-middle"/>

                    </div>
                    <div className="row justify-content-center">
                        <Button variant="danger" size = "lg" className = "keiketoBesaz-button">کیکتو بساز</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;