import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import {PageContext} from "../utils/Context";

const Navigation = () => {

    return (
        <PageContext.Consumer>
            {value => <nav className="fixed-top ml-4 mt-2">
                <div className="nav">
                    <div onClick={() => value(window.location.href=`#/${homePage}`)} className="nav-item btn btn-danger mx-1">Home</div>
                    <div onClick={() => value(window.location.href=`#/${aboutMePage}`)} className="nav-item btn btn-danger mx-1">About me</div>
                    <div onClick={() => value(window.location.href=`#/${starWarsPage}`)} className="nav-item btn btn-danger mx-1">Star wars</div>
                    <div onClick={() => value(window.location.href=`#/${contactPage}`)} className="nav-item btn btn-danger mx-1">Contact</div>
            </div>
        </nav>}
        </PageContext.Consumer>
    );
};

export default Navigation;