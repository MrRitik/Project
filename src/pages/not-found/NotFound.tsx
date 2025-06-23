import React from 'react';
import { NotFoundWrapper, NotFoundTitle, NotFoundText } from './styles';

const NotFound: React.FC = () => (
  <NotFoundWrapper>
    <NotFoundTitle variant="h1">404</NotFoundTitle>
    <NotFoundText variant="body1">Page Not Found</NotFoundText>
  </NotFoundWrapper>
);

export default NotFound;
