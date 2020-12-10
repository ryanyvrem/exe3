<Stack.Screen
name="Notes"
component={NotesScreen}
options={{
  headerTitle: "Notes App",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  headerStyle: {
    height: 120,
    backgroundColor: "yellow",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
}}
/>
</Stack.Navigator>
</NavigationContainer>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#ffc",
alignItems: "center",
justifyContent: "center",
},
});

