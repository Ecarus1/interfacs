import { Link } from "react-router-dom";

function TableItem({item, index, columns, firstLink = false}) {

  const isISODate = (value) => {
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{1,3})?Z$/;
    return isoDateRegex.test(value);
  }

  const TransformTreeObjData = (column) => {
    const prop = column.nameProperty.split(".");
    let value = item;

    for (const i of prop) {
      value = value[i];
    }

    // проверяем, является ли значение датой
    if (isISODate(value)) {
      return value.substring(0, 10)
    } else {
      return value
    }
  }

  return (
    <tr className={index % 2 === 0 ? "bg-gray-100" : ""}>
      {columns.map((column, i) => {
        const prop = TransformTreeObjData(column);

        if(firstLink && i === 0) {
          return <td key={i} className="px-4 py-2 text-left border"><Link to={prop}>{prop}</Link></td>
        }

        return <td key={i} className="px-4 py-2 text-left border">{prop}</td>;
      })}
    </tr>
  );
}

export default TableItem;