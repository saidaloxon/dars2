import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../components/About'
import Category from '../components/Category'
import Contact from '../components/Contact'
import Error from '../components/Error'
import Home from '../components/Home'
import Homes from '../components/Homes'
import Navbar from '../components/Navbar'
import News from '../components/News'
import Sport from '../components/Sport'


function Root() {
  return (
    <div>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path={'/'} component={Navbar}/> 
        <Route path={'/home'} component={Navbar}/>
        <Route path={'/contact'} component={Navbar}/>
        <Route path={'/category'} component={Navbar}/>
        <Route path={'/about'} component={Navbar}/>
        <Route path={'/news'} component={Navbar}/>
        <Route path={'/sport'} component={Navbar}/>
        <Route exact path={'*'} component={Error}/>
         </Switch> 

      <Switch>
        <Route exact path={'/'}>
         <Homes />
        </Route>
        <Route path={'/home'} component={Home}/>
        <Route path={'/contact'} component={Contact}/>
        <Route path={'/category'} component={Category}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/news'} component={News}/>
        <Route path={'/sport'} component={Sport}/>
        <Route exact path={'*'} component={Error}/>
      </Switch>
    </div>
  )
}

export default Root