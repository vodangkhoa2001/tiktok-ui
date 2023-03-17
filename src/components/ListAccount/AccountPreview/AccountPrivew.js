import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { TickIcon } from '~/components/Icons';
import Image from '~/components/Image';

import styles from './AccountPrivew.module.scss';

const cx = classNames.bind(styles);
function AccountPrivew() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/289b8dac9d1f3055d213486f60fdcd39~c5_100x100.jpeg?x-expires=1679202000&x-signature=R5W0IGYkYZGPEqAdJUsc2CcJ2ck%3D"
                    alt=""
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <h4>
                    <span className={cx('nickname')}>lemonick56</span>
                    <TickIcon className={cx('check')} />
                </h4>
                <span className={cx('name')}>Lemonnick</span>
            </div>
            <div className={cx('footer')}>
                <div className={cx('followers')}>
                    <span className={cx('number')}>
                        <strong>7.9M</strong>
                    </span>
                    <span className={cx('label')}>Followers</span>
                </div>
                <div className={cx('likes')}>
                    <span className={cx('number')}>
                        <strong>7.9M</strong>
                    </span>
                    <span className={cx('label')}>Likes</span>
                </div>
            </div>
        </div>
    );
}

export default AccountPrivew;
