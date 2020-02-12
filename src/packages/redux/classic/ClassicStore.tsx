import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { addItem, deleteItem } from './thunks';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '0.3em',
    padding: '0.2em 0.3em'
  }
}));

const ClassicStore = ({ items = [], loading, addItem, deleteItem }) => {
  const classes = useStyles(undefined);
  return (
    <>
      <h1> Classic Store {loading && "(Loading...)"} </h1>
      <Button color="primary" className={classes.button} onClick={addItem}>Add Item</Button>
      <Button color="primary" className={classes.button} onClick={deleteItem}>Delete Item</Button>
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

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading
});

const mapDispatchToProps = {
  addItem,
  deleteItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassicStore);