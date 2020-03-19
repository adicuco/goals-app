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

const Button = styled.Button``;

const App = () => {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddGoal = newGoal => {
    setGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: newGoal }
    ]);
    setIsModalOpen(false);
  };

  const handleDeleteGoal = key => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.key !== key));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Button title="Add new Goal" onPress={() => setIsModalOpen(true)} />
      <GoalInput
        visible={isModalOpen}
        onAddGoal={handleAddGoal}
        onCancel={handleCloseModal}
      />

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
