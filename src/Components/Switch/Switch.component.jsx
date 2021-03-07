import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core';



const MuiSwitch = () => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  }

  const styles = makeStyles(() => ({
    label: {
      fontSize: '14px',

      '@media (max-width: 832px)': {
        fontSize: '12px'
      },
    }
  }));

  const classes = styles();
  return (
    <FormControlLabel
      classes= {{ label: classes.label }}
      value="start"
      control={<Switch color="primary" checked={checked} onChange={toggleChecked} />}
      label="Hide my dashboard balance"
      labelPlacement="start"
    />
  )
}

export default MuiSwitch;
