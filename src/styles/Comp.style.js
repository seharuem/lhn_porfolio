import styled from 'styled-components';

export const Wrap = styled.div.attrs({
	className: 'flex flex-col h-screen relative'
})``;

export const Head = styled.header.attrs({
	className: 'flex items-center justify-center py-6 relative'
})``;

export const Title = styled.h1.attrs({
	className: 'text-2xl pointer-events-none'
})``;

export const SetBtn = styled.button.attrs({
	className: 'size-6 absolute right-6'
})`
	background: url(/cog.svg) center / contain no-repeat;
	transition: rotate 0.4s ease-out;

	&:hover {
		rotate: 90deg;
	}
`;

export const Bar = styled.nav.attrs({
	className: 'w-full mt-auto'
})`
	border-top: 1px solid white;
`;

export const Menu = styled.button.attrs({
	type: 'button',
	className:
		'w-full py-4 text-white text-lg flex flex-col items-center justify-center gap-1 opacity-50'
})`
	&.on {
		opacity: 1;
	}
	&:hover:not(.on) {
		opacity: 0.8;
	}
	&::before {
		content: '';
		aspect-ratio: 1;
		width: 1.8rem;
		background: center / contain no-repeat;
	}
	&.diary.on::before {
		background-image: url(/diary.svg);
	}
  &.diary::before {
    background-image: url(/diary_off.svg);
  }
	&.quest.on::before {
		background-image: url(/quest.svg);
	}
	&.quest::before {
		background-image: url(/quest_off.svg);
	}
	&.schedule.on::before {
		background-image: url(/schedule.svg);
	}
	&.schedule::before {
		background-image: url(/schedule_off.svg);
	}
`;
