import { Audio } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyled>
      <Audio type="TailSpin" color="#02be6e" height={100} width={100} />
    </LoaderStyled>
  );
};

export default Loader;
