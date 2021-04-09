import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import activityTableStyles from './ActivityTable.styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


function createData(name, balance, arrow, key) {
  return { name, balance, arrow, key };
}

const rows = [
  createData('Ayodeji Osindeleq', 'N 5,000', 1),
  createData('Ayodeji Osindelew', 'N 5,000', 2),
  createData('Ayodeji Osindeled', 'New user joined', 3),
  createData('Fund my vault', 'New vault created', 4),
];

const ActivityTable = () => {
  const classes = activityTableStyles();
  return (
    <div className={classes.container}>
      <Table  aria-label="simple table" className={classes.table} >
        <TableBody className={classes.tableBody}>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={clsx(classes.tablePadding,)} component="th" scope="row">
                <div className={classes.nameCell}>
                  <div className={clsx(classes.iconBox)} >
                    <ArrowUpwardIcon className={classes.icon}/>
                  </div>
                  <div className={classes.txtBox}>
                    <p className={classes.nameTxt}>{row.name}</p>
                    <p className={classes.daysTxt}>4 days ago</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className={clsx(classes.tableCellTxt, classes.tablePadding)} align="right">{row.balance}</TableCell>
              <TableCell className={clsx(classes.tableCellTxt, classes.tablePadding)} align="right">
                <ArrowForwardIcon className={classes.tableArrow} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.pagination}>
            <p className={classes.viewAll}>View All (54)</p>
      </div>
    </div>
  )
}

export default ActivityTable
