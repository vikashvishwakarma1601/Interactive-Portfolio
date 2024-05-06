import Avatar from "../../atoms/Avatar";
import WindowContainer from "../../molecules/WindowContainer";

import {
  Head,
  Wrapper,
  InfoContainer,
  CopyrightText,
  AvatarWrapper,
} from "./style";

const About = () => {
  return (
    <WindowContainer>
      <Wrapper>
        <AvatarWrapper>
          <Avatar
            src={"https://pc.net/img/db/2022_apple_macbook_air_review.png"}
            hideBG={true}
            borderRadius={0}
          />
        </AvatarWrapper>
        <Head>
          <h1>Vikash Vishwakarma</h1>
          <h5>Software Engineer</h5>
        </Head>
        <InfoContainer>
          <div>
            <div>Chip</div>
            <div>Apple M2</div>
          </div>
          <div>
            <div>Memory</div>
            <div>16 GB</div>
          </div>
          <div>
            <div>Startup Disk</div>
            <div>Mackintosh HD</div>
          </div>
          <div>
            <div>Serial Number</div>
            <div>J782JDHR8ES</div>
          </div>
          <div>
            <div>macOS</div>
            <div>Sanoma 14.12.1</div>
          </div>
        </InfoContainer>

        <CopyrightText> &#169; All Rights Reserved</CopyrightText>
      </Wrapper>
    </WindowContainer>
  );
};

export default About;
