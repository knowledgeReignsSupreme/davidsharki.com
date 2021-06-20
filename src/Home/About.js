import React from 'react';
import styled from 'styled-components';
import ME from '../media/me.png';

export default function About() {
  return (
    <StyledAbout id='me'>
      <StyledBox>
        <StyledHeader>
          <h3>About me</h3>
          <p>David Sharki</p>
        </StyledHeader>
        <StyledText>
          <img src={ME} alt='me' />
          <p>
            <span>L</span>orem ipsum dolor sit, amet consectetur adipisicing
            elit. Eius, accusantium. Eaque soluta cupiditate ullam amet
            similique error modi quis? Unde ex culpa ea corporis facilis soluta
            ad alias id tempore non! Doloribus natus ipsam vel quam
            reprehenderit ducimus hic, consequatur, dolorem adipisci inventore
            assumenda vitae quaerat, beatae non quod aliquam illum nemo
            voluptatem praesentium quisquam nulla accusamus modi odio? Deleniti
            praesentium alias maiores totam accusamus numquam, sapiente nam non
            eaque nemo officiis commodi blanditiis excepturi provident quidem
            rem, id ex, laudantium error. Expedita recusandae fugit distinctio
            iusto impedit modi reprehenderit voluptatibus! Vel delectus, iste
            ipsa alias dolorem minus pariatur corporis.
          </p>
        </StyledText>
      </StyledBox>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  width: 100%;
`;

const StyledBox = styled.div`
  max-width: 90%;
  border: 1px solid ${(props) => props.theme.fontColor};
  margin: 0 auto;
  padding: 1rem;
  border-radius: 25px;
  @media (max-width: 500px) {
    max-width: 95%;
  }
`;

const StyledHeader = styled.div`
  width: max-content;
  margin: 0 auto;
  text-align: center;

  h3 {
    font-size: clamp(1rem, 1.5vw + 1rem, 2.8rem);
  }
`;

const StyledText = styled.div`
  max-width: 90ch;
  margin: 0 auto;
  margin-top: 1rem;
  line-height: 1.5;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    object-fit: cover;
    float: left;
    shape-outside: circle(50%);
    margin-right: 0.3rem;

    @media (max-width: 500px) {
      width: 4rem;
      height: 4rem;
    }
  }

  p span {
    font-size: 2.5rem;
    line-height: 1;
  }
`;
