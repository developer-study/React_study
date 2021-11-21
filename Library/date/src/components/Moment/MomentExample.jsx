import React, { useRef, useState } from 'react'
import moment from 'moment-timezone';
import "moment/locale/ko"


export default function MomentExample() {
    const dayRef = useRef(null);
    const [day, setDay] = useState('');

    const handleDayChange = (e) => {
        setDay(moment(e.target.value, "YYYY-MM-DD").format("dddd"))
    }

    const date = moment();
    const newDate = date.add(1, 'week');
    const cloneNewDate = newDate.clone().add(1, 'week');

    return (
        <div style={{textAlign:'center'}}>
            <h1>Moment</h1>
            <div>Immutable Check</div>
            <div>
                {date.format()}
                <br />
                {newDate.format()}
                <br />
                {cloneNewDate.format()}
                <br />
                </div>
            <br />
            <div>Summer Time (New York)</div>
            <div>
                2018년 3월 10일 13시 + 1일 :&nbsp;
                {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, 'day').format()}
            </div>
            <div>
                2018년 3월 10일 13시 + 24시간 :&nbsp;
                {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, 'hour').format()}
            </div>
            <br />
            <div>Leaf Year (Korea)</div>
            <div>
                2017년 1월 1일 - 1년 :&nbsp;
                {moment("2017-01-01").subtract(1, 'year').format()}
            </div>
            <div>
                2017년 1월 1일 - 365일 :&nbsp;
                {moment("2017-01-01").subtract(365, 'day').format()}
            </div>
            <br />
            <div>한국어로 표기(11-01-2021 {'>'} 2021년 11월 01일)</div>
            <div>{moment("11-21-2021").format("YYYY년 MM월 DD일")}</div>
            <br />
            <div>날짜 {'>'} 요일</div>
            <div>
                <input type="date" ref={dayRef} onChange={handleDayChange} />
                <div>요일 확인</div>
                <div>{day}</div>
            </div>
            <div>두 날짜 비교</div>
            <div>2021-11-01 03:00 : 2021-11-02 04:00</div>
            <div>{moment("2021-11-01 03:00").diff(moment("2021-11-02 04:00"), "hour")}시간</div>
        </div>
    )
}
