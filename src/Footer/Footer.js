import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <img className="BottomLogo" src="/images/Group 40.png" />
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
                    <img className="Circle Section" src="/images/Ellipse 1.png" />
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
                        <img className="SocialMediaLink" src="/images/Icon_kv Copy 3.png" />
                        <img className="SocialMediaLink" src="/images/Icon_fb Copy 6.png" />
                        <img className="SocialMediaLink" src="/images/Icon_fb Copy 7.png" />
                        <img className="SocialMediaLink" src="/images/icon_ok copy 3.png" />
                    </div>
                    <div className="StoreBlock">
                        <img className="Store" src="/images/Group 13.png" />
                        <img className="Store" src="/images/Download_on_the_App_Store_Badge_RU_RGB_blk_100317.png" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
