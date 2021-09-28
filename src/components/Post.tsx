import * as React from 'react';
import styled from 'styled-components';
import crypto from 'crypto';
import { useHistory } from 'react-router';

interface PostProps{
    postContent: string; 
    postTime: number;
    id: string;
    showButton: boolean;
}

const StyledPost = styled.div`
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
    padding-bottom: 50px;

    
`
const StyledAvatar = styled.img`
    border-radius: 100px;
    width: 50px;
    height: 50px;
    background-color: #EEEEEE;
    margin-left: 30px;
    margin-top: 5px;
`

const StyledPostHeader = styled.div`
    width: 100%;
    background-color: var(--uva-orange);
    height: 20px;
`

const StyledDate = styled.div`
    display: inline-block;
    & p {
        transform: translate(10%, -75%)
    }
`;

const StyledPostContent = styled.div`
    margin-left: 53px;
    border-left: 5px solid rgba(35, 45, 75, .5);
    padding-left: 3px;
    margin-bottom: 15px;
    padding-right: 15px;
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


const Post: React.FunctionComponent<PostProps> = ({id, postContent, postTime, showButton }) => {
    const [avatarKey, setAvatarKey] = React.useState<string>("");
    const history = useHistory();
    React.useEffect(() => {
        let key = "";
        try {
            key = crypto.createHash('md5').update(postContent).digest('hex');
        } catch (e) {
            console.error(`post content hash error: ${postContent}`);
            console.error(e);
            key = "";
        }
        setAvatarKey(key);
    }, [postContent])
    
    const formatDate = (date: Date) => {
        return `${date.getHours()}:${date.getMinutes()} on ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    return (
        <StyledPost>
            <StyledPostHeader></StyledPostHeader>
            <StyledAvatar src={`https://avatars.dicebear.com/api/bottts/${avatarKey}.svg`} alt="Randomly generated user robot avatar"></StyledAvatar>
            <StyledDate>
                <p>At {formatDate(new Date(postTime * 1000))}</p>
            </StyledDate>
            <StyledPostContent>
                {postContent}
            </StyledPostContent>
            {showButton ? <StyledButton onClick={(e) => { history.push(`/HoosProblem/post/${id}`) }}>
                Let's Fix It!
            </StyledButton> : <></>}
            
        </StyledPost>
    );
}

export default Post;