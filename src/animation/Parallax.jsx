import { useLayoutEffect, useRef, useState, useContext } from 'react';
import { motion, useTransform } from 'framer-motion';
import { ScrollContext } from './ScrollProvider';

function Parallax({ children, offset = 100, yDirect = true }) {
    const ref = useRef(null);
    const { scrollY } = useContext(ScrollContext);
    const [elementTop, setElementTop] = useState(0);
    const [elementHeight, setElementHeight] = useState(0);
    let start = elementTop - window.innerHeight;
    let end = elementTop + elementHeight;
    let scrollEnd = offset;
    if (yDirect) {
        end += offset;
        start -= offset;
    } else scrollEnd *= -1;
    const y = useTransform(scrollY, [start, end], [0, scrollEnd]);

    useLayoutEffect(() => {
        setElementTop(ref.current.getBoundingClientRect().top);
        setElementHeight(ref.current.clientHeight);
    }, []);

    return (
        <motion.div style={{ y, height: '100%', width: '100%' }} ref={ref}>
            {children}
        </motion.div>
    );
}

export default Parallax;
