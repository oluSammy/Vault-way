import React from 'react';
import Button from '@material-ui/core/Button';
import btnStyles from './ButtonCta.styles';

const ButtonCta = ({ type, bgColor, text, paddingSide, shadow, paddingX }) => {
  const classes = btnStyles();
  return (
    <Button className={classes.root} variant={type} color={bgColor}
      style={{
        fontWeight: type === 'contained' ? 600 : 500,
        paddingRight: paddingSide,
        paddingLeft: paddingSide,
        paddingTop: paddingX,
        paddingBottom: paddingX,
        boxShadow: shadow ? '0px 15px 40px rgba(0, 163, 67, 0.25)' : 'none'
      }} >
      {text}
    </Button>
  )
}

export default ButtonCta