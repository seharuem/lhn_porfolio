import Logo from '../assets/img/logo.svg?react';
import { Box, Label } from '../styles/Login.style.js';

const Form = [
  { label: 'ID', type: 'text', text: '아이디를 입력하세요.' },
  { label: 'PW', type: 'password', text: '비밀번호를 입력하세요.' },
  { label: '자동 로그인', type: 'checkbox', text: '' },
]

export default function Login() {
	return (
		<div className="flex flex-col items-center gap-20">
			<Logo />
      <Box>
        <form>
          <div className='flex flex-col gap-8'>
            {Form.map((label) => (
              <Label key={label}>
                {label.label}
                <input type={label.type} placeholder={label.text} />
              </Label>
            ))}
          </div>
        </form>
      </Box>
		</div>
	);
}
