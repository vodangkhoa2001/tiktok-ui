import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';
import { FiMusic } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { IoChatboxEllipses } from 'react-icons/io5';
import { RiShareForwardFill } from 'react-icons/ri';

import { TickIcon } from '../Icons';
import Image from '../Image';
import styles from './Video.module.scss';
import Button from '../Button';
import { Videos } from '~/data';
import Video from './Video';
import { debounce } from '@mui/material';
import config from '~/config';

const cx = classNames.bind(styles);

function FollowingVideo() {
    const videoRef = useRef();
    const [play, setPlay] = useState(true);

    const playVideo = () => {
        videoRef.current.play();
        setPlay(true);
    };
    const pauseVideo = () => {
        videoRef.current.pause();
        setPlay(false);
    };
    useEffect(() => {
        play ? playVideo() : pauseVideo();
    }, [play]);

    useEffect(() => {
        window.addEventListener('scroll', debounce(handleScroll, 200));

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleScroll = (e) => {
        if (play) {
            pauseVideo();
        }
    };
    // eslint-disable-next-line array-callback-return
    return Videos.map((video) => {
        if (!video.following) {
            return (
                <div key={video.id} className={cx('wrapper', 'y', 'mandatory')}>
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
                                    <a href={config.routes.tag} key={tag}>
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
                            <div className={cx('div-video')}>
                                <canvas width="56.25" height="100" className={cx('canvas')}></canvas>
                                <div className={cx('video-player')}>
                                    <Video ref={videoRef} src={video.src_video} className={cx('video')} />
                                </div>
                                {/* <div className={cx('video-controls')}>
                                    <button className={cx('play-btn')} onClick={() => setPlay(!play)}>
                                        {play ? <IoMdPause /> : <IoMdPlay />}
                                    </button>
                                    <div className={cx('volume-container')}>
                                        <div className={cx('volume-control-container')}>
                                            <div className={cx('volume-control-process')}></div>
                                            <div className={cx('volume-control-circle')}></div>
                                            <div className={cx('volume-control-bar')}></div>
                                        </div>
                                        <button className={cx('mute-btn')} onClick={() => setMute(!mute)}>
                                            {mute ? <VscMute /> : <VscUnmute />}
                                        </button>
                                    </div>
                                </div> */}
                            </div>

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
                    {video.following ? null : (
                        <Button outline className={cx('follow-btn')}>
                            Follow
                        </Button>
                    )}
                </div>
            );
        }
    });
}

export default FollowingVideo;
