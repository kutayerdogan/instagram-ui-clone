import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

export default function Screens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}
