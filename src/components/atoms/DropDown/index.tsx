import NestedItem from "./NestedItem";
import { Container, Items, Item } from "./style";

const DropDown = () => {
  return (
    <Container>
      <Items>
        <Item>Setting</Item>
        <Item>Setting</Item>
        <Item>Setting</Item>
        <Item>Setting</Item>
        <NestedItem label="adad">
          <Items>
            <Item>Setting</Item>
            <Item>Setting</Item>
            <Item>Setting</Item>
            <Item>Setting</Item>
            <NestedItem label="adadasdasd">
              <Items>
                <Item>Setting</Item>
                <Item>Setting</Item>
                <Item>Setting</Item>
                <Item>Setting</Item>
              </Items>
            </NestedItem>
          </Items>
        </NestedItem>
      </Items>
    </Container>
  );
};

export default DropDown;
