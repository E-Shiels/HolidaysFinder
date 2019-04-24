import React from "react";

export default class FavoriteButton extends React.Component {
  state = {
    favorite: this.props.favorite
  };

  handleChange = () => {
    this.setState({ favorite: !this.state.favorite }, function() {
      this.props.updateHolidayFavoriteState(this.props.id, this.state.favorite);
    });
  };

  render() {
    return (
      <React.Fragment>
        <label htmlFor="favorite">Favorite</label>
        <input
          type="checkbox"
          id="favorite"
          name="favorite"
          onChange={this.handleChange}
          value={this.props.favorite}
          defaultChecked={this.props.favorite}
        />
      </React.Fragment>
    );
  }
}
