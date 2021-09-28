import { Firestore, addDoc, collection, Timestamp } from 'firebase/firestore';
import * as React from 'react';
import styled from 'styled-components';

interface PostInputProps{
    db?: Firestore;
}


const StyledPostInput = styled.div`
    width: 60%;
    @media only screen and (max-width: 700px){
        width: 90%;
    }
    border-radius: 10px;
    box-shadow: 0px 0px 2px grey;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    text-align: left;
    position: relative; 
`

const StyledTextarea = styled.textarea`
    width: 75%;
    @media only screen and (max-width: 700px){
        width: 65%;
    }
    margin-right: 5%;
    margin-left: 5%;
    margin-top: 15px;
    height: 70px;
    border: none;
    font-family: var(--body-text);
    outline: none;
    resize: none;
    font-size: 18px;
`;

const StyledButton = styled.button`
    border: none;
    font-family: var(--header-text);
    color: var(--uva-blue);
    background-color: var(--uva-orange);
    border-radius: 10px;
    height: 40px;
    font-size: 24px;
    position: absolute;
    right: 10px;
    bottom: 10px;

    &:hover {
        box-shadow: 0px 0px 3px 0px var(--uva-blue);
    }
    
    &:active {
        border: 1px inset black; 
    }
`;
const PostInput: React.FunctionComponent<PostInputProps> = ({ db }) => {
    const [textAreaContent, setTextAreaContent] = React.useState<string>();
    const textRef = React.useRef<HTMLTextAreaElement>(null);

    const handleInput: React.MouseEventHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log(textAreaContent);
        if (db) {
            if (!textAreaContent) {
                alert("Post must contain content");
                return; 
            }
            const postCollection = collection(db, 'posts');
            const ts = new Timestamp(Date.now()/1000, 0);
            addDoc(postCollection, {
                postContent: textAreaContent,
                time: ts,
                upvotes: 0,
                replies: []
            });
            setTextAreaContent("");
            if (textRef.current) {
                textRef.current.innerText = "";
                textRef.current.value = "";
            }
            console.log('post created');
        } else {
            console.log('not connected to database');
        }
    }
    
    return (
        <StyledPostInput>
            <StyledTextarea ref={textRef} placeholder="Have a problem?" onChange={(e) => {setTextAreaContent(e.target.value)}}></StyledTextarea>
            <StyledButton onClick={handleInput}>Post!</StyledButton>
        </StyledPostInput>
    );
}

export default PostInput;