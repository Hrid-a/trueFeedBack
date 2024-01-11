import { signInWithEmailAndPassword } from "firebase/auth";
import styled from 'styled-components';
import { auth } from "../utils/firebase";

function SignIn() {

    // const signInWithGoogle = (e) => {
    //   // const provider = new firebase.auth.GoogleAuthProvider();
    //   // auth.signInWithPopup(provider);
    //   console.log('signing')

    // }
    const signIn = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log("error", err);
        }
    };

    return (
        <>
            <Form onSubmit={signIn}>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="password" />
                <Button>Sign in</Button>
                <Term>Do not violate the community guidelines or you will be banned for life!</Term>
            </Form>
            {/* <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button> */}
        </>
    )

}


const Form = styled.form`
  padding:10px 20px;
  display: grid;
  gap:15px;
  
    margin: 0 auto;
    background: transparent;
`;

const Input = styled.input`
    line-height: 1.5;
    width: 100%;
    font-size: 1.5rem;
    background: rgb(58, 58, 58);
    color: white;
    outline: none;
    border: none;
    padding: 8px 12px;

`;

const Button = styled.button`
    border: none;
    color: white;
    padding: 15px 32px;
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
const Term = styled.p`
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: white;
    text-align: center;
`;
export default SignIn;