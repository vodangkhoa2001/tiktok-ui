import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Image from '../Image';
import { TickIcon } from '../Icons';
import styles from './ListAccount.module.scss';
import PopperWrapper from '~/components/Popper/Wrapper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPrivew = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive placement="bottom" delay={[700, 700]} render={renderPrivew}>
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/289b8dac9d1f3055d213486f60fdcd39~c5_100x100.jpeg?x-expires=1679202000&x-signature=R5W0IGYkYZGPEqAdJUsc2CcJ2ck%3D"
                        alt=""
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('nickname')}>
                            <span>
                                <strong>lemonick56</strong>
                            </span>
                            <TickIcon className={cx('check')} />
                        </h4>
                        <span className={cx('name')}>Lemonick</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {
//     data: PropTypes.object.isRequired,
// };
export default AccountItem;
// <div className={cx('account-item')}>
//     <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
//     <div className={cx('info')}>
//         <h4 className={cx('name')}>
//             <span>{data.full_name}</span>
//             {data.tick && <TickIcon />}
//         </h4>
//         <span className={cx('username')}>{data.nickname}</span>
//     </div>
// </div>
