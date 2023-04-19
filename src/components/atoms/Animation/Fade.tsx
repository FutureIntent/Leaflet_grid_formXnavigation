import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { useSpring, a } from 'react-spring';

interface FadeProps {
    children?: ReactElement;
    show: boolean;
    onEnter?: () => void;
    onExited?: () => void;
}

const Fade = (props: FadeProps, ref: ForwardedRef<any>) => {
    const { show, children, onEnter, onExited, ...rest } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: show ? 1 : 0 },
        onStart: () => {
            if (show && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!show && onExited) {
                onExited();
            }
        },
    });

    return (
        <a.div ref={ref} style={style} {...rest}>
            {children}
        </a.div>
    );
};

export default forwardRef(Fade);
