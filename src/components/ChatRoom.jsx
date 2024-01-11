import { useRef, useState } from 'react';
import { auth, db } from "../utils/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query, limit, serverTimestamp, addDoc } from 'firebase/firestore';
import ChatMessage from "./Message";
import styled from 'styled-components';

function ChatRoom() {
    const dummy = useRef();
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'), limit(25));
    const [messages] = useCollectionData(q, { idField: 'id' });
    // console.log(messages);
    const [formValue, setFormValue] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        try {
            const messagesCol = collection(db, "messages");
            await addDoc(messagesCol, {
                text: formValue,
                createdAt: serverTimestamp(),
                uid,
                photoURL
            });

            setFormValue('');
        } catch (error) {
            console.error("Failed to add document: ", error);
        }

        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <Wrapper>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <span ref={dummy}></span>
        </Wrapper>
        <Form onSubmit={sendMessage}>
            <Input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

            <Button type="submit" disabled={!formValue}>🕊️</Button>
        </Form>
    </>)
}

const Wrapper = styled.main`
    padding: 10px;
    height: 80vh;
    margin: 10vh 0 10vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
    width: 0.25rem;
    }

    &::-webkit-scrollbar-track {
    background: #1e1e24;
    }

    &::-webkit-scrollbar-thumb {
    background: #6649b8;
    }
`;

const Form = styled.form`
    height: 10vh;
    position: fixed;
    bottom: 0;
    background-color: rgb(24, 23, 23);
    width: 100%;
    max-width: 728px;
    display: flex;
    font-size: 1.5rem;
`;

const Input = styled.input`
        line-height: 1.5;
    width: 100%;
    font-size: 1.5rem;
    background: rgb(58, 58, 58);
    color: white;
    outline: none;
    border: none;
    padding: 0 10px;

`;

const Button = styled.button`
    /* width: 20%; */
    background-color: rgb(56, 56, 143);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;
    &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
`;

export default ChatRoom;