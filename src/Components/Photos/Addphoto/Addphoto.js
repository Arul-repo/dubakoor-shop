import React from "react";
import { Redirect } from "react-router-dom";
import "../Addphoto/addphoto.css";
import axios from "../../../axios";

class Addphoto extends React.Component {
    state ={
        name: "",
        author: "",
        desp: "",
        submitted: false
    }
    componentDidMount(){
        console.log(this.props);
    }
    submitHandler = () =>{
        const data = this.state;
        axios.post('/photos', data)
        .then(response =>{
            /* this.setState({submitted: true}); */
            this.props.history.push('/photos');
        })
        .catch( error => {
            console.log(error);
        })
    }
    render(){
        let redirectPage = null;
        if(this.state.submitted){
            redirectPage = <Redirect to="/photos" />;
        }
        return(
            <div className="FormSection">
                <p>{redirectPage}</p>
                <h2>ADD New photo</h2>
                <div className="Namesec">
                <label>Name : </label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} name="name" />
                </div>
                <div className="authorSec">
                <label>Author : </label>
                <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} name="author" />
                </div>
                <div className="descSec">
                <label>Description : </label>
                <textarea type="text" rows="10" value={this.state.desp} onChange={(event) => this.setState({desp: event.target.value})} name="desc" />
                </div>
                <button onClick={this.submitHandler}>Submit</button>
            </div>
        );
    }
}

export default Addphoto;