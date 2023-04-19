import {useCallback} from "react";
import { useNavigate } from "react-router-dom";

import BoxContent from "../../components/box-content";
import Header from "../../components/header";
import SearchForm from "../../components/search-form";
import Grid from "../../components/elements/grid";
import GridItem from "../../components/elements/grid-item";
import CountUsers from "../../components/count-users";
import {ReactComponent as Spinner} from "../../assets/spinner.svg";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchSearch } from "../../store/git-search/thunk";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const select = useSelector((state) => ({
    items: state.search.items,
    count: state.search.totalCount,
    waiting: state.search.waiting,
    errorMsg: state.search.errorMsg
  }), shallowEqual)

  const onFetchSearch = (value) => {
    if(value.length)
    dispatch(fetchSearch({value}));
  }

  const onRedirect = (item) => {
    navigate(item.login);
  }

  const renderGridItem = useCallback((item) => (
    <GridItem
      item={item}
      key={item.id}
      callback={() => onRedirect(item)}
    />
    // eslint-disable-next-line
  ), []);

  const whoIsComponent = () => {
    if(select.errorMsg) {
      console.log("ошибка");
      return;
    }

    if(select.waiting) {
      return <Spinner/>
    }

    return <>
      <CountUsers count={select.count}/>
      <Grid items={select.items} renderGridItem={renderGridItem}/>
    </>;
  }

  return (
    <BoxContent>
      <Header/>
      <SearchForm onFetchSearch={onFetchSearch}/>
      {whoIsComponent()}
    </BoxContent>
  );
}

export default Main;