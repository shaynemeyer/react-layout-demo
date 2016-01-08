var React = require('react');


var Plainbox = React.createClass({
  render: function() {
    // onChange is called every keystroke so we can store the most recent data entered
    // value is what the user sees in the input box - we point this to newItemText so it updates

    var divStyle = {
      marginTop: 10
    };

    var bodyTextStyle = {
      marginTop: -25,
      marginLeft: 15,
      color: "#d3d3d3"
    };

    var panelStyle = {
      borderColor: "#e1e2e3"
    }

    return (
      <div style={divStyle} className="col-sm-4">
        <div style={panelStyle} className="panel">
          <div className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="row panel-body">
            <p style={bodyTextStyle}>{this.props.bodyText}</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Plainbox;
