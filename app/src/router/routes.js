import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Root from './root';
import Main from './main';

import Audit from '../audit/audit';
import AuditDetails from '../audit/auditDetails';
 
export default (
    <Route path="/" component={Root}>
	
        <IndexRoute component={Main}/>
		<Route path="main" component={Main}/>
		
		<Route path="audit" component={Audit}/>
		<Route path="audit-details" component={AuditDetails}/>
    </Route>
);
