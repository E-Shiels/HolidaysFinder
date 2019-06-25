import React from "react";

var style = {
  backgroundColor: "#616161",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "0px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%"
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "50px",
  width: "100%"
};

var text = {
  color: "rgb(250, 250, 250)"
};

export default function SiteFooter() {
  return (
    <footer>
      <div style={phantom} />
      <div style={style}>
        <p style={text}>
          Website Design and Development by{" "}
          <a href="https://www.resays.com/" style={text}>
            Eric Shiels.
          </a>{" "}
          Holiday data courtesy of{" "}
          <a href="https://calendarific.com/" style={text}>
            Calendarific.
          </a>
        </p>
      </div>
    </footer>
  );
}
