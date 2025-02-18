import {UserInputItem, UserEnteredDetails} from './styledComponents'

const UserInput = props => {
  console.log(props)
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText} : {textLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}
export default UserInput
