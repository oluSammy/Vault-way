import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import manageVaults from '../ManageVaultsTable/manageVaults.styles';

function createData(name, calories, fat, carbs, protein,  arrow) {
  return { name, calories, fat, carbs, protein,  arrow };
}

const rows = [
  createData('Ayodeji Osindele', 'Quick vault', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '75,000.00'),
  createData('Ayodeji Osindele', 'Tyro vault', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '00.00'),
  createData('Ayodeji Osindele', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '75,000.00'),
  createData('Ayodeji Osindele', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '75,000.00'),
  createData('Ayodeji Osindele', 'Stella vault', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '75,000.00'),
];

const AdminUsersTable = () => {
  const classes = manageVaults();
  return (
    <div className={classes.container}>
      <Table  aria-label="simple table" className={classes.table} >
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableHeading}>Name</TableCell>
            <TableCell className={classes.tableHeading} align="justify">Date joined</TableCell>
            <TableCell className={classes.tableHeading} align="justify">Activity</TableCell>
            <TableCell className={classes.tableHeading} align="justify">Inflow</TableCell>
            <TableCell className={classes.tableHeading} align="justify">Outflow</TableCell>
            <TableCell className={classes.tableHeading} align="justify"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={clsx(classes.tableCellBold, classes.tablePadding,)} component="th" scope="row">
                <div className={classes.dotCell}>
                  {row.name}
                </div>
              </TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.calories}</TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.fat}</TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.carbs}</TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.protein}</TableCell>
              <TableCell className={clsx(classes.tableCellBold, classes.tablePadding)} align="justify">
                <ArrowForwardIcon className={classes.tableArrow} />
              </TableCell>
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

export default AdminUsersTable
