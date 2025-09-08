import { Stack } from "expo-router";

export default function LessonsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="session1" 
        options={{ title: "Session 1" }} 
      />
      <Stack.Screen 
        name="session2" 
        options={{ title: "Session 2" }} 
      />
      <Stack.Screen 
        name="session3" 
        options={{ title: "Session 3" }} 
      />
      <Stack.Screen 
        name="session4" 
        options={{ title: "Session 4" }} 
      />
    </Stack>
  );
}