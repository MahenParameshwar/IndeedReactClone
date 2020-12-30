import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import { SearchResult } from '../Components/Pages/SearchResult';

function Routes(props) {
    return (
        <div>
            <Switch>
                <Route path='/' exact render={()=><Home />} />
                <Route path="/companies" exact render={()=><div>Company</div>} />
                <Route path="/carrer/salary" exact render={()=><div>Salary</div>} />  
                <Route path="/jobs-search" exact render={()=><SearchResult />} />

            </Switch>
        </div>
        
    );
}

export default Routes;