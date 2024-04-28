import Search from "../../atoms/Search";
import { SpoltlighContainer } from "./style";
import ListItems from "./ListItems";

const SpotlightSearch = () => {
  return (
    <SpoltlighContainer>
      <Search />

      <ListItems />
    </SpoltlighContainer>
  );
};

export default SpotlightSearch;
