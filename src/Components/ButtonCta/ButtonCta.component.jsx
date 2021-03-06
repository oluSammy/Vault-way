import React from 'react';
import Button from '@material-ui/core/Button';
import btnStyles from './ButtonCta.styles';

const ButtonCta = ({ type, bgColor, text, paddingSide, shadow, paddingX, component, to, fontSize }) => {
  const classes = btnStyles();
  return (
    <Button className={classes.root} variant={type} color={bgColor} component={component} to={to}
      style={{
        fontSize: fontSize ? fontSize : '10px',
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