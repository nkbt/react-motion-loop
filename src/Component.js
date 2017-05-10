import React from 'react';
import {Motion} from 'react-motion';
import PropTypes from 'prop-types';

export class ReactMotionLoop extends React.Component {
  constructor(props) {
    super(props);

    this.onRest = this.onRest.bind(this);

    this.state = {flag: true};
  }


  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }


  onRest() {
    this.raf = requestAnimationFrame(() => this.setState({flag: !this.state.flag}));
  }


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
}

ReactMotionLoop.propTypes = {
  styleFrom: PropTypes.object.isRequired,
  styleTo: PropTypes.object.isRequired
};
