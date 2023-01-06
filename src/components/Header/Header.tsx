import React from "react";
import {
  HeaderContent,
  List,
  ListElement,
  Logotype,
  MenuWrapper,
} from "../../style/styles";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <HeaderContent>
      <MenuWrapper>
        <Logotype src={logo} alt="" />
        <div>
          <List>
            <ListElement>Проекты</ListElement>
            <ListElement>Заказать сайт</ListElement>
            <ListElement>Связь</ListElement>
          </List>
        </div>
      </MenuWrapper>
    </HeaderContent>
  );
}

export default Header;
