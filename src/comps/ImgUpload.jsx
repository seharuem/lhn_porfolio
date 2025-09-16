import { useState, useEffect, use } from 'react';
import { ImgPreview, ImgSelect } from '../styles/Diary.style';

export default function ImgUpload() {
	const [imgUrls, setImgUrls] = useState([]);

	useEffect(() => {
		return () => {
			imgUrls.forEach((url) => URL.revokeObjectURL(url));
		};
	}, [imgUrls]);

	const selectImg = (e) => {
		const files = e.target.files;
		if (files.length === 0) {
			setImgUrls([]);
			return;
		}
		imgUrls.forEach((url) => URL.revokeObjectURL(url));
		const newUrls = Array.from(files).map((file) => URL.createObjectURL(file));
		setImgUrls(newUrls);
	};

	return (
		<div className='flex justify-between items-end gap-4'>
			<ImgPreview>
				{imgUrls.map((url, index) => (
					<img key={index} src={url} alt={`Selected ${index}`} />
				))}
			</ImgPreview>
			<ImgSelect>
				<input
					type='file'
					accept='image/*'
					name='file'
					multiple
					onChange={selectImg}
				/>
			</ImgSelect>
		</div>
	);
}
