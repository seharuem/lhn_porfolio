import { Wrap } from '../styles/Comp.style';
import Header from '../comps/Header';
import TabBar from '../comps/TabBar';

export default function Schedule() {
	return (
		<Wrap>
			<Header title='일정' />
			준비중입니다! :)

      <TabBar page={'schedule'} />
		</Wrap>
	);
}
