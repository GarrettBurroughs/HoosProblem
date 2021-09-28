import { initializeApp } from '@firebase/app';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import * as React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Post from './Post';

interface PostViewProps{
    postID: string;
}
interface IPost {
    postContent: string;
    time: {
        seconds: number;
        nanoseconds: number;
    };
    id: string;
}

const StyledPostView = styled.div`
    padding-top: 100px;
`

const PostView: React.FunctionComponent<PostViewProps> = ({ postID }) => {
    const [post, setPost] = React.useState<IPost>();
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

        onSnapshot(doc(db, "posts", postID), (doc) => {
            const data = doc.data();
            if (data) {
                setPost({
                    postContent: data.postContent,
                    time: data.time,
                    id: doc.id
                });
            }
        }, (error) => {
            console.log(error);
        });
    }, [postID]);

    return (
        <StyledPostView>
            <Header links={
                [{text:"back", link:"/home"}]
            }/>
            <Post
                postContent={post?.postContent || "error loading post content"}
                id={post?.id!}
                postTime={post?.time!.seconds!}
                showButton={false}
            />
        </StyledPostView>
    );
}

export default PostView;