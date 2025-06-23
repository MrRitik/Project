import { FooterBox, FooterContainer, FooterText } from './styled';

export const Footer = () => {
  return (
    <FooterBox component="footer">
      <FooterContainer maxWidth="lg">
        <FooterText variant="body2">
          © {new Date().getFullYear()} Ritik. All rights reserved.
        </FooterText>
      </FooterContainer>
    </FooterBox>
  );
};
