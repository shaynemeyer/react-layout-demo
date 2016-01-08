var React = require('react');
var ReactDOM = require('react-dom');
var Plainbox = require('./components/Plainbox.jsx');
var Weather = require('./components/Weather.jsx');
var Metrics = require('./components/Metrics.jsx');
var TripleBox = require('./components/TripleBox.jsx');

ReactDOM.render(<Plainbox title="20" bodyText="New followers added this month" />, document.getElementById('pb1'));
ReactDOM.render(<Plainbox title="$1250" bodyText="Average Monthly Income" />, document.getElementById('pb2'));
ReactDOM.render(<Plainbox title="$13865" bodyText="Yearly Income Goal" />, document.getElementById('pb3'));
ReactDOM.render(<Weather tempurature="18" city="Paris" boxColor="#ff8a00" />, document.getElementById('weather-paris'));
ReactDOM.render(<Metrics title="New visitors" bodyText="1.5K" headerColor="#0096d0" />, document.getElementById('metrics-visitors'));
ReactDOM.render(<Metrics title="Bounce Rate" bodyText="50%" headerColor="#b28ad6" />, document.getElementById('metrics-bounce-rate'));
ReactDOM.render(<Metrics title="Searches" bodyText="28%" headerColor="#ff4826" />, document.getElementById('metrics-searches'));
ReactDOM.render(<Metrics title="Traffic" bodyText="140.5 kb" headerColor="#63c254" />, document.getElementById('metrics-traffic'));
ReactDOM.render(<TripleBox shotViews="15080" likes="12000" comments="5100" titleBGColor="#0096d0" />, document.getElementById('tb1'));
ReactDOM.render(<TripleBox shotViews="15080" likes="12000" comments="5100" titleBGColor="#cd59ae" />, document.getElementById('tb2'));
