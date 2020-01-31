import { IStoreItem } from './index';

export const addItemRequest = async (items) => {
  let item: IStoreItem;
  const itemId = items.length;
  const request = () => setTimeout(() => {
    item = { id: itemId, value: "item" };
  }, 2000);
  await request();
  return item;
}

export const deleteItemRequest = async () => {
  let success: boolean;
  const request = () => setTimeout(() => {
    success = true;
  }, 2000);
  await request();
  return success;
}