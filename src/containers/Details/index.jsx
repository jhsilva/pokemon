import { connect } from 'react-redux';
import { actionFetchDetails } from 'redux/actions/Details';
import { actionFetchSpecie } from 'redux/actions/Specie';
import Details from 'components/Details';

const mapStateToProps = state => ({
  details: state.details,
  specie: state.specie,
});

const mapDispatchToProps = dispatch => ({
  fetchDetails: params => dispatch(actionFetchDetails(params)),
  fetchSpecie: params => dispatch(actionFetchSpecie(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
