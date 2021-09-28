export interface ILink {
    text: string;
    link: string;
}

export interface IPost {
    postContent: string;
    time: {
        seconds: number;
        nanoseconds: number;
    };
    id: string;
    replies: IReply[];
}

export interface IReply {
    replyContent: string;
    time: {
        seconds: number;
        nanoseconds: number;
    };
    id: string;
}