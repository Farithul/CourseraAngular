export class Feedback {
    firstname: string | any;
    lastname: string | any;
    telnum: number | any;
    email: string | any;
    agree: boolean | any;
    contacttype: string | any;
    message: string | any;
};

export class CommentFeedback {
    author: string | any;
    comment: string | any;
    rating: number | any;
    date : string | any;
   
};

export const ContactType = ['None', 'Tel', 'Email'];