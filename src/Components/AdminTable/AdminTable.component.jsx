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
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import adminTableStyles from './AdminTable.styles';

function createData(name, active, role, email, deleteIcon) {
  return { name, active, role, email,  deleteIcon };
}

const rows = [
  createData('Ayodeji', 'Febuary 12, 2020', 'admin', 'ao@eoc.ng'),
  createData('Osindele', 'Febuary 12, 2020', 'admin',  'ao@eoc.ng'),
  createData('Admin', 'Febuary 12, 2020', 'admin', 'ao@eoc.ng'),
  createData('Dunsin', 'Febuary 12, 2020', 'super admin', 'ao@eoc.ng'),
  createData('Olamide', 'Febuary 12, 2020', 'admin, 2020', 'ao@eoc.ng',),
];

const AdminTable = () => {
  const classes = manageVaults();
  const tableStyles = adminTableStyles();
  return (
    <div className={classes.container}>
      <Table  aria-label="simple table" className={classes.table} >
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableHeading}>Name</TableCell>
            <TableCell className={classes.tableHeading} align="justify">active</TableCell>
            <TableCell className={classes.tableHeading} align="justify">role</TableCell>
            <TableCell className={classes.tableHeading} align="justify">email</TableCell>
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
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.active}</TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.role}</TableCell>
              <TableCell className={clsx(classes.tableCell, classes.tablePadding) } align="justify">{row.email}</TableCell>
              <TableCell className={clsx(classes.tableCellBold, classes.tablePadding)} align="justify">
                <DeleteOutlineIcon className={tableStyles.deleteIcon} />
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

export default AdminTable
