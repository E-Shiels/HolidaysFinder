import React from 'react';
// import SvgIcon from '@material-ui/icons/';
// import yellow from '@material-ui/core/colors/yellow';
// import { withStyles } from '@material-ui/core/styles';
export default class FavoriteButton extends React.Component {
  state = {
    favorite: this.props.favorite
  }

  handleChange = () => {
    this.setState({favorite: !this.state.favorite}, function() {
    this.props.updateHolidayFavoriteState(this.state.favorite, this.props.id)
  })
  }

  render() {
    return(
      <>
        <label htmlFor="favorite">Favorite</label>
        <input type="checkbox" id="favorite" name="favorite" onChange={this.handleChange} value={this.props.favorite} defaultChecked={this.props.favorite}/>
      </>
    )
  }
}
