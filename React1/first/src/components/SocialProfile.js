import React from 'react';
import SOCIELPROFILE from '../data/socialProfile';

const SocialProfile = (props) => {


    const {link, image} = props.socielProfile;


    return (
        <span>
                <a href={link}><img src={image} alt='profile' style={{width: 35, height: 35, margin: 10}}/></a>
            </span>
    );

}

const SocialProfiles = () => {

    return (
        <div>
            <h2>Social Links</h2>
            <div>
                <div>
                    {
                        SOCIELPROFILE.map(SOCIELPROFILE => {
                            return (
                                <SocialProfile key={SOCIELPROFILE.id} socielProfile={SOCIELPROFILE}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );

}

export default SocialProfiles;