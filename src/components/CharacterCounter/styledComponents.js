import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  height: 100vh;
`
export const LeftPanel = styled.div`
  background-color: #ffc533;
  width: 50%;
  padding: 20px;
`
export const InfoCardContainer = styled.div`
  background-color: #ffbf1f;
  padding: 25px;

`
export const Info = styled.h1`
  color: #334155;
  font-weight: bold;
  font-size: 32px;
  font-family: 'Roboto';
  line-height: 50px;
`
export const UserInputList = styled.ul`
  margin-top: 50px;
`

export const RightPanel = styled.div`
  background-color: #0f172a;
  width: 50%;
  padding: 20px;
`

export const CounterHeading = styled.h1`
  color: #ffbf1f;
  font-weight: bold;
  font-size: 32px;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 60px;
`

export const AddInputContainer = styled.form`
    display: flex;
`

export const Input = styled.input`
  height: 35px;
  width: 80%;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 15px;
  color: #475569;
  font-size: 16px;
`

export const AddButton = styled.button`
  height: 35px;
  width: 120px;
  background-color: #ffc533;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 15px;  
  color: #272c47;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto';
`
export const EmptyImage = styled.img`
  height: 100%;
  width: 100%;
  padding: 30px;
  margin-top: 20px;
`
