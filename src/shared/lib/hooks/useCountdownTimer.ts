import { useCallback, useEffect, useState } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const useCountdownTimer = (targetDate: Date): {timeLeft: TimeLeft, isTimerEnd: boolean} => {
    const calculateTimeLeft = useCallback((): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    },[targetDate]);

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const [isTimerEnd, setIsTimerEnd] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft((prevTimeLeft) => {
                if (
                    prevTimeLeft.days === 0 &&
          prevTimeLeft.hours === 0 &&
          prevTimeLeft.minutes === 0 &&
          prevTimeLeft.seconds === 0
                ) {
                    setIsTimerEnd(true)
                    return prevTimeLeft;
                }

                return calculateTimeLeft();
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [calculateTimeLeft, timeLeft]);

    return {timeLeft, isTimerEnd}
};