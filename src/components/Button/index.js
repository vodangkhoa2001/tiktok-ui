import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import style from './Button.module.scss';

const cx = classNames.bind(style)

function Button({ to, href, primary = false, outline = false, text = false, rouneded = false, disabled = false, small = false, large = false, children, leftIcon, rightIcon, className, onClick, ...passProps }) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps,
    }
    // Remove event listener when button is disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        leftIcon,
        rightIcon,
        primary,
        outline,
        text,
        rouneded,
        disabled,
        small,
        large,
    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;