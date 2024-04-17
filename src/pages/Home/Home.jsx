import { useState, useEffect, useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Footer from '../../Layout/Footer/Footer';
import Parallax from '../../animation/Parallax';
import { ScrollContext } from '../../animation/ScrollProvider';
import videos from '../../assets/videos';
import images from '../../assets/images/Home';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import 'swiper/scss';
import 'swiper/scss/pagination';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    const { offsetTop } = useContext(ScrollContext);
    const introRef = useRef(null);
    const collectionRef = useRef(null);
    const sliderRef = useRef(null);
    const stepsRef = useRef(null);
    const designRef = useRef(null);
    const newsRef = useRef(null);
    const [introAnimate, setIntroAnimate] = useState(false);
    const [collectionAnimate, setCollectionAnimate] = useState(false);
    const [sliderAnimate, setSliderAnimate] = useState(false);
    const [stepsAnimate, setStepsAnimate] = useState(false);
    const [designAnimate, setDesignAnimate] = useState(false);
    const [newsAnimate, setNewsAnimate] = useState(false);
    useEffect(() => {
        const genAnimateCondition = (sectionRef) => {
            return offsetTop > sectionRef.current?.offsetTop - window.innerHeight;
        };
        const genVariants = (animate) => {
            return {
                start: animate ? { opacity: 0, y: 100 } : false,
                end: animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
            };
        };
        const animation1 = genAnimateCondition(introRef);
        const animation2 = genAnimateCondition(collectionRef);
        const animation3 = genAnimateCondition(sliderRef);
        const animation4 = genAnimateCondition(stepsRef);
        const animation5 = genAnimateCondition(designRef);
        const animation6 = genAnimateCondition(newsRef);
        setIntroAnimate(animation1);
        setCollectionAnimate(animation2);
        setSliderAnimate(animation3);
        setStepsAnimate(animation4);
        setDesignAnimate(animation5);
        setNewsAnimate(animation6);

        setIntroVariants(genVariants(animation1));
        setCollectionVariants(genVariants(animation2));
        setStepsVariants(genVariants(animation4));
        setDesignVariants(genVariants(animation5));
        setNewsVariants(genVariants(animation6));
    }, [offsetTop]);
    const [introVariants, setIntroVariants] = useState({});
    const [collectionVariants, setCollectionVariants] = useState({});
    const [stepsVariants, setStepsVariants] = useState({});
    const [designVariants, setDesignVariants] = useState({});
    const [newsVariants, setNewsVariants] = useState({});

    const [products, setProducts] = useState([]);
    const initialIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const [indexHover, setIndexHover] = useState(initialIndex);
    const [hoverInterval, setHoverInterval] = useState(null);
    const [stepsImage, setStepsImage] = useState(images.steps20);
    const [news, setNews] = useState([]);
    useEffect(() => {
        const sliderProducts = [
            {
                name: "Brandi's 'The Perennial Set'",
                status: 'Sold out',
                images: [images.slider10, images.slider11, images.slider12, images.slider13, images.slider14],
            },
            {
                name: "Brandi's 'The Manifold Set'",
                status: 'Sold out',
                images: [images.slider20, images.slider21, images.slider22, images.slider23, images.slider24],
            },
            {
                name: "CJ's 'The Gathering Set'",
                status: 'Sold out',
                images: [images.slider30, images.slider31, images.slider32, images.slider33, images.slider34],
            },
            {
                name: "CJ's 'The Myriad Set'",
                status: 'Sold out',
                images: [images.slider40, images.slider41],
            },
            {
                name: "CJ's 'The Serendipity Set'",
                status: 'Sold out',
                images: [images.slider50, images.collection2],
            },
            {
                name: "Mari's 'The Forager Set'",
                status: 'Sold out',
                images: [images.slider60, images.slider61, images.slider62, images.slider63],
            },
            {
                name: "Mari's 'The Slow Embrace Set'",
                status: 'Sold out',
                images: [images.slider70, images.slider71, images.slider72, images.collection1],
            },
            {
                name: "The 'Cultivar' print",
                status: 'Sold out',
                images: [images.slider80, images.slider81, images.slider82, images.slider83],
            },
            {
                name: 'The Genesis Set',
                status: 'Sold out',
                images: [images.slider90, images.slider91, images.collection3, images.slider92, images.slider93],
            },
        ];
        setProducts(sliderProducts);
        const stepsImages = [images.steps20, images.steps21, images.steps22];
        let i = 0;
        const timer = setInterval(() => {
            i = i === stepsImages.length - 1 ? 0 : i + 1;
            setStepsImage(stepsImages[i]);
        }, 1000);

        const sliderNews = [
            {
                image: images.newsImage1,
                name: images.newsName1,
                description: '13 Up and Coming Jewelry Designers to Look Out For',
            },
            {
                image: images.newsImage2,
                name: images.newsName2,
                description: "Fine jewelry brand does customization like you've never seen it",
            },
            {
                image: images.newsImage3,
                name: images.newsName3,
                description: 'Women Designers and CEOS Who Revolutionized the Fashion Industry in 2016',
            },
            {
                image: images.newsImage4,
                name: images.newsName4,
                description: 'What Should Women Really Wear to Work?',
            },
        ];
        setNews(sliderNews);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <section className={cx('section1')}>
                <video autoPlay muted loop src={videos.headerVideo} type="video/mp4" />
                <div>
                    <h1>
                        Renewable jewelry <br /> for the modern womxn.
                    </h1>
                    <button data1="SHOP OUR NEW COLLECTION" data2="LEARN MORE"></button>
                </div>
            </section>
            <section className={cx('section2')} ref={introRef}>
                <div className={cx('left')}>
                    <div className={cx('wrap-img')}>
                        <motion.div
                            initial={introAnimate ? { opacity: 0.5, scale: 1.25 } : false}
                            animate={introAnimate ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 1.25 }}
                            transition={{ duration: introAnimate ? 0.8 : 0, ease: 'easeOut' }}
                            style={{ backgroundImage: `url(${images.intro1})` }}
                            className={cx('bg-image')}
                        ></motion.div>
                    </div>
                    <div className={cx('wrap-content')}>
                        <div className={cx('content')}>
                            <motion.h4
                                variants={introVariants}
                                initial="start"
                                animate="end"
                                transition={{
                                    duration: introAnimate ? 1 : 0,
                                    ease: 'easeOut',
                                }}
                            >
                                MEET LIMNIA
                            </motion.h4>
                            <motion.h2
                                variants={introVariants}
                                initial="start"
                                animate="end"
                                transition={{
                                    delay: introAnimate ? 0.15 : 0,
                                    duration: introAnimate ? 1 : 0,
                                    ease: 'easeOut',
                                }}
                            >
                                BUILT TO WITHSTAND, CHANGE, AND MOVE THROUGH LIFE WITH YOU.
                            </motion.h2>
                            <motion.p
                                variants={introVariants}
                                initial="start"
                                animate="end"
                                transition={{
                                    delay: introAnimate ? 0.3 : 0,
                                    duration: introAnimate ? 1 : 0,
                                    ease: 'easeOut',
                                }}
                            >
                                <strong>We create</strong> design-forward, customizable fine jewelry that empowers
                                modern womxn to buy for themselves, on their own terms.
                            </motion.p>
                            <motion.a
                                initial={introAnimate ? { opacity: 0, scale: 1.3 } : false}
                                animate={introAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.3 }}
                                transition={{
                                    delay: introAnimate ? 1.1 : 0,
                                    duration: introAnimate ? 0.7 : 0,
                                    ease: 'easeOut',
                                }}
                                className={cx('anchor-btn')}
                            >
                                <p>Learn More</p>
                                <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
                            </motion.a>
                        </div>
                    </div>
                </div>
                <div className={cx('bg-image', 'right-img')} style={{ backgroundImage: `url(${images.intro2})` }}></div>
            </section>
            <section className={cx('section3')}>
                <div className={cx('collection')} ref={collectionRef}>
                    <div className={cx('left')}>
                        <motion.div
                            variants={collectionVariants}
                            initial="start"
                            animate="end"
                            transition={{
                                duration: collectionAnimate ? 1 : 0,
                                ease: 'easeOut',
                            }}
                        >
                            <Parallax offset={120} yDirect={false}>
                                <div
                                    className={cx('bg-image', 'left-img')}
                                    style={{ backgroundImage: `url(${images.collection1})` }}
                                ></div>
                            </Parallax>
                        </motion.div>
                        <motion.div
                            variants={collectionVariants}
                            initial="start"
                            animate="end"
                            transition={{
                                delay: collectionAnimate ? 0.3 : 0,
                                duration: collectionAnimate ? 1 : 0,
                                ease: 'easeOut',
                            }}
                        >
                            <p>
                                Thoughtful design combinations and adaptable elements mirror our own shifting
                                connections with the world around us. <br />
                                Featuring community-curated sets, lustrous pearls, golden cuffs and danglers provide
                                perennial style pieces that come together in myriad ways, allowing you to link pieces as
                                you like, creating a distinct expression of self that is ever-evolving.
                            </p>
                        </motion.div>
                    </div>
                    <div className={cx('right')}>
                        <motion.h4
                            variants={collectionVariants}
                            initial="start"
                            animate="end"
                            transition={{
                                duration: collectionAnimate ? 1 : 0,
                                ease: 'easeOut',
                            }}
                        >
                            NEW
                        </motion.h4>
                        <motion.h2
                            variants={collectionVariants}
                            initial="start"
                            animate="end"
                            transition={{
                                delay: collectionAnimate ? 0.15 : 0,
                                duration: collectionAnimate ? 1 : 0,
                                ease: 'easeOut',
                            }}
                        >
                            Kasama <br />
                            Collection
                        </motion.h2>
                        <motion.h3
                            variants={collectionVariants}
                            initial="start"
                            animate="end"
                            transition={{
                                delay: collectionAnimate ? 0.3 : 0,
                                duration: collectionAnimate ? 1 : 0,
                                ease: 'easeOut',
                            }}
                        >
                            INSPIRED BY THE FILIPINO WORD FOR TOGETHERNESS, <br />
                            THE KASAMA COLLECTION IS ROOTED IN A NATURAL YEARNING FOR INTIMACY AND MEANING.
                        </motion.h3>
                        <div className={cx('wrap-paralax')}>
                            <Parallax offset={150} yDirect={false}>
                                <div className={cx('images')}>
                                    <div
                                        className={cx('bg-image', 'left-img')}
                                        style={{ backgroundImage: `url(${images.collection2})` }}
                                    ></div>
                                    <div
                                        className={cx('bg-image', 'right-img')}
                                        style={{ backgroundImage: `url(${images.collection3})` }}
                                    ></div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
                <div className={cx('slider')} ref={sliderRef}>
                    <div className={cx('slider-wrap')}>
                        <Swiper
                            grabCursor={true}
                            pagination={{
                                el: '#custom-pagination',
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            slidesPerView={1}
                            breakpoints={{
                                740: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                            }}
                            className={cx('swiper')}
                        >
                            {products.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        initial={sliderAnimate ? { x: 300 } : { x: 0 }}
                                        animate={sliderAnimate ? { x: 0 } : { x: 300 }}
                                        transition={{
                                            delay: sliderAnimate ? index * 0.1 : 0,
                                            duration: sliderAnimate ? 0.7 : 0,
                                            ease: 'easeOut',
                                        }}
                                        className={cx('wrap-product')}
                                    >
                                        <motion.div
                                            onHoverStart={() => {
                                                setHoverInterval(
                                                    setInterval(() => {
                                                        setIndexHover((prev) => {
                                                            const newIndex = [...prev];
                                                            if (newIndex[index] === product.images.length - 1)
                                                                newIndex[index] = 0;
                                                            else newIndex[index]++;
                                                            return newIndex;
                                                        });
                                                    }, 800),
                                                );
                                            }}
                                            onHoverEnd={() => {
                                                clearInterval(hoverInterval);
                                                setHoverInterval(null);
                                                setIndexHover(initialIndex);
                                            }}
                                            style={{ backgroundImage: `url(${product.images[indexHover[index]]})` }}
                                            className={cx('bg-image')}
                                        ></motion.div>
                                        <div className={cx('info')}>
                                            <h3 className={cx('name')}>{product.name}</h3>
                                            <h4 className={cx('status')}>{product.status}</h4>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div id="custom-pagination" className={cx('custom-pagination')}></div>
                    </div>
                    <motion.a
                        initial={sliderAnimate ? { opacity: 0, scale: 1.3 } : false}
                        animate={sliderAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.3 }}
                        transition={{
                            delay: sliderAnimate ? 0.7 : 0,
                            duration: sliderAnimate ? 0.7 : 0,
                            ease: 'easeOut',
                        }}
                        className={cx('anchor-btn')}
                    >
                        <p>Shop Collection</p>
                        <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
                    </motion.a>
                </div>
            </section>
            <section className={cx('section4')} ref={stepsRef}>
                <div className={cx('header')}>
                    <motion.h1
                        variants={stepsVariants}
                        initial="start"
                        animate="end"
                        transition={{
                            delay: stepsAnimate ? -0.15 : 0,
                            duration: stepsAnimate ? 1 : 0,
                            ease: 'easeOut',
                        }}
                    >
                        3 Simple Steps
                    </motion.h1>
                    <motion.p
                        variants={stepsVariants}
                        initial="start"
                        animate="end"
                        transition={{
                            duration: stepsAnimate ? 1 : 0,
                            ease: 'easeOut',
                        }}
                    >
                        DESIGN FOR YOURSELF
                    </motion.p>
                </div>
                <div className={cx('images')}>
                    <motion.div
                        variants={stepsVariants}
                        initial="start"
                        animate="end"
                        transition={{
                            delay: stepsAnimate ? -0.1 : 0,
                            duration: stepsAnimate ? 1 : 0,
                            ease: 'easeOut',
                        }}
                        className={cx('bg-image', 'back-img')}
                        style={{ backgroundImage: `url(${images.steps1})` }}
                    ></motion.div>
                    <div className={cx('front-parallax')}>
                        <Parallax offset={40} yDirect={false}>
                            <div className={cx('image-wrap')}>
                                <Parallax offset={40} yDirect={false}>
                                    <div
                                        className={cx('bg-image')}
                                        style={{ backgroundImage: `url(${images.steps20})` }}
                                    ></div>
                                    <div
                                        className={cx('bg-image')}
                                        style={{ backgroundImage: `url(${stepsImage})` }}
                                    ></div>
                                </Parallax>
                            </div>
                        </Parallax>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <ul className={cx('steps')}>
                        <li>
                            <span>step 1</span>
                            <h2>Select Jewelry Type</h2>
                        </li>
                        <li>
                            <span>step 2</span>
                            <h2>Select Your Base</h2>
                        </li>
                        <li>
                            <span>step 3</span>
                            <h2>Add Danglers</h2>
                        </li>
                    </ul>
                    <motion.a
                        initial={stepsAnimate ? { opacity: 0, scale: 1.3 } : false}
                        animate={stepsAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.3 }}
                        transition={{
                            delay: stepsAnimate ? 0.9 : 0,
                            duration: stepsAnimate ? 0.7 : 0,
                            ease: 'easeOut',
                        }}
                        className={cx('anchor-btn')}
                    >
                        <p>Create Your Jewelry Now</p>
                        <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
                    </motion.a>
                </div>
            </section>
            <section className={cx('section5')} ref={designRef}>
                <div className={cx('left')}>
                    <div className={cx('design-wrap')}>
                        <motion.h4
                            variants={designVariants}
                            initial="start"
                            animate="end"
                            transition={{
                                duration: designAnimate ? 1 : 0,
                                ease: 'easeOut',
                            }}
                        >
                            BUILD YOUR <br />
                            OWN SETS
                        </motion.h4>
                        <motion.div
                            variants={designVariants}
                            initial="start"
                            animate="end"
                            transition={{
                                delay: designAnimate ? 0.15 : 0,
                                duration: designAnimate ? 1 : 0,
                                ease: 'easeOut',
                            }}
                            style={{ backgroundImage: `url(${images.design1})` }}
                            className={cx('bg-image')}
                        ></motion.div>
                        <motion.h1
                            variants={designVariants}
                            initial="start"
                            animate="end"
                            transition={{
                                delay: designAnimate ? 0.25 : 0,
                                duration: designAnimate ? 1 : 0,
                                ease: 'easeOut',
                            }}
                        >
                            Our finest jewelry
                        </motion.h1>
                        <motion.a
                            variants={designVariants}
                            initial="start"
                            animate="end"
                            transition={{
                                delay: designAnimate ? 0.35 : 0,
                                duration: designAnimate ? 1 : 0,
                                ease: 'easeOut',
                            }}
                            className={cx('anchor-btn')}
                        >
                            <p>Shop Luxury Collection</p>
                            <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
                        </motion.a>
                    </div>
                </div>
                <div className={cx('right')}>
                    <Parallax offset={140} yDirect={true}>
                        <motion.div
                            initial={designAnimate ? { opacity: 0.5, scale: 1.22 } : false}
                            animate={designAnimate ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 1.22 }}
                            transition={{ duration: designAnimate ? 0.8 : 0, ease: 'easeOut' }}
                            style={{ backgroundImage: `url(${images.design2})` }}
                            className={cx('bg-image')}
                        ></motion.div>
                    </Parallax>
                </div>
            </section>
            <section className={cx('section6')} ref={newsRef}>
                <div className={cx('header')}>
                    <motion.p
                        variants={newsVariants}
                        initial="start"
                        animate="end"
                        transition={{
                            duration: introAnimate ? 0.9 : 0,
                            ease: 'easeOut',
                        }}
                    >
                        MEDIA
                    </motion.p>
                    <motion.h1
                        initial={newsAnimate ? { opacity: 0, scale: 1.3 } : false}
                        animate={newsAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.3 }}
                        transition={{
                            delay: newsAnimate ? 0.5 : 0,
                            duration: newsAnimate ? 0.7 : 0,
                            ease: 'easeOut',
                        }}
                    >
                        Press
                    </motion.h1>
                </div>
                <div className={cx('slider')}>
                    <Swiper
                        grabCursor={true}
                        slidesPerView={1}
                        breakpoints={{
                            740: {
                                slidesPerView: 3,
                            },
                        }}
                        className={cx('swiper')}
                    >
                        {news.map((item, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={newsAnimate ? { x: 300 } : { x: 0 }}
                                    animate={newsAnimate ? { x: 0 } : { x: 300 }}
                                    transition={{
                                        delay: newsAnimate ? index * 0.1 : 0,
                                        duration: newsAnimate ? 0.7 : 0,
                                        ease: 'easeOut',
                                    }}
                                    className={cx('wrap-item')}
                                >
                                    <div
                                        className={cx('image', 'bg-image')}
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    ></div>
                                    <div className={cx('info')}>
                                        <div
                                            className={cx('name')}
                                            style={{ backgroundImage: `url(${item.name})` }}
                                        ></div>
                                        <h4 className={cx('description')}>{item.description}</h4>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <Footer
                background={images.footerBg}
                image1={images.intro1}
                image2={images.footer1}
                image3={images.intro2}
                strong={'Find out first'}
                paragraph={' about our launches, exclusive offers and private pop-ups.'}
                bigText={'Stay in the Loop'}
                anchorText={'Sign up to be a Limnia insider'}
            />
        </div>
    );
}

export default Home;
