import React from 'react';
import { useEffect, useRef, useState } from 'react';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';

const ScrollToTop = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showGoTop, setShowGoTop] = useState("goTopHidden");
    const refScrollUp = useRef();

    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (scrollPosition > 200) {
            return setShowGoTop("goTop");
        } else if (scrollPosition < 200) {
            return setShowGoTop("goTopHidden");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
    });

    const handleScrollUp = () => {
        refScrollUp.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <div ref={refScrollUp}>
                <ScrollToTopButton showGoTop={showGoTop} scrollUp={handleScrollUp}></ScrollToTopButton>
            </div>
        </div>
    );
};

export default ScrollToTop;