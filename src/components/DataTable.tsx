export default function DataTable({ total, items, headers }: IDataTable) {
  const headerKey = headers.map((header) => header.key);
  return (
    <>
      <p className="my-8">
        검색된 데이터: <b>{total}</b>건
      </p>
      <table className="bg-white rounded w-full">
        <thead>
          <tr>
            {headers?.map((column) => (
              <th className="p-4 border-bottom text-center" key={column.key}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr key={index}>
              {headerKey?.map((key) => {
                const data = item[key];
                return (
                  <td
                    className="p-4 border-bottom text-center"
                    key={key + index}
                  >
                    {data.length > 40 ? data.substr(0, 40) + "..." : data}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
