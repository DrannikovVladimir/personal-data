import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import colors from '../constants/color';

const FooterSection = styled.footer`
  margin-top: auto;

  background-color: #FAFAFA;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1366px;
  min-height: 76px;
  margin: 0 auto;
  padding: 30px 92px;

  @media (max-width: 1366px) {
    width: 900px;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (max-width: 900px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Text = styled.p`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: ${colors.textColor};
`;

const Footer = () => {
  const { t } = useTranslation();

    return (
      <FooterSection>
        <FooterContainer>
          <Text>{t('footer.copy')}</Text>
        </FooterContainer>
      </FooterSection>
    );
};

export default Footer;
