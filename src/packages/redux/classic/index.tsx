import { connect } from 'react-redux';
import ClassicStore from './components/ClassicStore';
import configureStore from './store/configStore';
import {
  addItem, 
  deleteItem
} from './store/store';
import { 
  addItemThunk,
  deleteItemThunk 
} from './actions/thunks';

export const store = configureStore();

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading
});
  
const mapDispatchToProps = {
  addItem,
  deleteItem,
  addItemThunk,
  deleteItemThunk
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassicStore);

