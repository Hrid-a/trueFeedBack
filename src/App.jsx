import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase';
import styled from 'styled-components';


function App() {

  const [user] = useAuthState(auth);

  return (
    <Wrapper>
      <Header>
        <h1>Anonymos Feedback</h1>
        <SignOut />
      </Header>
      <ContentWrapper>
        {user ? <ChatRoom /> : <SignIn />}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 text-align: center;
    max-width: 728px;
    margin: 0 auto;
`;
const Header = styled.header`
  background-color: #181717;
    height: 10vh;
    min-height: 50px;
    color: white;
    position: fixed;
    width: 100%;
    max-width: 728px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    padding: 10px;
    box-sizing: border-box;
    h1{
      font-size: 1.6rem;
      font-weight: 700;
    }
`;

const ContentWrapper = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-color: rgb(40, 37, 53);
`;
export default App;