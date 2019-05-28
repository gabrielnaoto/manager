import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="loginForm"
            component={LoginForm}
            title="Please login"
            initial />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add +"
            onRight={() => { Actions.employeeCreate(); }}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial />

          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="New Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
