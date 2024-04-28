import Icon from "../Icon";
import { BasicSearch } from "./style";
import SearchIcon from "../../../assets/icons/search.svg?react";
import Input from "../Input";

const Search = () => {
  return (
    <BasicSearch>
      <Icon src={SearchIcon} size="md" />
      <Input type="text" placeholder="Spotlight Search" />
    </BasicSearch>
  );
};

export default Search;
