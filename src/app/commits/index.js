import BoxContent from "../../components/box-content";
import Header from "../../components/header";
import Table from "../../components/elements/table";
import Button from "../../components/UI/button";
import {ReactComponent as Spinner} from "../../assets/spinner.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCommitsData } from "../../store/git-user/thunk";

const _COLLUMNS = [
  {title: "Автор", nameProperty: "commit.author.name"},
  {title: "Хэш коммита", nameProperty: "sha"},
  {title: "Дата", nameProperty: "commit.author.date"}
];

function Commits() {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const select = useSelector(state => ({
    commits: state.user.commits,
    waiting: state.user.waiting,
    errorMsg: state.user.errorMsg
  }));

  const goBack = () => {
    if(window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', {replace: true});
    }
  }

  const whoIsComponent = () => {
    if(select.errorMsg) {
      console.log("Ошибка");
      return;
    }

    if(select.waiting) {
      return <Spinner/>;
    }

    return <Table repos={select.commits} columns={_COLLUMNS} />;
  }

  useEffect(() => {
    dispatch(fetchCommitsData({value: param}));
    // eslint-disable-next-line
  }, []);

  return (
    <BoxContent>
      <Header/>
      <Button title="Назад" callback={goBack}/>
      {whoIsComponent()}
    </BoxContent>
  );
}

export default Commits;