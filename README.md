## Get Out There

### Project Pitch

The goal of the app is to provide and centralized resource for people searching for hiking trails within a certain area. This is iteration 0 of this particular app. I hope to continue to add additional features to it in the future, including a map component to render the trails in a spatial context, a deeper dive into elevation data visualization, and hooking up a backend so that user data can be stored along with favorite trails. I would ultimately like to increase the scope of the app to include other outdoor recreation activities, such as camping, climbing routes, white water, etc.

### Project Screen Shot(s)
[wireframes](https://drive.google.com/open?id=0BwVmMWZvRBbXeFhwX1JBWXdTNzg)
[Get Out There - MVP](http://imgur.com/a/VPluc)  

### Installation and Setup Instructions

`git clone`
`npm install`
`npm start`  

### Reflection

This was a self directed project as part of the mod 3 curriculum for Turing School of Software & Design's Front End Engineering program. I set out to build an outdoor recreation app utilizing a number of crowd sourced apis aggregating outdoor activities. While the original scope of the project was to implement numerous activities, given the challenges presented in the build, the MVP was scaled back to only focus on hiking data. This project was challenging in that I chose to build it out in Redux vs. React. Redux is still a very new library for me, and so I chose to take on this challenge to solidify my understanding of Redux lifecycles and testing Redux.

Some unexpected obstacles included making a successful api call in order to return the data to display. The Hiking project's api requires a latitude and longitude to be passed in as parameters for the call. So, in order to accomplish this while still providing an input field for users to enter a location by name, I used the Google Maps geocode api. This can take a locality and return a data object that includes said location's lat and long coordinates. Testing Redux proved to be an extremely difficult challenge, especially the asynchronous api calls dispatched with Redux middleware, thunk.

As mentioned before, I chose to use Redux and React as the library for this app in order to gain more experience with them both and solidify my understanding of them both. The app was originally compiled using the create-react-app to set up the initial environment. After my initial checkin with the client, the decision to pivot to Redux was made, and was implemented after the fact. For the data visualization, I chose to use Victory js. This is a data visualization library that performs much better in React environments than the more expansive D3. I found Victory to be fairly easy to implement, however documentation is not ideal. For the next iteration of the project, I plan on doing more to manipulate the data and provide an more informative graphic in the app.



### Resources
  - Google Maps geocode api
  - The Hiking Project api
  - Victory Js (Data Visualization)
  - Redux
  - React
  - wireframes completed in Balsamiq
