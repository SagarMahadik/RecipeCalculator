import axios from 'axios';
import { useQuery } from 'react-query';

const useSupplier = () => {
  return useQuery(
    'suppliers',
    axios.get('http://127.0.0.1:5000/api/v1/supplier')
  ).then(res => res.data);
};

export default useSupplier;
