import { TailSpin } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader = ({ height, width }) => {
  return (
    <LoaderStyled>
      <TailSpin color="#02be6e" height={height} width={width} />
    </LoaderStyled>
  );
};

export default Loader;

// TailSpin color="#00BFFF" height={80} width={80}
