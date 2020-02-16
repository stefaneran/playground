import { connect } from 'react-redux';
import ToolkitStore from './components/ToolkitStore';
import configureStore from './store/configStore';
import { addItemThunk, deleteItemThunk } from './actions/thunks';

export const store = configureStore();

const mapStateToProps = state => ({
	items: state.items,
	loading: state.loading
});

const mapDispatchToProps = {
	addItemThunk,
	deleteItemThunk
}
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToolkitStore);