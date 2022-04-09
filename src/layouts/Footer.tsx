import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../constants/colors';
import Logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <Container>
      <div className='container'>
        <div className='row gap-4 gap-md-0 justify-content-end'>
          <div className='col-lg-6'>
            <ImageBox src={Logo} className='mb-1' />
            <h5 className='ms-2 text-uppercase text-dark d-inline'>
              barbe & cimon notaires
            </h5>
          </div>

          <div className='col-lg-3 justify-self-center'>
            <ul className='text-capitalize'>
              <Link to='/'>
                <li className='mb-3'>á propos</li>
              </Link>
              <Link to='/'>
                <li className='my-3'>nos services</li>
              </Link>
              <Link to='/'>
                <li className='my-3'>articles</li>
              </Link>
              <Link to='/'>
                <li className='my-3'>contact</li>
              </Link>
            </ul>
          </div>
          <div className='col-lg-3 text-dark text-uppercase'>
            <h6 className='mb-2 '>bureau</h6>
            <p>101 boulevard saint joseph o, montreal, qc h2t 27p</p>
            <h6 className='mt-3 '>NOUS SUIVRE</h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: ${colors.color2};
  padding: 5rem 0;
  background: ${colors.white};
  & a,
  a:link {
    color: ${colors.black};
    text-decoration: none;
    text-transform: uppercase;
  }
  & a:hover,
  a:active {
    color: ${colors.color1};
  }
`;

const ImageBox = styled.img`
  width: 0.9rem;
  height: auto;
  background-size: cover;
`;
export default Footer;
