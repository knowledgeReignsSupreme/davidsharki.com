import { keyframes } from 'styled-components';
import { darkTheme, lightTheme } from './GlobalStyles';

export const slideFromLeft = keyframes`
from {
  transform: translateX(-100px);

}
  to {
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
from {
  opacity: 0;

}
  to {  
    opacity: .7;
  }
`;

export const typewriter = keyframes`
    to {
    left: 100%;
  }
`;

export const blink = keyframes`
  to {
    background: transparent;
  }
`;

export const fadeInUp = keyframes`
    to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 1,
      ease: 'easeOut',
    },
  },
  exit: {
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

export const slideFromRight = (duration) => {
  return {
    hidden: { x: '100%', opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration || 0.5,
        ease: [0, 0.87, 0.86, 0.57],
      },
    },
  };
};

export const hoverLink = (currentTheme) => {
  return {
    scale: 1.1,
    originX: 0,
    color:
      currentTheme === 'light' ? lightTheme.secondary : darkTheme.secondary,
  };
};
