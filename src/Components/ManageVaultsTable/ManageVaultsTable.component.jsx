import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import manageVaults from './manageVaults.styles';
import { Link } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein, balance, arrow, key) {
  return { name, calories, fat, carbs, protein, balance, arrow, key };
}

const rows = [
  createData('Buy a cara', 'Quick vault', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '75,000.00', '1dhdh'),
  createData('Pay my rent', 'Tyro vault', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '00.00', '2ddd'),
  createData('Grow my money', 'Stella vault', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '75,000.00', 'aaa3'),
  createData('Buy a cars', 'Stella vault', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '75,000.00', 'caa4'),
  createData('Buy a carf', 'Stella vault', 'Febuary 12, 2020', 'Febuary 12, 2020', 'Ayodeji Osindele', '75,000.00', 'dzfg5'),
];

const ManageVaultsTable = () => {
  const classes = manageVaults();
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
            <TableCell className={classes.tableHeading} align="justify">Balance</TableCell>
            <TableCell className={classes.tableHeading} align="justify"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {rows.map((row) => (
            <TableRow key={row.name} component={Link} to="/admin/vaults/456789" className={classes.tableRow} >
              <TableCell className={clsx(classes.tableCellBold, classes.tablePadding,)} scope="row">
                <div className={classes.dotCell}>
                  <div className={classes.dot}></div>
                  {row.name}
                </div>
              </TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.calories}</TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.fat}</TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.carbs}</TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.protein}</TableCell>
              <TableCell className={clsx(classes.tableCellBold, classes.tablePadding)} align="justify">{row.balance}</TableCell>
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

export default ManageVaultsTable
