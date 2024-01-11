import styled from "styled-components";
import { auth } from "../utils/firebase";

function SignOut() {
    return auth.currentUser && (
        <Button className="sign-out" onClick={() => auth.signOut()}>Sign Out</Button>
    )
}


const Button = styled.button`
    border: none;
    padding: 4px 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.25rem;
    display: block;
    color: #282c34;
    background: white;
    width: fit-content;
    border-radius:14px;
    &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    }
`;

export default SignOut;