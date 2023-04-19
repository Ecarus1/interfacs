import plural from 'plural-ru';

function CountUsers({count}) {
  
  if (!count) {
    return null;
  }

  return (
    <div className="mx-auto w-fit mb-4">
      {
        count > 0 ? 
        <p>Найдено в базе {count} {plural(count, "пользователь", "пользователя", "пользователей")}</p> :
        <p>По вашему запросу не было найдено ни одного пользователя!</p>
      }
    </div>
  );
}

export default CountUsers;