import config from '@/utils/config';
import AxiosInstance from '@/common/axiosInstance';

export const getListAddress = async (): Promise<any> => {
  const { data } = await AxiosInstance.get(
    `${config.API_ENDPOINT_URL}/address`,
  );
  return data;
};
