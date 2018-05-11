import React from 'react';
import Center from 'react-center';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={this.props.url} target="_blank" className="btn btn-primary">Go to link</a>
        </div>
      </div>
    )
  }
}



export default SearchResults;
