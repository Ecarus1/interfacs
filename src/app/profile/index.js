import { useParams } from "react-router-dom";
import BoxContent from "../../components/box-content";
import Header from "../../components/header";
import UserLayout from "../../components/layouts/user-layout";
import Table from "../../components/elements/table";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../store/git-user/thunk";
import {ReactComponent as Spinner} from "../../assets/spinner.svg";

const _COLLUMNS = [
  {title: "Наименование", nameProperty: "name"},
  {title: "Язык программирования", nameProperty: "language"},
  {title: "Описание", nameProperty: "description"},
  {title: "Количество звезд", nameProperty: "stargazers_count"}
];

function Profile() {
  const param = useParams();
  const dispatch = useDispatch();

  const select = useSelector(state => ({
    user: state.user.userData,
    repos: state.user.repItems,
    waiting: state.user.waiting,
    errorMsg: state.user.errorMsg
  }), shallowEqual);

  const whoIsComponent = () => {
    if(select.errorMsg) {
      console.log("Ошибка");
      return;
    }

    if(select.waiting) {
      return <Spinner/>;
    }

    return <>
      <UserLayout user={select.user}/>
      <Table repos={select.repos} columns={_COLLUMNS} firstLink={true}/>
    </>;
  }

  useEffect(() => {
    dispatch(fetchUserData({value: param.login}));
    // eslint-disable-next-line
  }, [])

  return (
    <BoxContent>
      <Header/>
      {whoIsComponent()}
    </BoxContent>
  );
}

export default Profile;