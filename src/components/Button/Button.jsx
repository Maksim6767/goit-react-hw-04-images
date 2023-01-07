import PropTypes from 'prop-types';
import { LoadBtn } from './Button.styled';

export const Button = ({ onClick }) => {
  return <LoadBtn onClick={onClick}>Load more</LoadBtn>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};