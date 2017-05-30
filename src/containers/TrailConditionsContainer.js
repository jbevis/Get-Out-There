import { connect } from 'react-redux';
import { TrailConditions } from '../components/TrailConditions/TrailConditions';

const mapStateToProps = (state) => {
  return {
    currentConditions: state.conditionsReducer
  }
}

export default connect(mapStateToProps, null)(TrailConditions)
