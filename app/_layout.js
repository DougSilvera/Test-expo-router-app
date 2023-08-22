import { Text, View } from "react-native";
import {Tabs} from "expo-router";
/// This is the root layout where we can wrap any providers around slot and display the splash screen while the app initializes
import {
  // Import `SplashScreen` from `expo-router` instead of `expo-splash-screen`
  SplashScreen,

  // This example uses a basic Layout component, but you can use any Layout.
  Slot,
} from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  // Render the children routes now that all the assets are loaded.

  return (
    <SafeAreaProvider>
      <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
      </Tabs>
    </SafeAreaProvider>
  );
}
