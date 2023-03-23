import classNames from 'classnames';
import { forwardRef, useRef, useImperativeHandle } from 'react';

import styles from './Video.module.scss';

function Video(props, ref, className) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));

    // eslint-disable-next-line array-callback-return
    return (
        <video
            className={classNames(styles.video, className)}
            ref={videoRef}
            autoPlay
            controls
            muted
            playsInline
            loop
            src={props.src}
        />
    );
}

export default forwardRef(Video);
