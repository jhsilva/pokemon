import { connect } from 'react-redux';
import { actionFetchList } from 'redux/actions/List';
import List from 'components/List';

const mapStateToProps = state => ({
  ...state.list,
});

const mapDispatchToProps = dispatch => ({
  fetchList: params => dispatch(actionFetchList(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
