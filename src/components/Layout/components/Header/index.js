import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { GetCoinIcon, InboxIcon, LangagueIcon, MessageIcon, SettingIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <LangagueIcon />,
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
    const currentUser = true;


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
            icon: <GetCoinIcon />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <SettingIcon />,
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
                <Search />
                <div className={cx('actions')}>
                    {
                        currentUser ?
                            (
                                <>
                                    {/* <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudArrowUp} />
                                    </button> */}
                                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                                    <Tippy delay={[0, 50]} content='Message' placement='bottom'>
                                        <button className={cx('action-btn')}>
                                            <MessageIcon />
                                        </button>
                                    </Tippy>
                                    <Tippy delay={[0, 50]} content='Inbox' placement='bottom'>
                                        <button className={cx('action-btn')}>
                                            <InboxIcon />
                                            <span className={cx('barge')}>15</span>
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
                                <Image
                                    className={cx('user-avatar')}
                                    src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b09a065e880e7f66256b32b984039efb.jpeg?x-expires=1678856400&x-signature=0zIgdha0MxsS6OK6hQQPf9evhB4%3D'
                                    alt='Nguyen Van A'
                                // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
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