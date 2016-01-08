var React = require('react');


var Weather = React.createClass({
  render: function() {
    // onChange is called every keystroke so we can store the most recent data entered
    // value is what the user sees in the input box - we point this to newItemText so it updates

    var divStyle = {
      marginTop: 10,
      color: "white"
    };

    var bodyTextStyle = {
      marginTop: -30
    };

    var panelStyle = {

    }

    if (this.props.boxColor) {
      panelStyle.background = this.props.boxColor;
    }

    return (
      <div style={divStyle} className="col-sm-12">
        <div style={panelStyle} className="panel">
          <div className="panel-heading text-center">
            <h3>{this.props.tempurature}&deg;</h3>
          </div>
          <div className="row panel-body text-center">
            <p style={bodyTextStyle}>{this.props.city}</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Weather;
