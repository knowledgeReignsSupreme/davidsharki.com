import React from 'react';
import styled from 'styled-components';
import { lightTheme, StyledLink } from '../GlobalStyles';
import { useScrollOnView } from '../hooks/useScrollOnView';

import tsPreview from '../media/tofushare-preview.png';
import btnsPreview from '../media/buttons-preview.png';
import crslPreview from '../media/carousel-preview.png';
import wsPreview from '../media/witchershop-preview.png';
import fsPreview from '../media/focussit-preview.png';
import { FaLink, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { scrollReveal, slideFromRight } from '../Animations';

export default function Grid() {
  const [element, controls] = useScrollOnView();

  const projects = [
    {
      name: 'Focus Sit',
      description:
        'All-in-one solution for events and guests management sold to Focus-Event. Built using ReactTS, Nestjs & PostgreSQL.',
      preview: fsPreview,
      link: 'https://focus-sit.com',
      demo: 'https://www.linkedin.com/posts/david-sharki-925892204_acraclacsacgabracsacpacpadd-activity-6797845525736538112-hr92',
    },
    {
      name: 'Witcher Shop',
      description:
        'An E-commerce with integrated PayPal and Stripe payment methods. Built using the MERN stack.',
      preview: wsPreview,
      link: 'https://witcher-shop.herokuapp.com/',
      repo: 'https://github.com/knowledgeReignsSupreme/Witcher-Shop',
    },
    {
      name: 'Tofu Share',
      description:
        'Vegan food sharing online community with social-app features.  Built using the MERN stack & AWS.',
      preview: tsPreview,
      link: 'https://tofushare.com',
      repo: 'https://github.com/knowledgeReignsSupreme/tofushare',
    },
    {
      name: 'Custom-Themed-Button',
      description:
        'React & Styled-Components UI buttons package. Avilable at npmjs.com!',
      preview: btnsPreview,
      link: 'https://www.npmjs.com/package/custom-themed-button',
      repo: 'https://github.com/knowledgeReignsSupreme/custom-themed-button',
    },
    {
      name: 'Solar-System-Carousel',
      description:
        'A unique carousel UI component for React. Avilable at npmjs.com!',
      preview: crslPreview,
      link: 'https://www.npmjs.com/package/solar-system-carousel',
      repo: 'https://github.com/knowledgeReignsSupreme/solar-system-carousel',
    },
  ];

  return (
    <StyledProjects
      id='projects'
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
    >
      <h3>Featured Projects:</h3>

      <StyledWrapper>
        {projects.map((project) => (
          <StyledProject variants={slideFromRight(0.1)}>
            <img src={project.preview} alt={project.name} />
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <StyledLinks>
              <Link target='_blank' rel='noreferrer' href={project.link}>
                <FaLink /> Visit Site
              </Link>

              <Link
                target='_blank'
                rel='noreferrer'
                href={project.repo || project.demo}
              >
                {project.repo ? (
                  <>
                    <FaGithub /> Github Repo
                  </>
                ) : (
                  <>
                    <FaLinkedin /> Project Demo
                  </>
                )}
              </Link>
            </StyledLinks>
          </StyledProject>
        ))}
      </StyledWrapper>
    </StyledProjects>
  );
}

const StyledProjects = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;

  h3 {
    font-size: clamp(2rem, 3.5vw, 3rem);
    margin-bottom: 1rem;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1vmin;
`;

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  max-height: 400px;
  padding-bottom: 2rem;
  margin: 1vmin;
  box-shadow: 0 6px 6px -6px #000;
  overflow: hidden;
  position: relative;
  border: 1px solid ${(props) => props.theme.fontColor};

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 50%;
    opacity: ${(props) => (props.theme === lightTheme ? 0.2 : 0.35)};
  }

  h4 {
    position: absolute;
    bottom: 60%;
    left: 20px;
    z-index: 3;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme.main};
    transform: skewX(10deg);
  }

  p {
    padding: 0.5rem;
    line-height: 1.5;
  }

  &:nth-child(1) {
    flex-basis: 35rem;
  }

  &:nth-child(2) {
    flex-basis: 25rem;
  }

  &:nth-child(3) {
    flex-basis: 35rem;
  }

  &:nth-child(4) {
    flex-basis: 35rem;
  }

  &:nth-child(5) {
    flex-basis: 25rem;
  }

  &:nth-child(6) {
    flex-basis: 25rem;
  }
`;

const StyledLinks = styled.div`
  width: 100%;
  margin-top: auto;
  a + a {
    margin-top: 0.5rem;
  }
`;

const Link = styled(StyledLink)`
  padding: 0.5rem 0.8rem;
  width: 60%;
`;
