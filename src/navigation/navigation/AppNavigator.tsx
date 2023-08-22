
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import EmployeeManagementScreen from '../screens/EmployeeManagementScreen';
import LeadManagementScreen from '../screens/LeadManagementScreen';
import OpportunityTrackingScreen from '../screens/OpportunityTrackingScreen';
import TaskAssignmentScreen from '../screens/TaskAssignmentScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EmployeeManagement" component={EmployeeManagementScreen} />
        <Stack.Screen name="LeadManagement" component={LeadManagementScreen} />
        <Stack.Screen name="OpportunityTracking" component={OpportunityTrackingScreen} />
        <Stack.Screen name="TaskAssignment" component={TaskAssignmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;