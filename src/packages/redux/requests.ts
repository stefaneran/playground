import { IStoreItem } from './index';

export const addItemRequest = async (items): Promise<IStoreItem> => {
  const itemId = items.length;
  const request = (): Promise<IStoreItem> => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: itemId, value: `item-${itemId}` });
    }, 1000);
  })
  return await request();
}

export const deleteItemRequest = async (): Promise<boolean> => {
  const request = (): Promise<boolean> => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  })
  return await request();
}