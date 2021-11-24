import React from 'react';
import "./ScrollToTopButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = (props) => {
    return (
        <div className={props.showGoTop} onClick={props.scrollUp}>
            <button className="goTop">
                <FontAwesomeIcon className="goTopIcon" icon={faAngleDoubleUp} />
            </button>
        </div>
    );
};

export default ScrollToTopButton;