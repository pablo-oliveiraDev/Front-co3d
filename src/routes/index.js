import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Favoritos from '../Pages/Favoritos';


export default function routes() {
 return (
   <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/sobre' component={Sobre}/>
    <Route exact path='/favoritos/:id' component={Favoritos}/>
    <Route exact path='/favoritos' component={Favoritos}/>
   </Switch>
 );
}