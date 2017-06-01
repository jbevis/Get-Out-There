import { connect } from 'react-redux';
import Controls from '../components/Controls/Controls';
import { fetchTrails, showTrails } from '../actions/index';


const mapStateToProps = (state) => {
  return {
    trails: state.trailsReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetTrails: (location, radius) => dispatch(fetchTrails(location, radius)),
    handleSetDisplay: (trails) => dispatch(showTrails(trails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
