import classNames from 'classnames/bind';
import { FiMusic } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { IoChatboxEllipses } from 'react-icons/io5';
import { RiShareForwardFill } from 'react-icons/ri';

import { TickIcon } from '../Icons';
import Image from '../Image';
import styles from './Video.module.scss';
import Button from '../Button';
import { Videos } from '~/data';

const cx = classNames.bind(styles);

function FollowingVideo() {
    // eslint-disable-next-line array-callback-return
    return Videos.map((video) => {
        if (video.following) {
            return (
                <div key={video.id} className={cx('wrapper')}>
                    <div className={cx('avatar')}>
                        {/* Avatar user upload video */}
                        <Image className={cx('avatar')} src={video.avatar} />
                    </div>
                    {/* Video container */}
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            <div className={cx('title')}>
                                <h3 className={cx('nickname')}>{video.nickname}</h3>
                                <TickIcon className={cx('tick')} />
                                <h4 className={cx('name')}>{video.name}</h4>
                            </div>
                            <div className={cx('description')}>
                                <span className={cx('text')}>{video.title}</span>
                            </div>
                            {/* hastag */}

                            {video.tags.map((tag) => {
                                return (
                                    <a href="tag" key={tag}>
                                        <strong>#{tag}</strong>
                                    </a>
                                );
                            })}

                            <div className={cx('music')}>
                                <FiMusic size={16} className={cx('icon-music')} />
                                <a href="music">{video.music}</a>
                            </div>
                        </div>
                        <div className={cx('video-container')}>
                            <video className={cx('video')} autoPlay playsInline controls loop src={video.src_video} />

                            <div className={cx('actions')}>
                                <div className={cx('heart-btn', 'div-btn')}>
                                    <Button circle>
                                        <AiFillHeart />
                                    </Button>
                                    <span className={cx('number')}>{video.like}</span>
                                </div>
                                <div className={cx('comment-btn', 'div-btn')}>
                                    <Button circle>
                                        <IoChatboxEllipses />
                                    </Button>
                                    <span className={cx('number')}>{video.comment}</span>
                                </div>
                                <div className={cx('share-btn', 'div-btn')}>
                                    <Button circle>
                                        <RiShareForwardFill />
                                    </Button>
                                    <span className={cx('number')}>{video.share}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });
}

export default FollowingVideo;
