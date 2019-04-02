import React from "react";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "0px 10px 15px 10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%"
};

var phantom = {
  display: "block",
  padding: "10px",
  height: "30px",
  width: "100%"
};

export default function SiteFooter() {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <p>
          Website Design and Development by{" "}
          <a href="https://www.resays.com/">Eric Shiels.</a> Holiday data
          courtesy of <a href="https://calendarific.com/">Calendarific</a>
        </p>
      </div>
    </div>
  );
}
