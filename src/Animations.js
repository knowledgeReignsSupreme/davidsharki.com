import { keyframes } from 'styled-components';

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
    opacity: 1;
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
      staggerChildren: 0.75,
      duration: 1,
      ease: 'easeOut',
    },
  },
  exit: {
    transition: {
      duration: 1,
    },
  },
};

export const slideFromRight = (duration) => {
  return {
    hidden: { x: '100vw' },
    show: {
      x: 0,
      transition: {
        duration: duration || 0.5,
        ease: 'easeOut',
      },
    },
  };
};
