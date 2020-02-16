import { IStoreItem } from './index';
import { requestTime } from '@constants/async'

export const addItemRequest = async (items): Promise<IStoreItem> => {
  const itemId = items.length;
  const request = (): Promise<IStoreItem> => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: itemId, value: `item-${itemId}` });
    }, requestTime);
  })
  return await request();
}

export const deleteItemRequest = async (): Promise<boolean> => {
  const request = (): Promise<boolean> => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, requestTime);
  })
  return await request();
}