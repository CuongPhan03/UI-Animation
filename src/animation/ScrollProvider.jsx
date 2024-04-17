import React, { useState, useRef } from 'react';

import { Scrollbar } from 'smooth-scrollbar-react';
import { useScroll } from 'framer-motion';

const ScrollContext = React.createContext(null);

function ScrollProvider({ children, setScrollTop, setScrollDown }) {
    const target = useRef(null);
    const { scrollY } = useScroll({ container: target });
    const [offsetTop, setOffsetTop] = useState(0);
    const [damping, setDamping] = useState(0.07);
    return (
        <ScrollContext.Provider value={{ scrollY, offsetTop }}>
            <Scrollbar
                damping={damping}
                plugins={{
                    overscroll: {
                        effect: 'glow',
                    },
                }}
                onScroll={(status) => {
                    const offTop = status.offset.y;
                    const down = offTop > target.current.scrollTop;
                    setScrollDown(down);
                    setScrollTop(offTop);
                    if (offTop <= 80 && !down) setDamping(0.025);
                    else setDamping(0.07);
                    setOffsetTop(offTop);
                    target.current.scrollTo(0, offTop);
                }}
            >
                {children}
                <div
                    ref={target}
                    style={{
                        height: '1px',
                        width: '1px',
                        position: 'absolute',
                        left: '-100px',
                        overflowY: 'scroll',
                        zIndex: '-100',
                    }}
                >
                    <div style={{ height: '50000px' }}></div>
                </div>
            </Scrollbar>
        </ScrollContext.Provider>
    );
}

export { ScrollProvider, ScrollContext };
