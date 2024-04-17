import { useContext, useRef } from 'react';
import { motion } from 'framer-motion';

import Parallax from '../../animation/Parallax';
import { ScrollContext } from '../../animation/ScrollProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer({ background, image1, image2, image3, strong, paragraph, bigText, anchorText }) {
    const { offsetTop } = useContext(ScrollContext);
    const footerRef = useRef(null);
    const footerAnimate = offsetTop > footerRef.current?.offsetTop - window.innerHeight;
    return (
        <div className={cx('wrapper')} ref={footerRef}>
            <div className={cx('container')}>
                <div className={cx('background')}>
                    <Parallax offset={180} yDirect={true}>
                        <div className={cx('image')} style={{ backgroundImage: `url(${background})` }}></div>
                    </Parallax>
                </div>
                <div className={cx('front')}>
                    <div className={cx('content')}>
                        <p className={cx('content-1')}>
                            <strong>{strong}</strong>
                            {paragraph}
                        </p>
                        <div className={cx('content-2')}>
                            <h4>{bigText}</h4>
                            <a>
                                <p>{anchorText}</p>
                                <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
                            </a>
                        </div>
                    </div>
                    <div className={cx('animate')}>
                        <motion.div
                            initial={footerAnimate ? { opacity: 1, y: 100 } : false}
                            animate={footerAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 100 }}
                            transition={{
                                duration: footerAnimate ? 0.9 : 0,
                                ease: 'easeOut',
                            }}
                        >
                            <Parallax offset={110} yDirect={false}>
                                <div className={cx('images')}>
                                    <div className={cx('bg-image')} style={{ backgroundImage: `url(${image1})` }}></div>
                                    <div className={cx('bg-image')} style={{ backgroundImage: `url(${image2})` }}></div>
                                </div>
                            </Parallax>
                        </motion.div>
                        <div className={cx('wrap-img')}>
                            <Parallax offset={110} yDirect={false}>
                                <div className={cx('bg-image')} style={{ backgroundImage: `url(${image3})` }}></div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-content')}>
                <div className={cx('left')}>
                    <h3>
                        Want to be the first to know?
                        <br /> Follow us on social:
                    </h3>
                    <ul>
                        <li>
                            <a>Facebook</a>
                        </li>
                        <li>
                            <a>Instagram</a>
                        </li>
                        <li>
                            <a>Pinterest</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('right')}>
                    <ul>
                        <li>
                            <a>FAQ</a>
                        </li>
                        <li>
                            <a>Shipping</a>
                        </li>
                        <li>
                            <a>Return & Refund Policy</a>
                        </li>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                        <li>
                            <a>Virtual Styling Experience</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                    <h3>
                        Renewable jewelry <br />
                        inspired by you
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;
