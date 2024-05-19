import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import UserInput from '../UserInput'

import {
  BgContainer,
  LeftPanel,
  InfoCardContainer,
  Info,
  UserInputList,
  RightPanel,
  CounterHeading,
  AddInputContainer,
  Input,
  AddButton,
  EmptyImage,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInputList: [],
    userInput: '',
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: uuidv4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }

    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInput],
      userInput: '',
    }))
  }

  onChangeUserInput = event => {
    // console.log(event.target.value)
    this.setState({userInput: event.target.value})
  }

  renderOnAddUserInput = () => {
    const {userInputList} = this.state

    return userInputList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputList.map(eachList => (
        <UserInput key={eachList.id} userInputDetails={eachList} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <LeftPanel>
          <InfoCardContainer>
            <Info>
              Count the Characters like a <br /> Boss...
            </Info>
          </InfoCardContainer>
          <UserInputList>{this.renderOnAddUserInput()}</UserInputList>
        </LeftPanel>
        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              placeholder="Enter the Characters here"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
            <AddButton type="submit">Add</AddButton>
          </AddInputContainer>
        </RightPanel>
      </BgContainer>
    )
  }
}
export default CharacterCounter
