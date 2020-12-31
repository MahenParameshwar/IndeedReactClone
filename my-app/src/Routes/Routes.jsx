import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DisplayJobs from '../Components/Pages/DisplayJobs';
import Home from '../Components/Pages/Home';

function Routes(props) {
    return (
        <div>
            <Switch>
                
                <Route path='/' exact>
                    <Home/>
                </Route>
                <Route  path="/jobs" render={(props)=><DisplayJobs {...props}/>}/>
                <Route path="/companies" exact render={()=><div>Company</div>} />
                <Route path="/carrer/salary" exact render={()=><div>Salary</div>} />  
                
            </Switch>
        </div>
        
    );
}

export default Routes;