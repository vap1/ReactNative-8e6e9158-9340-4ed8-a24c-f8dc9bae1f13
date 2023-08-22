
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TaskDetails, UserRegistrationResponse } from '../api/types'; // Import the necessary types from your API

const TaskAssignmentScreen: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('your-backend-api-url/tasks');
      const data: UserRegistrationResponse = await response.json();
      if (data.success) {
        setTasks(data.tasks);
      } else {
        console.error(data.errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderTaskItem = ({ item }: { item: TaskDetails }) => (
    <TouchableOpacity onPress={() => handleTaskPress(item)}>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        {/* Render other task details */}
      </View>
    </TouchableOpacity>
  );

  const handleTaskPress = (task: TaskDetails) => {
    // Handle task press action
  };

  return (
    <View>
      <Text>Task Assignment Screen</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TaskAssignmentScreen;