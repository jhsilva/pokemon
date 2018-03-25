import { connect } from 'react-redux';
import { actionFetchDetails } from 'redux/actions/Details';
import Details from 'components/Details';

const mapStateToProps = state => ({
  ...state.details,
});

const mapDispatchToProps = dispatch => ({
  fetchDetails: params => dispatch(actionFetchDetails(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
