### Get Out There

#### Synopsis
This is a personal project that was part of the curriculum for mod 3 at the Turing School of Software & Design in the Front End Engineering Program. The goal of the app is to provide and centralized resource for people searching for hiking trails within a certain area. This is iteration 0 of this particular app. I hope to continue to add additional features to it in the future, including a map component to render the trails in a spatial context, a deeper dive into elevation data visualization, and hooking up a backend so that user data can be stored along with favorite trails. I would ultimately like to increase the scope of the app to include other outdoor recreation activities, such as camping, climbing routes, white water, etc.

#### Details
The app was built using React-Redux with React Router 4. The data visualization is handled by Victory js. Data was sourced using the google maps geocode api for returning latitude and longitude of a location that was then passed to The Hiking Project's api for trail data.

#### Code Example
```
  <section className="card-grid">
    <div id="filter-bar">
      <label>Filter by:</label>
      <select name='difficulty'
        onChange={(e) => {this.setState({filter: e.target.value})}}>
        <option value='show-all'>Show All</option>
        <option value='green'>Easy</option>
        <option value='greenBlue'>Easy/Intermediate</option>
        <option value='blue'>Intermediate</option>
        <option value='blueBlack'>Intermediate/Difficult</option>
        <option value='black'>Difficult</option>
        <option value='dblack'>Extremely Difficult</option>
      </select>
      <button className='filter-btn'
        onClick={() => this.filterByDifficulty(this.state.filter)}>
        Filter
      </button>
    </div>
    { trailKeys.map((key, index) => {
      return (
        <Card key={index}
              trail={displayTrails[key]}
              handleGetConditions={handleGetConditions}/>
      )
    }) }
  </section>
  ```

#### Start Dev Server
`npm start`  

### Run Tests
`npm test`
