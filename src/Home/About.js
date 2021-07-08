import React from 'react';
import { useScrollOnView } from '../hooks/useScrollOnView';
import styled from 'styled-components';
import { StyledLink } from '../GlobalStyles';
import { motion } from 'framer-motion';
import { scrollReveal, slideFromRight } from '../Animations';

import ME from '../media/me.png';
import { FaFilePdf } from 'react-icons/fa';

export default function About({ windowWidth }) {
  const [element, controls] = useScrollOnView();

  return (
    <StyledAbout
      id='me'
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
    >
      <StyledBox>
        {windowWidth > 800 && (
          <StyledImage>
            <img src={ME} alt='me' />
          </StyledImage>
        )}
        <StyledText>
          <StyledHeader>
            <h3>About me</h3>
          </StyledHeader>
          {windowWidth <= 800 && <img src={ME} alt='me' />}
          <p>
            <span>A</span>s a web developer, the thing I enjoy the most is
            solving problems. whether it's a real-life problem that requires a
            technological solution or a coding problem that requires creativity.
            <br /> I'm self-taught and always striving to get better. I also
            enjoy learning new technologies & concepts. While mainly focused on
            React, Node, TypeScript, MongoDB & PostgreSQL, I am still exploring
            other technologies and frameworks that catch my interest!. <br />
            In my free time you would catch me playing the guitar, reading
            books, playing video games, and working out at the gym. (considered
            to be one of the best gym buddies to ever live)
          </p>
          <motion.div variants={slideFromRight(0.5)}>
            <Link href='/cv.pdf' target='_blank'>
              <FaFilePdf /> Get my CV
            </Link>
          </motion.div>
        </StyledText>
      </StyledBox>
    </StyledAbout>
  );
}

const StyledAbout = styled(motion.div)`
  width: 100%;
  padding-bottom: 4rem;
`;

const StyledHeader = styled.div`
  width: max-content;
  margin: 0 auto;
  text-align: center;

  h3 {
    font-size: clamp(2rem, 3.5vw, 3rem);
  }

  p {
    white-space: nowrap;
  }
`;

const StyledBox = styled.div`
  margin: 0 auto;
  padding: 1vmin;

  display: flex;
  justify-content: center;
`;

const StyledImage = styled.div`
  margin-right: 2rem;

  img {
    object-fit: cover;
    height: 400px;
    width: 350px;
    min-width: 250px;
  }
`;

const StyledText = styled.div`
  max-width: 90ch;
  line-height: 1.5;
  padding: 2vmin;

  img {
    width: 6rem;
    height: 6rem;
    float: left;
    object-fit: cover;
    border-radius: 50%;
    shape-outside: circle(50%);
    margin-right: 0.3rem;

    @media (max-width: 400px) {
      width: 4rem;
      height: 4rem;
    }
  }

  p span {
    font-size: 2.5rem;
    line-height: 1;
  }

  p {
    line-height: 1.7;
  }
`;

const Link = styled(StyledLink)`
  margin-top: 2rem;

  @media (max-width: 600px) {
    width: 60%;
  }
`;
