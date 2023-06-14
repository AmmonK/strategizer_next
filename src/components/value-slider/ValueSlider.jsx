import {
  Box,
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const ValueSlider = ({icon, onChange, value}) => {
  

  return (
    <Slider min={0} max={2} step={1} onChange={(val) => onChange(val)} value={Number(value)}>
      <SliderTrack bg='red.100'>
        <Box position='relative' right={10} />
        <SliderFilledTrack bg='tomato' />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Icon boxSize={4} as={icon} />
      </SliderThumb>
    </Slider>
  );
};

export default ValueSlider;
