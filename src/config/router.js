import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import SingleCard from '../components/SingleCardComp';
import MobilePhones from '../pages/Mobile_phones';
import Home from '../pages/Home';
import Cars from '../pages/Cars';
import Motorcycles from '../pages/Motorcycles';
import Houses from '../pages/Houses';
import Tv from '../pages/Tv_audio_video';
import Tablets from '../pages/Tablets';
import Lands from '../pages/Lands_and_plots';
import Login from '../components/Login/Login';
import Sell from '../components/Sell/sell';

class RoutePages extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/details' component={SingleCard} />
        <Route exact path='/' component={Home} />
        <Route exact path='/mobile-phones' component={MobilePhones} />
        <Route exact path='/cars' component={Cars} />
        <Route exact path='/motorcycles' component={Motorcycles} />
        <Route exact path='/houses' component={Houses} />
        <Route exact path='/tv-audio-video' component={Tv} />
        <Route exact path='/tablets' component={Tablets} />
        <Route exact path='/lands-and-plots' component={Lands} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/sell-products' component={Sell} />
        <Redirect to='/' />
      </Router>
    )
  }
}
export default RoutePages;