import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header({ isDown, offsetTop, isFromTop }) {
    const routes = [
        { title: 'Shop', to: '/' },
        { title: 'Our Story', to: '/second' },
        { title: 'The Loop', to: '/third' },
    ];
    return (
        <div className={cx('wrapper', isDown && 'hide', (offsetTop < 30 || isFromTop) && 'hideBg')}>
            <div className={cx('logo')}>L I M N I A</div>
            <div className={cx('pages')}>
                {routes.map((route, index) => (
                    <NavLink
                        to={route.to}
                        key={index}
                        className={(nav) => cx('link', 'underline', { active: nav.isActive })}
                    >
                        {route.title}
                    </NavLink>
                ))}
            </div>
            <div className={cx('actions')}>
                <button className={cx('search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
                </button>
                <button className={cx('cart', 'underline')}>Cart 0</button>
                <button className={cx('login', 'underline')}>Login</button>
            </div>
        </div>
    );
}

export default Header;
