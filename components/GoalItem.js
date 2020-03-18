import React from "react";
import styled from "styled-components";

const Container = styled.View`
  padding: 10px;
  margin-vertical: 5px;
  background: #ccd7e4;
  border-color: black;
  border-width: 1px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

const GoalItem = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default GoalItem;
