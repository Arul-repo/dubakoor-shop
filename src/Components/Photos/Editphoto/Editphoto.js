import React from "react";
/* Components */
import axios from "../../../axios";
import "../Editphoto/editphoto.css";

class Editphoto extends React.Component {
    state = {
        itemInfo: null,
    }
    componentDidMount() {
        console.log(this.props);
        this.loadData();
    }
    componentDidUpdate() {
        console.log('hellooo'+this.props);
        this.loadData();
    } 
    
    loadData() {
        if(this.props.match.params.id){
            if(!this.state.itemInfo || (this.state.itemInfo.id !== +this.props.match.params.id)){
            axios.get("/photos/"+this.props.match.params.id)
            .then((response) => {
                    this.setState({
                        itemInfo:response.data
                    })
                });    
            }
        }
    }

    deleteHandler = (id) => {
        axios.delete("/photos/"+this.props.match.params.id)
        .then( response => {
            console.log(response);
        }).catch( error => {
            console.log(error);
        });
    }
    editHandler = (id) => {
        axios.put("/photos/"+id)
        .then( response => {
            console.log(response);
        }).catch( error => {
            console.log(error);
        });
    }

    render() {
        let itemDetails = "INVALID ITEM SELECTED";
        if(this.state.itemInfo){
                itemDetails = <div className="itemsDetails">
                <p>{this.state.itemInfo.title}</p>
                {/* <img src={this.state.itemInfo.thumbnailUrl} alt={this.state.itemInfo.title}/> */}
                <p className="itemDesp">Nevertheless, after nine games against West Indies in the past 12 months, seven of which they have won, Bangladesh will not lack for confidence. The last three of those victories were achieved in the tri-series before the World Cup also involving Ireland, good recent memories to draw on but then West Indies were without Chris Gayle, Nicholas Pooran and Andre Russell who were at the IPL, three players who would add a significant amount to any team and who have shown glimpses of their best form in this tournament</p>
                <span className="editItem" onClick={() => this.editHandler(this.state.itemInfo.id)}>Edit Item</span>
                <span className="deleteItem" onClick={() => this.deleteHandler(this.state.itemInfo.id)}>Delete Item</span>
            </div>
        }
        return (
            <div>
                <div className="editSection">
                <h3>READ YOUR ITEM DETAILS CAREFULLY</h3>
                    {itemDetails}
                </div>
            </div>
        )
    }
}

export default Editphoto;