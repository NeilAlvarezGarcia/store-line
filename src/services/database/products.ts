import { Product } from '@/interfaces';
import { PRODUCTS } from '@/utils/const';
import {
  deleteDocument,
  getDocument,
  getDocuments,
  setDocument,
  updateDocument,
} from '@/utils/helpers';

async function addProduct(data: Product) {
  return await setDocument(PRODUCTS, data.id, data);
}

async function getProducts() {
  return await getDocuments(PRODUCTS);
}

async function getProduct(id: string) {
  return await getDocument(PRODUCTS, id);
}

async function deleteProduct(productId: string) {
  await deleteDocument(PRODUCTS, productId);
}

async function updateProduct(data: Product) {
  await updateDocument(PRODUCTS, data.id, data);
}

export { addProduct, getProducts, deleteProduct, updateProduct, getProduct };
