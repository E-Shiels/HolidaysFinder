import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

let openSnackbarFn;

class Notifier extends React.Component {
  state = {
    open: false,
    message: ""
  };

  componentDidMount() {
    openSnackbarFn = this.openSnackbar;
  }

  openSnackbar = ({ message }) => {
    this.setState({
      open: true,
      message
    });
  };

  handleSnackbarClose = () => {
    this.setState({
      open: false,
      message: ""
    });
  };

  render() {
    const { classes } = this.props;
    const message = (
      <span
        id="snackbar-message-id"
        dangerouslySetInnerHTML={{ __html: this.state.message }}
      />
    );
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          message={message}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          open={this.state.open}
          ContentProps={{"aria-describedby": "message-id"}}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}
export function openSnackbar({ message }) {
  openSnackbarFn({ message });
}

export default withStyles(styles)(Notifier);
