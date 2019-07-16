import React from "react";

export default class VoteButton extends React.Component {
    state = {
        voteScore: 0
    };

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({voteScore: this.state.voteScore + 1})
    }

    render() {
        return (
          <>
            <form onSubmit={this.handleSubmit}>
              <button type="submit">Vote</button>
            </form>
            <p>{this.state.voteScore}</p>
          </>
        );
    }
}