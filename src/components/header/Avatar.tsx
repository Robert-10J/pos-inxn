import { createElement, useState } from 'react';
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { PROFILE_MENU_ITEMS } from '../../constants';

 
export default function UserAvatar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center rounded-full p-0'
        >
          <Avatar
            variant='circular'
            size='xl'
            alt='tania andrew'
            withBorder={true}
            color='blue-gray'
            className=' p-0.5'
            src='https://docs.material-tailwind.com/img/face-2.jpg'
          />
        </Button>
      </MenuHandler>
      <MenuList className='p-1'>
        {PROFILE_MENU_ITEMS.map(({ label, icon }, key) => {
          const isLastItem = key === PROFILE_MENU_ITEMS.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                  : ''
              }`}
            >
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 2,
              })}
              <Typography
                as='span'
                variant='small'
                className='font-normal'
                color={isLastItem ? 'red' : 'inherit'}
              >
                {label}
              </Typography>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}