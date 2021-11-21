import React, { useRef, useState } from 'react'
import { add, format, sub, differenceInHours, toDate } from 'date-fns';
import { format as timeZoneFormat } from 'date-fns-tz';
import addWeeks from 'date-fns/addWeeks';
import { ko } from 'date-fns/locale';

export default function DateFnsExample() {
    const dayRef = useRef(null);
    const [day, setDay] = useState('');

    const handleDayChange = (e) => {
        setDay(format(new Date(e.target.value), 'EEEE', { locale: ko }))
    }

    const date = new Date();
    const newDate = add(date, {weeks: 1});
    const newDate2 = addWeeks(newDate, 1);

    return (
        <div style={{textAlign:'center'}}>
            <h1>Date-fns</h1>
            <div>Immutable Check</div>
            <div>
                {format(date, 'yyyy-MM-dd')}
                <br />
                {format(newDate, 'yyyy-MM-dd')}
                <br />
                {format(newDate2, 'yyyy-MM-dd')}
                <br />
                </div>
            <br />
            <div>Summer Time (New York)</div>
            <div>
                {timeZoneFormat(
                    new Date('2018-03-10 13:00:00'), 
                    'yyyy-MM-dd HH:mm:ssXXX', 
                    { timeZone: "America/New_York" }
                )}
            </div>
            <div>
                2018년 3월 10일 13시 + 1일 :&nbsp;
                {timeZoneFormat(
                    add(toDate(new Date('2018-03-10 13:00:00'), { timeZone: "America/New_York" }), { days: 1 }), 
                    'yyyy-MM-dd HH:mm:ssXXX', 
                    { timeZone: "America/New_York" }
                )}
            </div>
            <div>
                2018년 3월 10일 13시 + 24시간 :&nbsp;
                {timeZoneFormat(
                    add(toDate(new Date('2018-03-10 13:00:00'), { timeZone: "America/New_York" }), { hours: 24 }), 
                    'yyyy-MM-dd HH:mm:ssXXX', 
                    { timeZone: "America/New_York" }
                )}
            </div>
            <br />
            <div>Leaf Year (Korea)</div>
            <div>
                2017년 1월 1일 - 1년 :&nbsp;
                {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
            </div>
            <div>
                2017년 1월 1일 - 365일 :&nbsp;
                {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
            </div>
            <br />
            <div>한국어로 표기(11-01-2021 {'>'} 2021년 11월 01일)</div>
            <div>{format(new Date("11-21-2021"), "yyyy년 MM월 dd일")}</div>
            <br />
            <div>날짜 {'>'} 요일</div>
            <div>
                <input type="date" ref={dayRef} onChange={handleDayChange} />
                <div>요일 확인</div>
                <div>{day}</div>
            </div>
            <br/>
            <div>두 날짜 비교</div>
            <div>2021-11-01 03:00 : 2021-11-02 04:00</div>
            <div>{differenceInHours(new Date("2021-11-01 03:00"), new Date("2021-11-02 04:00"))}시간</div>
        </div>
    )
}
