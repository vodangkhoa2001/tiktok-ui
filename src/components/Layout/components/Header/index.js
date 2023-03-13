import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faMagnifyingGlass, faCircleXmark, faPlus, faEllipsisVertical, faGlobe, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboad shortcuts',
    }
]
function Header() {
    const [searchResult, setSearchResult] = useState([])
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => setSearchResult([]), 0)
    }, []);
    // Handle logic
    const handelMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case ' language':
                // handle 
                break
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt='Tiktok'></img>
                <div>
                    <HeadlessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder='Search account and videos' spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </HeadlessTippy>
                </div>
                <div className={cx('actions')}>
                    {
                        currentUser ?
                            (
                                <>
                                    {/* <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudArrowUp} />
                                    </button> */}
                                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                                    <Tippy delay={[0, 300]} content='Message' placement='bottom'>
                                        <button className={cx('action-btn')}>
                                            <img className={cx('message-icon')} src={images.message} alt='' />
                                        </button>
                                    </Tippy>
                                </>
                            ) :
                            (
                                <>
                                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                                    <Button primary>Log in</Button>
                                </>
                            )

                    }
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handelMenuChange}
                    >
                        {
                            currentUser ? (
                                <img className={cx('user-avatar')} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b09a065e880e7f66256b32b984039efb.jpeg?x-expires=1678856400&x-signature=0zIgdha0MxsS6OK6hQQPf9evhB4%3D' alt='Nguyen Van A' />
                            ) :
                                (
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button>
                                )
                        }
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;