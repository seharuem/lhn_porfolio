import styled from 'styled-components';

export const Box = styled.div.attrs({
	className:
		'w-100 h-120 p-10 rounded-[20px] border-solid border-3 border-(--main)'
})``;

export const Label = styled.label.attrs({
	className:
		'flex gap-6 items-center justify-center text-2xl text-(--mainFt)'
})`
	input:not([type='checkbox']) {
		width: 100%;
		border: 3px solid var(--main);
		border-radius: 20px;
		padding-inline: 12px;
	}

	&:has(input[type='checkbox']) {
		font-size: 1.2rem;
    cursor: pointer;
    gap: 16px;
	}

	input[type='checkbox'] {
		width: 24px;
		height: 24px;
		appearance: none;
		border: 2px solid var(--main);
		border-radius: 3px;
	}

	input[type='checkbox']:checked {
		background: url(/check.svg) center / contain no-repeat;
	}

	input::placeholder {
		font-size: 1rem;
	}
`;
