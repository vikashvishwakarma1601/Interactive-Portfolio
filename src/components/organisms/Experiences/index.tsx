import Card from "../../atoms/Card";
import { ExperiencesContainer, SubHeader } from "./style";
import UIUX from "../../../assets/icons/css.svg";
import Icon from "../../atoms/Icon";
import Divider from "../../atoms/Divider";

const Experiences = () => {
  return (
    <ExperiencesContainer>
      <div>
        <SubHeader>
          Collaborate with brands and agencies to create impactful results.
        </SubHeader>
      </div>
      {/* <DividerWrapper> */}
      <Divider />
      {/* </DividerWrapper> */}
      <Card>
        <Card.Header>
          <Icon size="md" src={UIUX} />
        </Card.Header>
        <Card.Content>
          <h4>UX & UI</h4>
        </Card.Content>
        <Card.Footer>
          <p>
            Designing interfaces that are intuitive, efficient, and enjoyable to
            use.
          </p>
        </Card.Footer>
      </Card>
    </ExperiencesContainer>
  );
};

export default Experiences;
