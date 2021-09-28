import { initializeApp } from '@firebase/app';
import { doc, Firestore, getFirestore, onSnapshot } from 'firebase/firestore';
import * as React from 'react';
import styled from 'styled-components';
import { IPost } from '../types';
import Header from './Header';
import Post from './Post';
import ReplyInput from './ReplyInput';

interface PostViewProps{
    postID: string;
}


const StyledPostView = styled.div`
    padding-top: 100px;
`
const StyledText = styled.div`
    font-size: 20px;
    text-align: left; 
    font-family: var(--header-text);
    color: var(--uva-blue);
    margin-left: 15%;
    @media only screen and (max-width: 700px){
        margin-left: 5%;
    }
`

const PostView: React.FunctionComponent<PostViewProps> = ({ postID }) => {
    const [post, setPost] = React.useState<IPost>();
    const [db, setDB] = React.useState<Firestore>();
    React.useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyCLrzhIG7ld1Q5qCVIRPP1P6j9DHNsXL7A",
            authDomain: "hoosproblem.firebaseapp.com",
            projectId: "hoosproblem",
            storageBucket: "hoosproblem.appspot.com",
            messagingSenderId: "448797692895",
            appId: "1:448797692895:web:b8ebcd0cb0740bc105aa6a",
            measurementId: "G-C1CFQGDTVN"
        };

        initializeApp(firebaseConfig);
        const db = getFirestore();
        setDB(db);
        onSnapshot(doc(db, "posts", postID), (doc) => {
            const data = doc.data();
            if (data) {
                console.log(data.replies);
                setPost({
                    postContent: data.postContent,
                    time: data.time,
                    id: doc.id,
                    replies: data.replies,
                });
            }
        }, (error) => {
            console.log(error);
        });
    }, [postID]);

    return (
        <StyledPostView>
            <Header links={
                [{ text: "back", link:"/HoosProblem/home"}]
            } />
            {post ?
                <>
                    <StyledText>
                        Here's the Problem:
                    </StyledText>
                    <Post
                        postContent={post?.postContent || "error loading post content"}
                        id={post?.id!}
                        postTime={post?.time!.seconds!}
                        showButton={false}
                    />
                    <ReplyInput postID={postID} db={db}></ReplyInput>
                    <hr />
                    {
                        post.replies.length > 0 ? <>
                            <StyledText>
                                And this is what Hoos think about what we can do to fix it
                            </StyledText>
                            {post.replies.map((r, k) => (
                                <Post key={k} postContent={r.replyContent} postTime={r.time.seconds} id={r.id} showButton={false}></Post>
                            ))}
                        </>
                        :
                            <StyledText>
                                No one has come up with anything yet, be the first to contribute a solution!
                            </StyledText>
                            
                    }
                    
                </>
            : <></>}
            
        </StyledPostView>
    );
}

export default PostView;