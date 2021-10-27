import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import colors from '../constants/color';
import { Label, Input } from './FormPage';
import { removeChild, handleChangeAge, handleChangeName } from '../store/slices/userSlice';

const ChildInputWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FormGroupChild = styled.div`
  position: relative;

  width: 260px;
  min-height: 56px;
  margin-right: 18px;
  margin-bottom: 0;
`;

const ButtonRemove = styled.button`
  margin: 0;
  padding: 5px 0;
  border: none;

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${colors.accentColor};

  background-color: transparent;

  &:hover {
    color: ${colors.accentColorHover};
  }

  &:active {
    color: ${colors.accentColorActive};
  }
`;

const FormChild = ({ id }) => {
  const dispatch = useDispatch();
  const { children } = useSelector((state) => state.user);
  const currentChild = children.find((child) => child.id === id);

  const handlerChangeName = (e) => {
    dispatch(handleChangeName({ name: e.target.value, id }));
  }

  const handlerChangeAge = (e) => {
    dispatch(handleChangeAge({ age: e.target.value, id }));
  }

  const handleRemoveButton = () => {
    dispatch(removeChild({ id }));
  }

  return (
    <ChildInputWrapper>
      <FormGroupChild>
        <Label htmlFor="name">Имя</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={handlerChangeName}
          value={currentChild.name}
        />
      </FormGroupChild>
      <FormGroupChild>
        <Label htmlFor="age">Возраст</Label>
        <Input
          id="age"
          name="age"
          type="number"
          onChange={handlerChangeAge}
          value={currentChild.age}
        />
      </FormGroupChild>
      <ButtonRemove type="button" onClick={handleRemoveButton}>Удалить</ButtonRemove>
    </ChildInputWrapper>
  )
};

export default FormChild;
