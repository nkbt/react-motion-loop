import React from 'react';
import PropTypes from 'prop-types';
import {Motion} from 'react-motion';


export class ReactMotionLoop extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    styleFrom: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    styleTo: PropTypes.object.isRequired
  };

  state = {flag: true};

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }

  onRest = () => {
    this.raf = requestAnimationFrame(() => this.setState(({flag}) => ({flag: !flag})));
  };

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
