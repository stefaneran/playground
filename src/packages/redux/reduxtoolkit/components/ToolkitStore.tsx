import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '0.3em',
    padding: '0.2em 0.3em'
  }
}));

const ToolkitStore = ({ items = [], loading, addItemThunk, deleteItemThunk }) => {
  const classes = useStyles(undefined);
  return (
    <>
      <h1> Redux Toolkit Store {loading && "(Loading...)"} </h1>
      <Button variant="contained" color="primary" className={classes.button} onClick={addItemThunk}>Add Item Thunk</Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={deleteItemThunk}>Delete Item Thunk</Button>
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length > 0 && items.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ToolkitStore;