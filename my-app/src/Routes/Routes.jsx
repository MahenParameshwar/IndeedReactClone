import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedJobs from '../Components/Pages/AppliedJobs';
import DisplayJobs from '../Components/Pages/DisplayJobs';
import Home from '../Components/Pages/Home';
import { Login } from '../Components/Pages/Login';
import PostJob from '../Components/Pages/PostJob';
import { Register } from '../Components/Pages/Register';
import SavedJobs from '../Components/Pages/SavedJobs';
import { SearchResult } from '../Components/Pages/SearchResult';
import PrivateRoute from './PrivateRoute';

function Routes(props) {
    return (
        <div>
            <Switch>
                
                <PrivateRoute exact path="/" Component={Home} />
                <PrivateRoute exact  path="/postJob" Component={PostJob}/>
                <PrivateRoute exact  path="/savedJobs" Component={SavedJobs}/>
                <PrivateRoute exact  path="/appliedJobs" Component={AppliedJobs}/>
                <PrivateRoute  path="/jobs" Component={DisplayJobs}/>
                
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/Register' exact>
                    <Register />
                </Route>
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