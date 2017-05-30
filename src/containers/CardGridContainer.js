import { connect } from 'react-redux';
import CardGrid from '../components/CardGrid/CardGrid';
import { setFilter, showTrails, getConditions } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    trails: state.trailsReducer,
    filteredTrails: state.filterReducer,
    displayTrails: state.displayReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilter: (trails) => dispatch(setFilter(trails)),
    handleSetDisplay: (trails) => dispatch(showTrails(trails)),
    handleGetConditions: (trail) => dispatch(getConditions(trail))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid)
