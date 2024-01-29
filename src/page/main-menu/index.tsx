import styled from "styled-components";

// 경로
import MENU_LIST from "./menu";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuBox = styled.div`
  padding: 15px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const MenuItem = styled.li`
  list-style: none;
`;

const ItemLabel = styled.span`
  font-size: 15px;
  line-height: 15px;
`;

const MainMenu = () => {
  return (
    <Container>
      <MenuBox>
        <Menu>
          {MENU_LIST.map((item) => (
            <MenuItem>
              <Link to={`${item.link}`}>
                <ItemLabel>{item.label}</ItemLabel>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </MenuBox>
    </Container>
  );
};

export default MainMenu;
