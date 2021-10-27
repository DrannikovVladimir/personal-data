import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { saveData, addChild } from '../store/slices/userSlice';
import colors from '../constants/color';
import Plus from './icons/Plus';
import FormChild from './FormChild';

const FormSection = styled.section`
  background-color: ${colors.basicColor};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1366px;
  margin: 0 auto;
  padding-top: 30px;
  padding-right: 375px;
  padding-bottom: 100px;
  padding-left: 375px;

  @media (max-width: 1366px) {
    width: 900px;
    padding-left: 142px;
    padding-right: 142px;
  }

  @media (max-width: 900px) {
    width: 768px;
    padding-left: 76px;
    padding-right: 76px;
  }

  @media (max-width: 768px) {
    width: 550px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${colors.textColor};
`;

const FormGroup = styled.div`
  position: relative;

  width: 616px;
  min-height: 56px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 16px;

  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: ${colors.labelColor};
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding-top: 26px;
  padding-right: 16px;
  padding-bottom: 6px;
  padding-left: 16px;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;

  font-family: inherit;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

const TitleChild = styled(Title)`
  margin-bottom: 0;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  margin-top: 30px;
  margin-bottom: 11px;
`;

const ButtonAddChild = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 204px;
  min-height: 44px;
  padding: 10px 20px;
  border: 2px solid ${colors.accentColor};
  border-radius: 100px;

  font-family: inherit;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: ${colors.accentColor};

  background-color: transparent;

  transition: 0.2s;

  &:hover {
    color: ${colors.basicColor};
    background-color: ${colors.accentColor};
    border-color: transparent;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const ButtonSubmit = styled.button`
  min-width: 118px;
  min-height: 44px;
  margin-top: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 100px;

  font-family: inherit;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: ${colors.basicColor};

  background-color: ${colors.accentColor};

  transition: 0.1s;

  &:hover {
    background-color: ${colors.accentColorHover};
  }

  &:active {
    background-color: ${colors.accentColorActive};
  }
`;

const FeedbackValidation = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #e7573d;
`;

const validate = (child) => {
  const schema = Yup.array().of(
    Yup.object().shape({
      name: Yup
        .string()
        .required(),
      age: Yup
        .number()
        .required(),
    })
  );

  return schema.isValid(child);
}

const FormPage = () => {
  const dispatch = useDispatch();
  const { user, children } = useSelector((state) => state.user);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      userName: user.name,
      userAge: user.age,
    },
    validationSchema: Yup.object({
      userName: Yup
        .string()
        .required('Обязательное поле'),
      userAge: Yup
        .number()
        .min(1, 'Больше 1 и меньше 99')
        .max(99, 'Больше 1 и меньше 99')
        .required('Обязательное поле'),
    }),
    onSubmit: async (values, actions) => {
      const validation = await validate(children);
      if (!validation) {
        actions.setErrors({ children: true });
        return;
      }
      const user = {name: values.userName, age: values.userAge };
      dispatch(saveData({ user, children }));
      history.push('/preview');
      actions.resetForm();
    }
  });

  const handleAddChild = () => {
    const child = { name: '', age: '', id: Date.now() };
    dispatch(addChild({ child }));
  }

  return (
    <FormSection>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <Title>Персональные данные</Title>
          <FormGroup>
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName
            ? (<FeedbackValidation>{formik.errors.userName}</FeedbackValidation>)
            : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="age">Возраст</Label>
            <Input
              id="age"
              name="userAge"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.userAge}
            />
            {formik.touched.userAge && formik.errors.userAge
            ? (<FeedbackValidation>{formik.errors.userAge}</FeedbackValidation>)
            : null}
          </FormGroup>
          <ChildrenWrapper>
            <TitleChild>Дети (макс.5)</TitleChild>
            {children.length === 5
              ? null
              : <ButtonAddChild type="button" onClick={handleAddChild}>
                  <Plus />
                  Добавить ребенка
                </ButtonAddChild>}
          </ChildrenWrapper>
          <List>
            {children.map((child) => (<FormChild key={child.id} id={child.id} />))}
          </List>
          {formik.errors.children && children.length > 0
            ? <FeedbackValidation>Некорректно заполнена информация о детях</FeedbackValidation>
            : null}
          <ButtonSubmit type="submit">Сохранить</ButtonSubmit>
        </form>
      </FormContainer>
    </FormSection>
  )
};

export default FormPage;
