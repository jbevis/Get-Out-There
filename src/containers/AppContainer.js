import { connect } from 'react-redux';
import App from '../components/App/App';
import { showTrails } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    trails: state.trailsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showTrails: (trails) => dispatch(showTrails(trails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
