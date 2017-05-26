import { connect } from 'react-redux';
import CardGrid from '../components/CardGrid/CardGrid';
import { setFilter } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    trails: state.trailsReducer,
    filteredTrails: state.filterReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilter: (trails) => dispatch(setFilter(trails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid)
