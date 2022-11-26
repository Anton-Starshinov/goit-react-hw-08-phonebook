import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterInput, FilterConteiner } from './Filter.styled';
import { selectStatusFilter } from 'redux/contacts/selectors';
import { setStatusFilter } from 'redux/contacts/slice';
import { nanoid } from 'nanoid';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const filterId = nanoid(3);

  const handleFilterChange = evt =>
    dispatch(setStatusFilter(evt.currentTarget.value));

  return (
    <FilterConteiner>
      <FilterLabel htmlFor={filterId}>
        Find contacts by name
        <FilterInput
          id={filterId}
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </FilterLabel>
    </FilterConteiner>
  );
};
