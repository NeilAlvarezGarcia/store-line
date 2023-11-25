import { DashboardLayout, PageLayout } from '@/commons/layouts';
import { Table } from '@/components/Table';
import Head from 'next/head';

const Administracion = () => {
  return (
    <>
      <Head>
        <title>Administración</title>
      </Head>

      <DashboardLayout>
        <PageLayout title='Lista de usuarios'>
          <Table
            headers={[
              { id: 'head1', name: 'head 1' },
              { id: 'head2', name: 'head 2' },
              { id: 'head3', name: 'head 3' },
              { id: 'head4', name: 'head 4' },
              { id: 'head5', name: 'head 5' },
              { id: 'head6', name: 'head 6' },
            ]}
            data={[
              [1, 2, 3, 4, 5, 6],
              [1, 2, 3, 4, 5, 6],
              [1, 2, 3, 4, 5, 6],
              [1, 2, 3, 4, 5, 6],
            ]}
          />
        </PageLayout>
      </DashboardLayout>
    </>
  );
};

export default Administracion;
