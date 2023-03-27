import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
  useProSidebar,
  MenuItemStyles
} from "react-pro-sidebar";
import { MdCardTravel, MdOutlineTravelExplore, MdAccountCircle } from "react-icons/md";
import { AiOutlineInfoCircle, AiOutlineArrowRight } from "react-icons/ai";
import { GiFootTrip } from "react-icons/gi"
import { IoLogOutSharp } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";
import  small_logo  from "public/small_logo.png";
import Image from "next/image";

export const themes = {
  light: {
    sidebar: {
      backgroundColor: '#F19C79',
      color: '#A44A3F',
    },
    menu: {
      menuContent: '#CBDFBD',
      icon: '#D4E09B',
      hover: {
        backgroundColor: '#CBDFBD',
        color: '#000000',
      },
      disabled: {
        color: '#9fb6cf',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#1B2D2A',
      color: '#414066',
    },
    menu: {
      menuContent: '#82816D',
      icon: '#CEFF1A',
      hover: {
        backgroundColor: '#414066',
        color: '#AAA95A',
      },
      disabled: {
        color: '#ffffff',
      },
    },
  },
};

export function BarOnSide() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [theme, setTheme] = useState<Theme>("light");
  type Theme = 'light' | 'dark';
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor,  0.8 ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };
  const handleCentering = () => {
    return collapsed ? "center"  : "space-around";
  }

  
  return (
    <Sidebar backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor,  0.9 )} width="20vw">
        <div style={{ display: "flex", justifyContent: handleCentering(), alignItems: "center", height: "50px", fontSize: "25px" }}>
            <VscThreeBars onClick={() => collapseSidebar()}/>
            {!collapsed && <Image src={small_logo} alt="company logo" height={50}/>}
        </div> 
      <Menu menuItemStyles={menuItemStyles}>
        <SubMenu style={{fontSize: "20px"}}  label="Trips" icon= {<GiFootTrip />}>
          <MenuItem style={{fontSize: "20px"}} icon={<MdCardTravel />}>Your Routes</MenuItem>
          <MenuItem style={{fontSize: "20px"}} icon={<MdOutlineTravelExplore />}>Find a Trip</MenuItem>
        </SubMenu>
        <SubMenu style={{fontSize: "20px"}} label="Account" icon= {<MdAccountCircle />}>
          <MenuItem style={{fontSize: "20px"}} icon={<AiOutlineInfoCircle />}>Your Info</MenuItem>
          <MenuItem style={{fontSize: "20px"}} icon={<IoLogOutSharp />}>Logout</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
