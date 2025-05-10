import React from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { UpperBarMenu, UpperBarMenuItem } from "../styledComponents";

const UpperMenu = ({ menus, menukey, handleMenuHover, handleList, setOpenDrawer, openDrawer }) => {
	// Function to handle mouse entering a menu item
	const handleMouseEnter = (menu, event) => {
		if (menu.hasSubMenu) {
			// If menu has submenu, show it and pass the menu element
			handleMenuHover(menu.key, event.currentTarget);
		} else {
			// If menu doesn't have submenu, close any open menu
			setOpenDrawer(false);
			handleList(null);
		}
	};

	return (
		<UpperBarMenu className="menu-dropdown">
			{Object.entries(menus).map(([key, menu]) => (
				<UpperBarMenuItem key={key} className="upper-menu-item" onMouseEnter={(event) => handleMouseEnter(menu, event)}>
					<div>{menu.name}</div>
					{menukey === menu.key ? (
						<MdKeyboardArrowUp style={{ visibility: menu.hasSubMenu ? "visible" : "hidden" }} />
					) : (
						<MdKeyboardArrowDown style={{ height: 11, visibility: menu.hasSubMenu ? "visible" : "hidden" }} />
					)}
				</UpperBarMenuItem>
			))}
		</UpperBarMenu>
	);
};

export default UpperMenu;
