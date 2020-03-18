import React from "react";
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

const GoalInput = ({ value, onChangeText, onPress }) => {
  return (
    <Container>
      <Input
        placeholder="Course Goal"
        onChangeText={onChangeText}
        value={value}
      />
      <Button title="Add" onPress={onPress} />
    </Container>
  );
};

export default GoalInput;
