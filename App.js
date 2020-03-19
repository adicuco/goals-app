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
  const [goals, setGoals] = useState([]);

  const handleAddGoal = newGoal => {
    setGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: newGoal }
    ]);
  };

  const handleDeleteGoal = key => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.key !== key));
  };

  return (
    <Container>
      <GoalInput onAddGoal={handleAddGoal} />

      <GoalsList
        data={goals}
        renderItem={({ item }) => (
          <GoalItem
            title={item.value}
            onDelete={() => handleDeleteGoal(item.key)}
          />
        )}
      />
    </Container>
  );
};

export default App;
