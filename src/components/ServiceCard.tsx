import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../constants/colors';
import { MdArrowForwardIos } from 'react-icons/md';

interface Props {
  title?: string;
  color: string;
}
const ServiceCard: React.FC<Props> = ({ title, color }) => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer color={color} className='shadow py-3 px-5'>
        <Card className='bg-transparent border-0'>
          <div>
            <Title>
              {title} <MdArrowForwardIos size={10} />
            </Title>
          </div>
        </Card>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div<Props>`
  height: 8rem;
  border-radius: 1rem;
  overflow: hidden;
  color: ${colors.white};
  text-transform: uppercase;
  background-color: ${(props) => props.color};
  display: grid;
  place-content: center;
`;
const Title = styled.h4`
  display: inline-block;
  word-wrap: break-word;
  text-align: center;
  margin: 0;
`;
export default ServiceCard;
