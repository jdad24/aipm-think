import React, {Component} from 'react';
import Layout from './layout/layout';
import DashboardContent from './dashboardContent/dashboardContent';

class Dashboard extends Component{

render(){
    let cont = <p>Content1</p>
    return(
        <Layout></Layout>
        
        // content={DashboardContent}
    
    );
}
}

export default Dashboard;