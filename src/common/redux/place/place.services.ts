import config from '@/utils/config';
import AxiosInstance from '@/common/axiosInstance';

export const getListPlace = async (payload: any): Promise<any> => {
  const dt = payload.dt.split('.');
  const { data } = await AxiosInstance.get(
    `${config.API_ENDPOINT_URL}/place?lo=${payload.lo}&start=${dt[0]}&end=${dt[1]}`,
  );
  return data;
};
