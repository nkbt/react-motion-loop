import React from 'react';
import {Motion} from 'react-motion';


export const ReactMotionLoop = React.createClass({
  propTypes: {
    styleFrom: React.PropTypes.object.isRequired,
    styleTo: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {flag: true};
  },


  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  },


  onRest() {
    this.raf = requestAnimationFrame(() => this.setState({flag: !this.state.flag}));
  },


  render() {
    const {styleFrom, styleTo, ...props} = this.props;
    const {flag} = this.state;
    const defaultStyle = Object.keys(styleFrom).reduce((result, key) => ({
      ...result,
      [key]: typeof styleFrom[key] === 'object' ? styleFrom[key].val : styleFrom[key]
    }), {});
    const style = flag ? styleTo : styleFrom;

    return (
      <Motion
        defaultStyle={defaultStyle}
        onRest={this.onRest}
        style={style}
        {...props} />
    );
  }
});


