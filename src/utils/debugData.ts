import { 
    isEnvBrowser 
} from 'utils/misc';

interface DebugEvent<T = any> {
    action: string;
    data: T;
}

export const debugData = <P>(events: DebugEvent<P>[], timer = 1000): void => {
    if (process.env.NODE_ENV === 'development' && isEnvBrowser()) {
        for (const event of events) {
            setTimeout(() => {
                window.dispatchEvent(
                    new MessageEvent('message', {
                        data: {
                            action: event.action,
                            data: event.data,
                        },
                    })
                );
            }, timer);
        }
    }
};