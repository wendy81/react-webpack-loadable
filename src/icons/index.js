import React from 'react';
import PropTypes from 'prop-types';
import { Svgs } from './svg';


class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Icon';
  }

  render() {
    const {
      onClick,
      type,
      size = 16,
      width,
      height,
      style = {},
      color = "#B9B9BA",
      paddingLeft = 4,
      paddingRight = 4,
      ...otherProps
    } = this.props;

    // type required
    if (!type || !type.length) return null;

    const Icon = Svgs[type];

    //ICONS[type] required
    if (!Icon) return null;


    return (
      <span onClick={onClick} style={
        {
          // border:'#000 1px solid',
          paddingLeft: paddingLeft + 'px',
          paddingRight: paddingRight + 'px',
          display: 'inline-flex',
          alignItems: 'center',
          ...style
        }
      }>
        <Icon
          width={width ? width + 'px' : size + 'px'}
          height={height ? height + 'px' : size + 'px'}
          color={color}
          {...otherProps}
        />
      </span>
    );
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string
};

Icon.defaultProps = {
  type: ''
};

export default Icon;
