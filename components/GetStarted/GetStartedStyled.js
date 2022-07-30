import styled from "styled-components";

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 5rem;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  animation: moveTop 1s ease-in-out;

  @keyframes moveTop {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;

export const Heading = styled.h1`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.VeryDarkBlue};
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 3rem;
  }
`;

export const ContentWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  animation: moveRightToLeft 1s ease-in-out;
  @keyframes moveRightToLeft {
    0% {
      opacity: 0;
      transform: translateX(2rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 768px) {
    height: fit-content;
    margin-bottom: 2rem;
    order: 1;
    animation: moveTop 1s ease-in-out;
  }
`;

export const Person = styled.div`
`;
