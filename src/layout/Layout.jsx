import { useState } from 'react';
import { ScrollProvider } from '../animation/ScrollProvider';

import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import Header from './Header/Header';
const cx = classNames.bind(styles);

function Layout({ children }) {
    const [offsetTop, setOffsetTop] = useState(0);
    const [isDown, setIsDown] = useState(false);
    return (
        <>
            <Header offsetTop={offsetTop} isDown={isDown} />
            <ScrollProvider setScrollTop={setOffsetTop} setScrollDown={setIsDown}>
                <div className={cx('wrapper')}>
                    <div className={cx('content')}>{children}</div>
                </div>
            </ScrollProvider>
        </>
    );
}

export default Layout;
