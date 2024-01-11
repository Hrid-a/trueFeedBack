import styled from "styled-components";
import { auth } from "../utils/firebase";


function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid;

    return (<>
        <Wrapper style={{
            '--color': messageClass ? 'white' : 'black', '--bg-color': messageClass ? '#0b93f6;' : '#e5e5ea',
            '--direction': messageClass && 'row-reverse'
        }}>
            <Image src={photoURL || 'https://s3.amazonaws.com/digitaltrends-uploads-prod/2015/12/Anonymous-mask-and-laptop.jpg'} />
            <Message style={{ '--position': messageClass && 'flex-end' }}>{text}</Message>
        </Wrapper>
    </>)
}

const Wrapper = styled.div`
     display: flex;
    align-items: center;
    flex-direction: var(--direction);
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
`;
const Message = styled.p`
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: var(--color);
    text-align: center;
    align-self: var(--position);
    background-color: var(--bg-color);

`;

export default ChatMessage;