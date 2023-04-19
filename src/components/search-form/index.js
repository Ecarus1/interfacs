import Input from "../UI/input";

function SearchForm({onFetchSearch}) {
  return (
    <div className="w-11/12 md:w-4/6 xl:w-1/2 mx-auto mt-32 mb-4">
      <Input callback={onFetchSearch} name="search"/>
    </div>
  );
}

export default SearchForm;