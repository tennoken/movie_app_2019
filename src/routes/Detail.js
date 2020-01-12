import React from "react";
import "./Detail.css";


class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return (
            <div className="detail">
                <img src={location.state.poster} alt=""/>
                <h1>{location.state.title}</h1>
                <h3>{location.state.year}</h3>
                <h4>{location.state.genres.join(' ')}</h4>
                {location.state.summary}
            </div>
            );
        }else {
            return null;
        }
    }

}


export default Detail;