
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import EmployeeManagementScreen from './screens/EmployeeManagementScreen';
import LeadManagementScreen from './screens/LeadManagementScreen';
import OpportunityTrackingScreen from './screens/OpportunityTrackingScreen';
import TaskAssignmentScreen from './screens/TaskAssignmentScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="EmployeeManagement" component={EmployeeManagementScreen} />
        <Stack.Screen name="LeadManagement" component={LeadManagementScreen} />
        <Stack.Screen name="OpportunityTracking" component={OpportunityTrackingScreen} />
        <Stack.Screen name="TaskAssignment" component={TaskAssignmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;