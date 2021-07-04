import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <img className="BottomLogo" src="/images/lines.png" alt="Лого" />
                <div className="SectionsBlock">
                    <ul className="Section">
                        Раздел 1
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                    </ul>
                    <ul className="Section">
                        Раздел 1
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                    </ul>
                    <img className="Circle Section" src="/images/circle.png" alt="Лого" />
                    <ul className="Section">
                        Раздел 1
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                    </ul>
                    <ul className="Section">
                        Раздел 1
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                        <li className="Subsection">Подраздел</li>
                    </ul>
                </div>
                <div className="BottomBlock">
                    <div className="SocialMediaBlock">
                        <img className="SocialMediaLink" src="/images/vk.png" alt="Вконтакте" />
                        <img className="SocialMediaLink" src="/images/facebook.png" alt="Facebook" />
                        <img className="SocialMediaLink" src="/images/twitter.png" alt="Facebook" />
                        <img className="SocialMediaLink" src="/images/ok.png" alt="Одноклассники" />
                    </div>
                    <div className="StoreBlock">
                        <img className="Store" src="/images/google_play.png" alt="Google Play" />
                        <img className="Store" src="/images/app_store.png" alt="App Store" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
