// import { connect } from 'react-redux';
// import CardGrid from '../components/CardGrid/CardGrid';
// import { setFilter } from '../actions/index';
//
// const mapStateToProps = (state) => {
//   return {
//     trails: state.trailsReducer,
//     filteredTrails: state.filterReducer
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleEasyFilter: (trails) => {
//       const easy = Object.keys(trails).filter(key => {
//         return trails[key].difficulty === 'green'
//       })
//
//       dispatch(setFilter(easy))
//     }
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(CardGrid)
