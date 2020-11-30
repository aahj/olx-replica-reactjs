import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Header from '../components/Header';
import Top from '../components/top';
import SingleCard from '../components/SingleCardComp';
import MobilePhones from '../pages/Mobile_phones';
import Home from '../pages/Home';
import Cars from '../pages/Cars';
import Motorcycles from '../pages/Motorcycles';
import Houses from '../pages/Houses';
import Tv from '../pages/Tv_audio_video';
import Tablets from '../pages/Tablets';
import Lands from '../pages/Lands_and_plots';

class RoutePages extends React.Component {
  render() {
    return (
      <Router>
        <Top />
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/mobile-phones' component={MobilePhones} />
        <Route exact path='/cars' component={Cars} />
        <Route exact path='/motorcycles' component={Motorcycles} />
        <Route exact path='/houses' component={Houses} />
        <Route exact path='/tv-audio-video' component={Tv} />
        <Route exact path='/tablets' component={Tablets} />
        <Route exact path='/lands-and-plots' component={Lands} />
        <Route path='/details' component={SingleCard} />
        <Redirect to='/' />
      </Router>
    )
  }
}
export default RoutePages;