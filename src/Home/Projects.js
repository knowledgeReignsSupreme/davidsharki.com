import React from 'react';
import { useScrollOnView } from '../hooks/useScrollOnView';
import styled from 'styled-components';
import { StyledLink } from '../GlobalStyles';
import { motion } from 'framer-motion';
import { scrollReveal, slideFromRight } from '../Animations';

import tsIcon from '../media/tofushare-icon.png';
import wsIcon from '../media/witchershop-icon.jpg';
import fsIcon from '../media/focussit-icon.png';
import tsPreview from '../media/tofushare-preview.png';
import wsPreview from '../media/witchershop-preview.png';
import fsPreview from '../media/focussit-preview.png';
import { FaLink, FaGithub, FaLinkedin } from 'react-icons/fa';
import { reportEvent } from '../Analytics';

export default function Projects() {
  const [element, controls] = useScrollOnView();

  const projects = [
    {
      name: 'Focus Sit',
      description:
        'All-in-one solution for events and guests management sold to Focus-Event. Built using ReactTS, Nestjs & PostgreSQL.',
      icon: fsIcon,
      preview: fsPreview,
      link: 'https://focus-sit.com',
      demo: 'https://www.linkedin.com/posts/david-sharki-925892204_acraclacsacgabracsacpacpadd-activity-6797845525736538112-hr92',
    },
    {
      name: 'Witcher Shop',
      description:
        'An E-commerce with integrated PayPal and Stripe payment methods. Built using the MERN stack.',
      icon: wsIcon,
      preview: wsPreview,
      link: 'https://witcher-shop.herokuapp.com/',
      repo: 'https://github.com/knowledgeReignsSupreme/Witcher-Shop',
    },
    {
      name: 'Tofu Share',
      description:
        'Vegan food sharing online community with social-app features.  Built using the MERN stack & AWS.',
      icon: tsIcon,
      preview: tsPreview,
      link: 'https://tofushare.com',
      repo: 'https://github.com/knowledgeReignsSupreme/tofushare',
    },
  ];

  return (
    <StyledProjects
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
    >
      <h3 id='projects'>Featured Projects:</h3>
      <ProjectsWrapper>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </ProjectsWrapper>
    </StyledProjects>
  );
}

function Project({ project }) {
  return (
    <StyledProject variants={slideFromRight(0.1)}>
      <img src={project.preview} alt={project.name} />
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <StyledLinks>
        <Link
          target='_blank'
          rel='noreferrer'
          href={project.link}
          onClick={() =>
            reportEvent(
              'Projects',
              `User has clicked the ${project.name} visit-site button`
            )
          }
        >
          <FaLink /> Visit Site
        </Link>

        <Link
          target='_blank'
          rel='noreferrer'
          href={project.repo || project.demo}
          onClick={() =>
            reportEvent(
              'Projects',
              `User has clicked the ${project.name} Github repo button`
            )
          }
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
    font-size: clamp(1rem + 1.5vw, 100%, 2.3rem);
    margin-bottom: 1rem;
  }
`;

const ProjectsWrapper = styled.div`
  max-width: 95%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  row-gap: 2rem;
  column-gap: 2rem;
`;

const StyledProject = styled(motion.div)`
  width: 30rem;
  max-width: 95%;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 7px 2px rgba(0, 0, 0, 0.3);
  margin-top: 1rem;
  padding-bottom: 2rem;
  border-radius: 25px;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 13rem;
    opacity: 0.35;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  h4 {
    position: absolute;
    bottom: 50%;
    left: 20px;
    z-index: 3;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme.main};
  }

  p {
    padding: 0.5rem;
    line-height: 1.5;
  }
`;

const StyledLinks = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: auto;

  a + a {
    margin-top: 0.5rem;
  }
`;

const Link = styled(StyledLink)`
  padding: 0.5rem 0.8rem;
  width: 60%;
`;
