import { Link } from "react-router-dom";

import Button from "../../UI/button";

function GridItem({item, callback}) {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="mb-4">
        <img src={item.avatar_url} alt="" className="rounded-full max-h-52 mb-3"/>
        <p className="text-center">{item.login}</p>
      </div>

      <Button title="Перейти" callback={callback}/>
    </div>
  );
}

export default GridItem;