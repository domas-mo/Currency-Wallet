import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import FormContainer from './components/Form/Form';
import Table from './components/Table/Table';

const App = () => (
    <Provider store={store}>
        <div>
            <h1>Wallet</h1>
        	<FormContainer />
            <Table />
    	</div>
    </Provider>
);

export default App;