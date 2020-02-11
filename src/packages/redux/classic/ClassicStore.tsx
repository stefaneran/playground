import React from 'react';
import { connect } from 'react-redux';
import { Paper, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { addItem, deleteItem } from './thunks'

const ClassicStore = ({ items = [], addItem, deleteItem }) => {
  return (
    <>
      <h1> Classic Store </h1>
      <Button onClick={addItem}>Add Item</Button>
      <Button onClick={deleteItem}>Delete Item</Button>
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
              <TableRow>
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