import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilterValue } from 'redux/filter/filterSlice';
// import { selectFilter } from 'redux/filter/selectors';

const Filter = () => {
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <FilterLabel htmlFor="">
        Find contacts by name
        <FilterInput
          type="text"
          onChange={e => dispatch(changeFilterValue(e.target.value))}
          value={filter}
        />
      </FilterLabel>
    </>
  );
};

export default Filter;
