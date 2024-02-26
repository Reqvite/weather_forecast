import './Timer.css'

import { classNames } from '@/shared/lib/helpers';
import { useCountdownTimer } from '@/shared/lib/hooks';

import { Text } from '../Text/Text';

type TimerProps = {
    startDate: string;
    classnames: string;
};

export const Timer: React.FC<TimerProps> = ({ startDate, classnames }) => {
    const { timeLeft, isTimerEnd } = useCountdownTimer(new Date(startDate))
    
    return (
        <div className={classNames('timer', {}, [classnames])}>     
            <Text size='medium' className={classNames('timer__start', {isTimerEnd})}>Trip has already started</Text>
            <div className='timer__content '>
                <div  className='timer__box'>
                    <Text size='medium' bold>{timeLeft.days}</Text>
                    <Text color='secondary'>Days</Text>
                </div>
                <div className='timer__box'>
                    <Text size='medium' bold>{timeLeft.hours}</Text>
                    <Text color='secondary'>Hours</Text>
                </div>
                <div className='timer__box'>
                    <Text  size='medium' bold>{timeLeft.minutes}</Text>
                    <Text color='secondary'>Minutes</Text>
                </div>
                <div className='timer__box'>
                    <Text  size='medium' bold>{timeLeft.seconds}</Text>
                    <Text color='secondary'>Seconds</Text>
                </div>  
            </div>    
        </div>
    );
};

