import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// import { useEffect,useState } from 'react';
import AccountItem from './AccountItem';

import styles from './ListAccount.module.scss';

const cx = classNames.bind(styles);

function ListAccount({ label, textBtn, tippy = false }) {
    // const [accountValue, setAccountValue] = useState([]);
    // useEffect(()=>{
    //     const fetchApi = async () =>  {
    //         const result = await
    //     }
    // },[accountValue])

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <button className={cx('more-btn')}>
                <p className={cx('more-text')}>{textBtn}</p>
            </button>
        </div>
    );
}
ListAccount.propTypes = {
    label: PropTypes.string.isRequired,
    textBtn: PropTypes.string,
};
export default ListAccount;
