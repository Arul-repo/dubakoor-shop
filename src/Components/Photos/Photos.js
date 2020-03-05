import React from "react";
import { Route, Link } from "react-router-dom";
/* Components */
import axios from "../../axios";
import Photoview from "../Photoview/Photoview";
import Editphoto from "../Photos/Editphoto/Editphoto";

class Photos extends React.Component{
    state = {
        photos: [],
        viewPhoto: null,
	}
	componentDidMount() {
        axios.get("/photos")
		.then((response) => {
            const limitPhoto = response.data.slice(0, 8);
			this.setState({
                photos: limitPhoto,
                viewPhoto: null
			})
        });
    }
    viewGal = (id) => {
        this.setState({ viewPhoto:id });
    }

    render() {
        console.log('iside paraent comp');
        const items = this.state.photos.map(item => {
            return (
                <Link to={"/photos/" + item.id} key={item.id}>
                    <Photoview 
                    title={item.title}
                    thumbnailUrl={item.thumbnailUrl} 
                    url={item.url}
                    clicked={() => this.viewGal(item.id)} />
                </Link>
            );
        });
        return (
            <React.Fragment>
            {console.log('praent render')}
                <div className="listPhotos">
                    <ul>{items}</ul>
                </div>
                <Route exact path={this.props.match.url + "/:id"} component={ Editphoto } />
            </React.Fragment>
        );
    }   
}

export default Photos;