import { DashboardLayout, SectionLayout } from '@/commons/layouts';
import { Table } from '@/commons/Table';
import { Product, Products } from '@/interfaces';
import { deleteProduct, getProducts } from '@/services';
import { TABLE_PRODUCTS_HEADER } from '@/utils/const';
import Head from 'next/head';
import { FC, useState } from 'react';

import { AddProduct, EditProduct, ProductTableRow } from '@/components/inventario';
import { Alert } from '@/commons/icons';
import { Modal } from '@/components';
import { useOpenModal } from '@/hooks';
import s from '@/styles/modal.module.css';

type Props = {
  data: Products;
};

const Inventario: FC<Props> = ({ data }) => {
  const [products, setProducts] = useState(data);

  const [deleteProductOpen, openDeleteProduct, closeDeleteProduct] = useOpenModal();
  const [editProductOpen, openEditProduct, closeEditProduct] = useOpenModal();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [productSelected, setProductSelected] = useState<Product | null>(null);

  const refreshData = async () => {
    const data = await getProducts();

    setProducts(data);
  };

  const toggleDeleteLoader = () => setDeleteLoading((prev) => !prev);

  const onDeleteProduct = async () => {
    if (!productSelected?.id) return;

    toggleDeleteLoader();
    try {
      await deleteProduct(productSelected?.id);
      await refreshData();
    } catch (error) {
      console.log(error);
    } finally {
      closeDeleteProduct();
      toggleDeleteLoader();
    }
  };

  const openDeleteModal = (product: Product) => {
    setProductSelected(product);
    openDeleteProduct();
  };
  const openEditModal = (product: Product) => {
    setProductSelected(product);
    openEditProduct();
  };

  const closeEditModal = () => {
    setProductSelected(null);
    closeEditProduct();
  };

  return (
    <>
      <Head>
        <title>Inventario</title>
      </Head>

      <DashboardLayout>
        <SectionLayout title='Lista de productos'>
          <AddProduct refresh={refreshData} />

          <Table
            headers={TABLE_PRODUCTS_HEADER}
            data={products}
            row={(item, i) => (
              <ProductTableRow
                key={i}
                product={item}
                openDeleteModal={openDeleteModal}
                openEditModal={openEditModal}
              />
            )}
          />
        </SectionLayout>
      </DashboardLayout>

      <Modal open={deleteProductOpen} closeModal={closeDeleteProduct}>
        <section className={s.deleteContent}>
          <Alert />

          <div className={s.description}>
            <h2>¿Estas seguro?</h2>
            <p>Deseas eliminar este producto</p>
          </div>

          <button onClick={onDeleteProduct} className={s.deleteButton}>
            {deleteLoading ? 'Eliminando producto...' : 'Si, continuar'}
          </button>
        </section>
      </Modal>

      <EditProduct
        refresh={refreshData}
        editProductOpen={editProductOpen}
        closeEditProduct={closeEditModal}
        productSelected={productSelected as Product}
      />
    </>
  );
};

export async function getServerSideProps() {
  const data = await getProducts();

  return {
    props: {
      data,
    },
  };
}

export default Inventario;
