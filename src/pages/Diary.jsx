import { useState } from 'react';
import { Wrap } from '../styles/Comp.style';
import { MonthBtn, WeekWrap, DateWrap } from '../styles/Diary.style';
import Header from '../comps/Header';

const week = ['일', '월', '화', '수', '목', '금', '토'];

function WeekDay({ week, date, isToday, isSelected, onClick }) {
	return (
		<DateWrap
			className={`${isToday ? 'today' : ''} 
      ${isSelected ? 'select' : ''}`}
			onClick={onClick}
		>
			<span>{week}</span>
			<span>{date}</span>
		</DateWrap>
	);
}

export default function Diary() {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();

	const todayDate = today.getDate();
	const todayDay = today.getDay();

	let startDate = new Date(year, month, todayDate - todayDay);

	const startDateValue = todayDate - todayDay;

	const weekDates = Array.from({ length: 7 }, (_, i) => {
		const date = new Date(year, month, startDateValue + i);
		return {
			week: week[i],
			date: date.getDate(),
			month: date.getMonth(),
			year: date.getFullYear()
		};
	});

	// 오늘이 주간 배열 어디에 있는지 바로 findIndex로 찾기
	const [select, setSelect] = useState(
		weekDates.findIndex(
			(d) => d.date === todayDate && d.month === month && d.year === year
		)
	);

	return (
		<Wrap>
			<Header title='일기장' />

			<MonthBtn>{month + 1}월</MonthBtn>

			<WeekWrap>
				{weekDates.map((d, idx) => (
          <WeekDay
            key={idx}
            week={d.week}
            date={d.date}
            isToday={
              d.date === todayDate && d.month === month && d.year === year
            }
            isSelected={select === idx}
            onClick={() => setSelect(idx)}
          />
        ))}
			</WeekWrap>
		</Wrap>
	);
}
