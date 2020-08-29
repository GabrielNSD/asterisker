import React from 'react';

const tweetButton = (props) => {
    
    const postTweet = () => {
        const tweet = props.tweet;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
        window.open(twitterUrl, "_blank")
    };
    return (
        <button onClick={postTweet}>Tweet</button>
    )
}

export default tweetButton;