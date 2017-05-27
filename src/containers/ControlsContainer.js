import { connect } from 'react-redux';
import Controls from '../components/Controls/Controls';
import { getTrails, showTrails } from '../actions/index';


const mapStateToProps = (state) => {
  return {
    trails: state.trailsReducer,
    displayTrails: state.displayReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetTrails: (trails) => dispatch(getTrails(trails)),
    handleSetDisplay: (trails) => dispatch(showTrails(trails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
