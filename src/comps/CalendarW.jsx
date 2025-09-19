import { useState } from 'react';
import { MonthBtn, WeekWrap, DateWrap, TodayWrap } from '../styles/Diary.style';

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

export default function CalendarW() {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();

	const todayDate = today.getDate();
	const todayDay = today.getDay();

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

	// 오늘이 무슨 요일인지 바로 findIndex로 찾기
	const [select, setSelect] = useState(
		weekDates.findIndex(
			(d) => d.date === todayDate && d.month === month && d.year === year
		)
	);

	return (
		<>
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

      <TodayWrap>{year}년 {weekDates[select].month + 1}월 {weekDates[select].date}일 {weekDates[select].week}요일</TodayWrap>
		</>
	);
}
