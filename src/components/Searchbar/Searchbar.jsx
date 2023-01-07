import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  SearchbarHeader,
  FormWr,
  Input,
  Button,
  Label,
} from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi';

const initialValues = {
  search: '',
};

export const Searchbar = ({ onSubmit }) => {
  const submitSearch = (value, { resetForm }) => {
    if (value.search) {
      onSubmit(value.search);
      resetForm();
    }
  };
  return (
    <SearchbarHeader>
      <Formik initialValues={initialValues} onSubmit={submitSearch}>
        <FormWr>
          <Button type="submit">
            <Label>Search</Label>
            <BiSearch />
          </Button>

          <Input
            name="search"
            type="text"
            autoComplete="true"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormWr>
      </Formik>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};