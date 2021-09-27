import * as React from 'react';
import styled from 'styled-components';
import crypto from 'crypto';

interface PostProps{
    postContent: string; 
    postTime: number; 
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
`;



const Post: React.FunctionComponent<PostProps> = ({ postContent, postTime }) => {
    const [avatarKey, setAvatarKey] = React.useState<string>("");
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
        </StyledPost>
    );
}

export default Post;