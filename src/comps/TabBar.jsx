import { Bar, Menu } from '../styles/Comp.style';
import { useState } from 'react';

const tabMenus = [
	{ menu: '일기장', class: 'diary' },
	{ menu: '숙제', class: 'quest' },
	{ menu: '일정', class: 'schedule' }
];

function MenuItem({ menu, className, isSelect, onClick }) {
  return (
    <li className='h-full flex-1'>
      <Menu className={`${className} ${isSelect ? 'on' : ''}`} onClick={onClick}>
        {menu}
      </Menu>
    </li>
  );
} 

export default function TabBar() {
  const [activeMenu, setActiveMenu] = useState('diary');

	return (
		<Bar>
			<ul className='flex items-center'>
        {tabMenus.map((m, i) => (
          <MenuItem
            key={i}
            menu={m.menu}
            className={m.class}
            isSelect={activeMenu === m.class}
            onClick={() => setActiveMenu(m.class)}
          />
        ))}
			</ul>
		</Bar>
	);
}
