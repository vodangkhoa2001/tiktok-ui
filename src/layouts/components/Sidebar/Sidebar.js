import classNames from 'classnames/bind';
import config from '~/config';

import { GroupIcon, HouseIcon, VideoIcon, HouseIconActive, GroupIconActive, VideoIconActive } from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HouseIcon />}
                    activeIcon={<HouseIconActive />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<GroupIcon />}
                    activeIcon={<GroupIconActive />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<VideoIcon />} activeIcon={<VideoIconActive />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
