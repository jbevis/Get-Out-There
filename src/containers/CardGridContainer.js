import { connect } from 'react-redux';
import CardGrid from '../components/CardGrid/CardGrid';
import { showTrails, fetchConditions } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    trails: state.trailsReducer,
    displayTrails: state.displayReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetDisplay: (trails, diffLevel) => dispatch(showTrails(trails, diffLevel)),
    handleGetConditions: (trail) => dispatch(fetchConditions(trail))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid)
