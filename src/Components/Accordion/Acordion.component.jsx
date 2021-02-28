import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import acordionStyles from './Acordion.styles';


const Acordion = ({ question, answer, expanded }) => {
  const classes = acordionStyles();

  const [expand, setExpand] = useState(expanded);

  const handleChange = () => {
    setExpand(!expand);
  }

  return (
    <Grid container justify="center" className={classes.accordionContainer} item lg={5} md={5}>
      <Accordion elevation={0} className={classes.root} expanded={expand} onClick={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.AccordionTitle}
        >
          <h5 className={classes.AccordionTitleTxt}>{question}</h5>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <p className={classes.accordionDetailsTxt}> {answer} </p>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default Acordion
