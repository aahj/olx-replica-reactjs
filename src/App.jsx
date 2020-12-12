import React from 'react';
import RoutePages from './config/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab)

class App extends React.Component {
  render() {
    return (
      <div>        
        <RoutePages />
      </div>
    )
  }
}
export default App;
