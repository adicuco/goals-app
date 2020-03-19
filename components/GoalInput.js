import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  border-color: black;
  border-width: 1px;
  padding: 10px;
  width: 80%;
  border-radius: 4px;
  text-align: center;
  margin-vertical: 10px;
`;

const Button = styled.Button``;

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [inputGoal, setInputGoal] = useState("");

  const handleInputChange = text => {
    setInputGoal(text);
  };

  const handleSubmit = () => {
    if (inputGoal.length > 0) {
      onAddGoal(inputGoal);
      setInputGoal("");
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <Container>
        <Input
          placeholder="Course Goal"
          onChangeText={handleInputChange}
          value={inputGoal}
        />
        <Button title="Add" onPress={handleSubmit} />
        <Button title="Cancel" onPress={onCancel} color="red" />
      </Container>
    </Modal>
  );
};

export default GoalInput;
