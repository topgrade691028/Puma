import React from "react";
import Shape from "../../components/Shape";
import {
  Container,
  Header,
  MainMenu,
  Tab,
  TapBar,
  Content,
  Detail,
} from "./header_section.style";
import Image from "../../components/Logo";
import Mark from "../../asserts/pumamark.png";
import Text from "../../components/Text";
import CustomButton from "../../components/Button";
import SimpleSlider from "../../components/Slider";
const header_section = () => {
  return (
    <Container>
      <Shape />
      <Header>
        <TapBar>
          <Image src={Mark} width={94} height={44} alt="mark" />
          <MainMenu>
            <Tab>
              <Text
                fSize={16}
                fWeight={500}
                fColor="#1A0A03"
                fOpacity={0.7}
                content="Menu"
              />
            </Tab>
            <Tab>
              <Text
                fSize={16}
                fWeight={500}
                fColor="#1A0A03"
                fOpacity={0.7}
                content="About"
              />
            </Tab>
            <Tab>
              <Text
                fSize={16}
                fWeight={500}
                fColor="#1A0A03"
                fOpacity={0.7}
                content="Feature"
              />
            </Tab>
            <Tab>
              <Text
                fSize={16}
                fWeight={500}
                fColor="#1A0A03"
                fOpacity={0.7}
                content="Gallary"
              />
            </Tab>
          </MainMenu>
        </TapBar>
        <CustomButton
          bwidth={137}
          bheight={59}
          bcolor="white"
          bgcolor="#EE5514"
          bradius={5}
          btext="Buy now"
        />
      </Header>
      <Content>
        <Detail>
          <Text
            fSize={61}
            fWeight={600}
            fColor="#1A0A03"
            content="Life is better in running"
          />
          <Text fSize={61} fWeight={600} fColor="#EE5514" content="shoes." />
          <Text
            fSize={16}
            fWeight={400}
            fColor="#1A0A03"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo ultrices "
          />
        </Detail>
        <SimpleSlider />
      </Content>
    </Container>
  );
};

export default header_section;
