var React = require('react');


var TripleBox = React.createClass({
  render: function() {
    // onChange is called every keystroke so we can store the most recent data entered
    // value is what the user sees in the input box - we point this to newItemText so it updates

    var divStyle = {
      marginTop: 10,
      color: "white"
    };

    var panelStyle = {
      height: 200,
      background: "#484d4d",
      border: 0,
      cornerRadius: 7
    }
    var bodyTextStyle = {
      fontSize: "1.5em"
    };

    var headerStyle = {
      height:130
    }

    var panelBodyStyle = {

    }

    var titleStyle = {
      fontSize:".80em"
    }

    var largeTextStyle = {
      fontSize: "1.5em"
    }

    var captionStyle = {
      fontSize: ".80em",
      color: "#b1b2b2"
    }

    if (this.props.titleBGColor) {
      headerStyle.background = this.props.titleBGColor;
    }

    return (
      <div style={divStyle} className="col-sm-12">
        <div style={panelStyle} className="panel">
          <div style={headerStyle} className="panel-heading">

          </div>
          <div style={panelBodyStyle} className="row panel-body">
            <div className="col-xs-4 text-center">
              <div style={largeTextStyle}>{this.props.shotViews}</div>
              <div style={captionStyle}>Shot Views</div>
            </div>
            <div className="col-xs-4 text-center">
              <div style={largeTextStyle}>{this.props.likes}</div>
              <div style={captionStyle}>Likes</div>
            </div>
            <div className="col-xs-4 text-center">
              <div style={largeTextStyle}>{this.props.comments}</div>
              <div style={captionStyle}>Comments</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TripleBox;
