
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { LeadDetails } from 'com.example.api';

interface LeadManagementProps {
  leads: LeadDetails[];
  onLeadSelect: (lead: LeadDetails) => void;
}

const LeadManagement: React.FC<LeadManagementProps> = ({ leads, onLeadSelect }) => {
  const [selectedLead, setSelectedLead] = useState<LeadDetails | null>(null);

  useEffect(() => {
    // Fetch leads from API and update state
    // Example API call: leads(LeadDetails request)
    // Update leads state with the response
  }, []);

  const handleLeadSelect = (lead: LeadDetails) => {
    setSelectedLead(lead);
    onLeadSelect(lead);
  };

  return (
    <View>
      <Text>Lead Management</Text>
      <FlatList
        data={leads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleLeadSelect(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedLead && (
        <View>
          <Text>Selected Lead:</Text>
          <Text>{selectedLead.name}</Text>
          {/* Render additional lead details */}
        </View>
      )}
    </View>
  );
};

export default LeadManagement;