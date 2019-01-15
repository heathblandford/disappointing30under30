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
            width="50"
            height="50"
            theme="minimal"
            className="socialButtons"
        />
        </div>
    );
}


export default Socials;