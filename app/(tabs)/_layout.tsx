import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
import { Ionicons } from '@expo/vector-icons';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f6f6f6',
        tabBarInactiveTintColor: '#B0BEC5',
        tabBarStyle: {
          backgroundColor: '#111111',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 26,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Ionicons name="paper-plane-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <Ionicons name="information-circle-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
