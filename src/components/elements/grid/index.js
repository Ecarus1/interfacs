function Grid({items, renderGridItem}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-9">
      {items.map(item => renderGridItem(item))}
    </div>
  );
}

export default Grid;