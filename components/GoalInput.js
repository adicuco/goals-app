import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Input = styled.TextInput`
  border-color: black;
  border-width: 1px;
  padding: 10px;
  width: 80%;
  border-radius: 4px;
`;

const Button = styled.Button``;

const GoalInput = ({ onAddGoal }) => {
  const [inputGoal, setInputGoal] = useState("");

  const handleInputChange = text => {
    setInputGoal(text);
  };

  const handleSubmit = () => {
    onAddGoal(inputGoal);
    setInputGoal("");
  };

  return (
    <Container>
      <Input
        placeholder="Course Goal"
        onChangeText={handleInputChange}
        value={inputGoal}
      />
      <Button title="Add" onPress={handleSubmit} />
    </Container>
  );
};

export default GoalInput;
