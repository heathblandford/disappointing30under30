import React from 'react';
import SocialShare from 'react-simple-social';
import '../Stylizers/Socials.css';

const Socials = ({disappointment}) => {
    return (
        <div>
        <SocialShare
            url="https://www.disappointing30under30.com"
            title={disappointment}
            sites={['facebook', 'twitter', 'reddit']}
            color='black'
            width="40"
            height="40"
            theme="minimal"
            className="socialButtons"
            target="_blank"
        />
        </div>
    );
}


export default Socials;