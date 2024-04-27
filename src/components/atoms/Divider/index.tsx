import { Line } from "./style";

interface Props {
  thickness?: number;
}

const Divider = ({ thickness }: Props) => {
  return <Line $thickness={thickness}></Line>;
};

export default Divider;
