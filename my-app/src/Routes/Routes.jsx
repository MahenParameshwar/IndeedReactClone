import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CompanyReviews } from '../Components/Pages/CompanyReviews';
import DisplayJobs from '../Components/Pages/DisplayJobs';
import Home from '../Components/Pages/Home';
import { Login } from '../Components/Pages/Login';
import { Register } from '../Components/Pages/Register';
import { Review } from '../Components/Pages/Review';
import { SearchResult } from '../Components/Pages/SearchResult';
import PrivateRoute from './PrivateRoute';

function Routes(props) {
    return (
        <div>
            <Switch>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/Register' exact>
                    <Register />
                </Route>
                <PrivateRoute exact path="/" Component={Home} />
                <PrivateRoute  path="/jobs" Component={DisplayJobs}/>
                <PrivateRoute  path="/companies" Component={CompanyReviews}/>
                <Route path = "/reviews" exact render = {(props) => <Review {...props} />} />
                {/* <Route path='/' exact>
                    <Home/>
                </Route>
                <Route  path="/jobs" render={(props)=><DisplayJobs {...props}/>}/>
                <Route path="/companies" exact render={()=><div>Company</div>} />
                <Route path="/carrer/salary" exact render={()=><div>Salary</div>} />   */}
                
            </Switch>
        </div>
        
    );
}

export default Routes;