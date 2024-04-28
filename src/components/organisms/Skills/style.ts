import styled from "styled-components";
import FilmGrain from "../../../assets/images/film_grain.png";

export const SkillsContainer = styled.section`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 60px;
  position: relative;
  background-color: #dfdcff8c;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${FilmGrain});
    z-index: -1;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const SkillCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const InfoWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${(props) => props.theme.backgroundColor["main"]};
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-family: Ottreco-regular;
  font-size: 18px;
  line-height: 21.6px;
  color: rgb(42, 42, 42);
  text-transform: capitalize;
  text-wrap: nowrap;
`;

export const Description = styled.p`
  font-family: Ottreco-light;
  font-size: 14px;
  text-wrap: wrap;
`;
