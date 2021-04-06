import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import activityTablePanel from './ActivityTablePanel.styles';
import clsx from 'clsx';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function createData(name, calories, fat, carbs, protein, last) {
  return { name, calories, fat, carbs, protein, last };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 10),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 10),
  createData('Eclair', 262, 16.0, 24, 6.0, 10),
  createData('Cupcake', 305, 3.7, 67, 4.3, 10),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 10),
];

const ActivityTablePanel = () => {
  const classes = activityTablePanel();
  return (
    <div className={classes.container}>
      <Table  aria-label="simple table" className={classes.table} >
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableHeading}>Vault name</TableCell>
            <TableCell className={classes.tableHeading} align="justify">Vault type</TableCell>
            <TableCell className={classes.tableHeading} align="justify">Date created</TableCell>
            <TableCell className={classes.tableHeading} align="justify">Cashout day</TableCell>
            <TableCell className={classes.tableHeading} align="justify">Owner</TableCell>
            <TableCell className={classes.tableHeading} align="justify">last</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="justify" style={{paddingTop: 40}}>{row.calories}</TableCell>
              <TableCell align="justify">{row.fat}</TableCell>
              <TableCell align="justify">{row.carbs}</TableCell>
              <TableCell align="justify">{row.protein}</TableCell>
              <TableCell align="justify">{row.last}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.pagination}>
          <div className={classes.arrowBox}>
            <ArrowBackIcon className={clsx(classes.arrow)} />
          </div>
          <p className={classes.page}>Page 1</p>
          <div className={classes.arrowBox}>
            <ArrowForwardIcon className={clsx(classes.active, classes.arrow)} />
          </div>
      </div>
    </div>
  )
}

export default ActivityTablePanel
