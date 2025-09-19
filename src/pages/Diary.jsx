import { useState } from 'react';
import Header from '../comps/Header';
import TabBar from '../comps/TabBar';
import CalendarW from '../comps/CalendarW';
import ImgUpload from '../comps/ImgUpload';
import { Wrap } from '../styles/Comp.style';
import { NewBtn, DiaryList, GameSelect } from '../styles/Diary.style';

export default function Diary() {
	const [newDiary, setNewDiary] = useState(false);

	return (
		<Wrap>
			<Header title='일기장' />

			<CalendarW />

			{!newDiary && (
				<NewBtn onClick={() => setNewDiary(true)}>새 일기 작성</NewBtn>
			)}

			{newDiary && (
				<DiaryList>
					<label>
						게임 <GameSelect>선택</GameSelect>
					</label>
					<label>
						제목{' '}
						<input className='field' type='text' placeholder='입력해주세요.' />
					</label>
					<div className='field flex flex-col gap-4 p-4'>
						<label>
							<textarea
								name=''
								id=''
								placeholder='내용을 입력해주세요.'
							></textarea>
						</label>
						<ImgUpload />
					</div>
				</DiaryList>
			)}

			<TabBar page={'diary'} />
		</Wrap>
	);
}
