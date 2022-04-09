import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import ArticleCard from './ArticleCard';

const Articles = () => {
  return (
    <Container>
      <div className='container'>
        <h6 className='m-0 text-uppercase'>les</h6>
        <h1 className='text-uppercase'>articles</h1>
        <div className='row mt-5'>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 0;
  background: ${colors.bg};
  & h6,
  h1 {
    color: ${colors.box1};
  }
`;
export default Articles;
