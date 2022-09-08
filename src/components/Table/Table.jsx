import DataTable from 'react-data-table-component';

export const Table = ({ columns, data }) => {
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};
