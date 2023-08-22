import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './components/Search';
import Person from './components/Person';
import Alert from './components/Alert';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/personActions';

const App: FC = () => {
  const dispatch = useDispatch();
  const personData = useSelector((state: RootState) => state.person.data);
  const loading = useSelector((state: RootState) => state.person.loading);
  const error = useSelector((state: RootState) => state.person.error);
  const alertMessage = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="App">
      <Search title='Enter a name and press Search' />
      {loading ? <h2 id="infoSection">Loading from a galxy far far away...</h2> : personData && <Person data={personData} />}

      {alertMessage && <Alert message={alertMessage} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError(  ))} />}
    </div>
  );
}

export default App;
