import React from "react";
import {
  GroupedItem,
  GroupedItemLabel,
  Item,
  ItemContainer,
  ItemLabel,
  List,
} from "../style";
import Icon from "../../../atoms/Icon";
import Setting from "../../../../assets/icons/setting.svg?react";

const ListItems = () => {
  return (
    <ItemContainer>
      <List>
        <Item $active={true}>
          <ItemLabel>
            <Icon src={Setting} size="sm" />
            <span className="item__label">Settings</span>
          </ItemLabel>
        </Item>
        <Item>
          <ItemLabel>
            <Icon src={Setting} size="sm" />
            <span className="item__label">Settings</span>
          </ItemLabel>
        </Item>
        <Item>
          <ItemLabel>
            <Icon src={Setting} size="sm" />
            <span className="item__label">Settings</span>
          </ItemLabel>
        </Item>
        <Item>
          <ItemLabel>
            <Icon src={Setting} size="sm" />
            <span className="item__label">Settings</span>
          </ItemLabel>
        </Item>
        <Item>
          <ItemLabel>
            <Icon src={Setting} size="sm" />
            <span className="item__label">Settings</span>
          </ItemLabel>
        </Item>
        <Item>
          <ItemLabel>
            <Icon src={Setting} size="sm" />
            <span className="item__label">Settings</span>
          </ItemLabel>
        </Item>
        <Item>
          <ItemLabel>
            <Icon src={Setting} size="sm" />
            <span className="item__label">Settings</span>
          </ItemLabel>
        </Item>
        <Item>
          <ItemLabel>
            <Icon src={Setting} size="sm" />
            <span className="item__label">Settings</span>
          </ItemLabel>
        </Item>
        <GroupedItem>
          <GroupedItemLabel>Settings</GroupedItemLabel>
          <List>
            <Item>
              <ItemLabel>
                <Icon src={Setting} size="sm" />
                <span className="item__label">Settings</span>
              </ItemLabel>
            </Item>
            <Item>
              <ItemLabel>
                <Icon src={Setting} size="sm" />
                <span className="item__label">Settings</span>
              </ItemLabel>
            </Item>
          </List>
        </GroupedItem>

        <GroupedItem>
          <GroupedItemLabel>Settings</GroupedItemLabel>
          <List>
            <Item>
              <ItemLabel>
                <Icon src={Setting} size="sm" />
                <span className="item__label">Settings</span>
              </ItemLabel>
            </Item>
            <Item>
              <ItemLabel>
                <Icon src={Setting} size="sm" />
                <span className="item__label">Settings</span>
              </ItemLabel>
            </Item>
          </List>
        </GroupedItem>
      </List>
    </ItemContainer>
  );
};

export default ListItems;
