import * as React from 'react';
import styled, {keyframes} from 'styled-components';
import Header from './Header';
import Post from './Post';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, Firestore, onSnapshot } from 'firebase/firestore';
import PostInput from './PostInput';
import { IPost } from '../types';



const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 80% 1fr;
    @media only screen and (max-width: 700px){
        grid-template-columns: 1fr 95% 1fr;
    }
`;

const StyledContentArea = styled.div`
    grid-column: 2;
    /*box-shadow: 0px 0px 5px #888888;*/
    margin-top: 100px;
    border-radius: 3px;
`;

const spinnerAnimation = keyframes`
    0% { transform: rotate(0deg); }
    75% { transform: rotate(280deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 10px var(--uva-orange);
    border-bottom-color: var(--uva-blue);
    animation: 1s linear infinite ${spinnerAnimation};
    margin: auto;
`;



const Homepage: React.FunctionComponent = () => {
    const [db, setDb] = React.useState<Firestore>();
    const [posts, setPosts] = React.useState<IPost[]>();

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

        // Initialize Firebase
        initializeApp(firebaseConfig);
        const db = getFirestore();
        setDb(db);

        const postsCol = collection(db, 'posts');

        onSnapshot(postsCol, (col) => {
            const posts: IPost[] = [];
            
            col.forEach(doc => {
                const data = doc.data();
                console.log(data.replies);
                posts.push({
                    postContent: data.postContent,
                    time: data.time,
                    id: doc.id,
                    replies: data.replies
                });
            });

            setPosts(posts);

        });
    }, []);

    const comparePosts: (a: IPost, b: IPost) => number = (a, b) => {
        return b.time.seconds - a.time.seconds;
    }
    
    return (
        <div>
            <Header></Header>
            <StyledGrid>
                <StyledContentArea>
                    <PostInput db={db}></PostInput>
                    {
                        posts ? posts.sort(comparePosts).map((p, i) => <Post
                            id={p.id}
                            postContent={p.postContent}
                            postTime={p.time.seconds}
                            key={i}
                            showButton={true}
                        />) : <Spinner />
                    }
                </StyledContentArea>
            </StyledGrid>
            
            
        </div>
    );
}

export default Homepage;