import styled from "styled-components";

export const Wrap = styled.div.attrs({
  className: 'flex flex-col h-screen'
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
