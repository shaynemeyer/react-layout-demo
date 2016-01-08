var React = require('react');


var Metrics = React.createClass({
  render: function() {
    // onChange is called every keystroke so we can store the most recent data entered
    // value is what the user sees in the input box - we point this to newItemText so it updates

    var divStyle = {
      marginTop: 10,
      color: "white"
    };

    var panelStyle = {
      height: 120
    }
    var bodyTextStyle = {
      fontSize: "1.5em"
    };

    var headerStyle = {
      height:60
    }

    var titleStyle = {
      fontSize:".80em"
    }

    if (this.props.headerColor) {
      headerStyle.background = this.props.headerColor;
    }

    return (
      <div style={divStyle} className="col-sm-12">
        <div style={panelStyle} className="panel">
          <div style={headerStyle} className="panel-heading">
            <div style={titleStyle}>{this.props.title}</div>
            <div style={bodyTextStyle}>{this.props.bodyText}</div>
          </div>
          <div className="row panel-body">

          </div>
        </div>
      </div>
    )
  }
});

module.exports = Metrics;
