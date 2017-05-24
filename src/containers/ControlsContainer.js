import { connect } from 'react-redux';
import Controls from '../components/Controls/Controls';
import { getTrails } from '../actions/index';


const mapStateToProps = (state) => {
  return {
    trails: state.trailsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetTrails: (trails) => dispatch(getTrails(trails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
