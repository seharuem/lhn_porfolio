import { Wrap } from '../styles/Comp.style';
import Header from '../comps/Header';
import TabBar from '../comps/TabBar';

export default function Quest() {
	return (
		<Wrap>
			<Header title='숙제' />
			준비중입니다! :)

      <TabBar page={'quest'} />
		</Wrap>
	);
}
