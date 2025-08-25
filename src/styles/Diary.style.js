import styled from 'styled-components';

export const MonthBtn = styled.button.attrs({
	type: 'button',
	className: 'ml-6 w-max flex items-center justify-center gap-2 text-xl'
})`
	&::before {
		content: '';
		width: 1.2rem;
		aspect-ratio: 1;
		background: url(/calendar.svg) center / contain no-repeat;
	}
	&:hover {
		opacity: 0.8;
	}
`;

export const WeekWrap = styled.div.attrs({
	className: 'flex items-center justify-between py-2 px-6'
})`
	border-bottom: 2px solid var(--pink);
`;

export const DateWrap = styled.button.attrs({
	type: 'button',
	className: 'flex flex-col items-center gap-1 rounded-full w-12 py-4'
})`
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	&:is(:first-child, :last-child) {
		color: var(--pink);
	}
	&:is(:first-child, :last-child).select:not(.today) {
		color: var(--pink);
		background-color: var(--pink30);
	}
	& span:last-child {
		font-size: 1.2rem;
	}
	&.today {
		color: var(--main);
	}
	&.select {
		background-color: var(--main30);
	}
`;
