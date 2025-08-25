import { Head, Title, SetBtn } from '../styles/Comp.style';

export default function Header({ title }) {
	return (
		<Head>
			<Title>{title}</Title>
			<SetBtn />
		</Head>
	);
}
