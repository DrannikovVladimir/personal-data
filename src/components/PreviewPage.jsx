import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import colors from '../constants/color';
import { getFormattedYear } from '../helpers';

const ContainerPreview = styled.div`
  display: flex;
  flex-direction: column;
  width: 1366px;
  margin: 0 auto;
  padding-top: 30px;
  padding-right: 375px;
  padding-bottom: 100px;
  padding-left: 375px;

  @media (max-width: 1366px) {
    width: auto;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
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

const UserText = styled.p`
  margin: 0;
  margin-bottom: 60px;
  padding: 0;

  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${colors.textColor};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const Item = styled.li`
  margin-bottom: 20px;
`;

const TextWrapper = styled.div`
  display: inline-block;
  min-height: 44px;
  padding: 12px 20px 10px;
  border-radius: 5px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${colors.textColor};

  background-color: ${colors.borderColor};
`;

const FeedbackText = styled.p`
  margin: 0;
  padding: 0;

  font-size: 16px;
  line-height: 24px;
  color: ${colors.labelColor};
`;

const FeedbackTextUser = styled(FeedbackText)`
  margin-bottom: 40px;
`;



const PreviewPage = () => {
  const { user, children } = useSelector((state) => state.user);

  return (
    <ContainerPreview>
      <Title>Персональные данные</Title>
      {user.name && user.age
        ? <UserText>
            {user.name},
            {' '}
            {user.age}
            {' '}
            лет
          </UserText>
        : <FeedbackTextUser>Данных нет</FeedbackTextUser>}
      <Title>Дети</Title>
      <List>
        {children.length === 0
          ? <FeedbackText>Детей нет</FeedbackText>
          : children.map((child) => (
            <Item key={child.id}>
              <TextWrapper>
                {child.name}
                {' '}
                {child.age}
                {' '}
                {getFormattedYear(child.age)}
              </TextWrapper>
            </Item>
          ))}
      </List>
    </ContainerPreview>
  )
};

export default PreviewPage;
