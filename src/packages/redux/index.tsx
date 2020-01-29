import React from 'react';
import { connect } from 'react-redux';

export interface IStoreItem {
  id: string;
  value: number;
}

const ReduxMain = () => {
  return (
    <div>

    </div>
  );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxMain);