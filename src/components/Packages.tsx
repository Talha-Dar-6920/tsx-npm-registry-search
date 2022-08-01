import { useEffect } from 'react';
import { fetchPackages, useAppDispatch, useAppSelector } from '../store';
import CustomCard from './bootstrap/CustomCard';

const Packages: React.FC = () => {
  const { data, loading, error, search } = useAppSelector((state) => state.fetchPackages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPackages(search));
  }, [dispatch, search]);

  const dataList = data.map(({ name, version, description, date }) => (
    <li key={`${name}-${version}`}>
      <CustomCard name={name} version={version} description={description} date={date} />
    </li>
  ));

  return (
    <>
      <h2>{loading && 'Loading Data Please Wait....'}</h2>
      <h2>{error && 'There was an Error While Loading The Data'}</h2>
      {!error && !loading && data.length > 0 && <ul>{dataList}</ul>}
    </>
  );
};

export default Packages;
