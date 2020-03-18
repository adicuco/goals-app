import React, { useState } from "react";
import styled from "styled-components";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const Container = styled.View`
  background-color: #ffff;
  padding: 50px;
`;

const GoalsList = styled.FlatList`
  margin-vertical: 10px;
`;

const App = () => {
  const [inputGoal, setInputGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleInputChange = text => {
    setInputGoal(text);
  };

  const handleAddGoal = () => {
    setGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: inputGoal }
    ]);
    setInputGoal("");
  };

  return (
    <Container>
      <GoalInput
        value={inputGoal}
        onChangeText={handleInputChange}
        onPress={handleAddGoal}
      />

      <GoalsList
        data={goals}
        renderItem={({ item }) => <GoalItem title={item.value} />}
      />
    </Container>
  );
};

export default App;
