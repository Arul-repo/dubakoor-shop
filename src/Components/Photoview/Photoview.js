import React from "react";
import "../Photoview/Photoview.css";
import { withRouter } from "react-router-dom";

class Photoview extends React.Component {
    render(){
        return (
            <li onClick={this.props.clicked}>
                <h3 className="title" >{this.props.title}</h3>
                <img src={this.props.thumbnailUrl} alt={this.props.title}/>
            </li>     
        );
    }
}

export default withRouter(Photoview);