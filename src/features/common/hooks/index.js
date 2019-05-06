import {useEffect} from "react";

export function useOnClickOutside(ref, handler, except) {
    useEffect(
        () => {
            const listener = event => {
                if (!ref.current || ref.current.contains(event.target) || except(event))
                    return;

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        }, [ref, handler, except]);
}