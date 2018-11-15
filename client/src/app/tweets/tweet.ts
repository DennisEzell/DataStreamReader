export interface ITweet{
    id: number | null;
    retweeted: boolean;
    text: string;
    user_screen_name: string;
    user_profile_img: string;
    user_id: number | null;
    user_location: string;
    user_description: string;
    hashtags: string[];
}

export class Tweet implements ITweet{
    id: number = 0
    retweeted: boolean;
    text: string;
    user_screen_name: string;
    user_profile_img: string;
    user_id: number | null;
    user_location: string;
    user_description: string;
    hashtags: string[] = [];

    constructor(){}
}