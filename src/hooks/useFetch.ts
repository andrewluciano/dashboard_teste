import { type AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

import { type IApiData } from 'interfaces/apiData';

type IPromise<T> = Promise<IApiData<T> | undefined>;
type IFunc<T> = () => IPromise<T>;
type IResponse<T> = IApiData<T> | undefined;

export const useFetch = <T>(
  apiFn: IFunc<T>
): [boolean, IResponse<T>, AxiosError | null] => {
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null as AxiosError | null);
  const [data, setData] = useState<IResponse<T>>(undefined);

  const fetchData = async (apiFn: IFunc<T>): Promise<void> => {
    setFetching(true);
    await apiFn()
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        if (err) {
          if (err?.response?.data?.message) {
            err.message = err.response.data.message;
          }
          toast.error(err.toString());
          setError(err);
        }
      })
      .finally(() => {
        setFetching(false);
      });
  };

  useEffect(() => {
    fetchData(apiFn);
  }, []);

  return [fetching, data, error];
};
