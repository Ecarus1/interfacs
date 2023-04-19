import { useCallback, memo } from "react";

import TableItem from "../table-item";

function Table({repos, columns, firstLink = false}) {

  const renderTableItem = useCallback((item, index) => (
    <TableItem
      key={item.id || item.node_id}
      item={item}
      index={index}
      columns={columns}
      firstLink={firstLink}
    />
    // eslint-disable-next-line
  ), []);

  const renderColumns = useCallback(() => (
    columns.map((column, i) => (
      <th key={i} className="px-4 py-2 text-left border">{column.title}</th>
    ))
  ), [columns])

  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr>
          {renderColumns()}
        </tr>
      </thead>

      <tbody>
        {repos.map((item, index) => renderTableItem(item, index))}
      </tbody>
    </table>
  );
}

export default memo(Table);