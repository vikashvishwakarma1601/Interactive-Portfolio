import AppBar from "../../components/molecules/AppBar";
import NavBar from "../../components/molecules/NavBar";
import SpotlightSearch from "../../components/molecules/SpotlightSearch";
import { Container } from "./style";

const Mac = () => {
  return (
    <Container>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <AppBar />
      <br />
      <SpotlightSearch />
      {/* <About /> */}
    </Container>
  );
};

export default Mac;
