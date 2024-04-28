import Card from "../../atoms/Card";
import UIUX from "../../../assets/icons/css.svg";
import Icon from "../../atoms/Icon";
import Divider from "../../atoms/Divider";
import { ExperiencesContainer, SubHeader, CardWrapper } from "./style";

const Experiences = () => {
  return (
    <ExperiencesContainer>
      <SubHeader>
        Collaborate with brands and agencies to create impactful results.
      </SubHeader>
      {/* <DividerWrapper> */}
      <Divider thickness={1} />
      {/* </DividerWrapper> */}
      <CardWrapper>
        <Card>
          <Card.Header>
            <Icon size="md" src={UIUX} />
          </Card.Header>
          <Card.Content>
            <h4>UX & UI</h4>
          </Card.Content>
          <Card.Footer>
            <p>
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Icon size="md" src={UIUX} />
          </Card.Header>
          <Card.Content>
            <h4>UX & UI</h4>
          </Card.Content>
          <Card.Footer>
            <p>
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Icon size="md" src={UIUX} />
          </Card.Header>
          <Card.Content>
            <h4>UX & UI</h4>
          </Card.Content>
          <Card.Footer>
            <p>
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Icon size="md" src={UIUX} />
          </Card.Header>
          <Card.Content>
            <h4>UX & UI</h4>
          </Card.Content>
          <Card.Footer>
            <p>
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Icon size="md" src={UIUX} />
          </Card.Header>
          <Card.Content>
            <h4>UX & UI</h4>
          </Card.Content>
          <Card.Footer>
            <p>
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </Card.Footer>
        </Card>
      </CardWrapper>
    </ExperiencesContainer>
  );
};

export default Experiences;
