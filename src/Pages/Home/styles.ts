import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.875rem;

  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  @media (min-width: 768px) {
    width: 768px;
  }
`;

export const Header = styled.header`
  margin: 2rem;
`;
export const FieldContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 300px;
    border: none;
    border-radius: 8px;
  }

  label {
    width: 100%;
    font-size: 14px;
    padding-left: 0.5rem;

    @media (min-width: 640px) {
      font-size: 1rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProvisoryContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme["skyeblue"]};

  input {
    width: 75%;
    margin-left: 0.5rem;
    font-size: 0.75rem;
    border: none;
    border-right: 1px solid ${(props) => props.theme["skyeblue"]};

    :focus {
      outline: 0;
    }

    @media (min-width: 640px) {
      font-size: 1rem;
      width: 70%;
    }
  }
`;

export const UpdateDataContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;

  @media (min-width: 640px) {
    width: 80%;
  }
`;
