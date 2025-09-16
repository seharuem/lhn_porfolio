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

export const TodayWrap = styled.div.attrs({
	className: 'text-xl text-(--mainFt) text-left py-4 px-6'
})``;

export const NewBtn = styled.button.attrs({
	type: 'button',
	className:
		'w-max rounded-lg mt-8 py-2 px-4 self-center flex items-center gap-2'
})`
	border: 2px solid;

	&::after {
		content: '';
		width: 0.8rem;
		aspect-ratio: 1;
		background: url(/Plus.svg) center / contain no-repeat;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export const DiaryList = styled.form.attrs({
	className: 'p-6 pt-2 flex flex-col gap-4 w-full flex-1'
})`
	label {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	input {
		padding: 0.4rem 1rem;
	}
	.field {
		flex: 1;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		position: relative;
	}
	label:has(textarea) {
		flex: 1;
	}
	textarea {
		width: 100%;
		height: 100%;
		resize: none;
		border-radius: inherit;
		padding-inline: 0.4rem;
	}
`;

export const GameSelect = styled.button.attrs({
	type: 'button',
	className: 'rounded-full px-3 bg-(--main30)'
})`
	border: 2px solid var(--main);
	&:hover {
		background-color: var(--main50);
	}
`;

export const ImgPreview = styled.div.attrs({
	className: 'flex gap-4'
})`
	scrollbar-gutter: stable;
	width: 100%;
	height: 5rem;
	img {
		height: 4rem;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 12px;
	}
	overflow-x: auto;
`;

export const ImgSelect = styled.label.attrs({
	className: 'size-6 cursor-pointer'
})`
	background: url(/image.svg) center / contain no-repeat;
	&:hover {
		opacity: 0.8;
	}
	input {
		display: none;
	}
`;
