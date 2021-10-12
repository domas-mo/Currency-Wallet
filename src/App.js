import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import FormContainer from './components/Form/Form';
import Table from './components/Table/Table';

import GlobalStyle from './styled/GlobalStyle';
import ResetStyle from './styled/Reset';

import StyledContainer from './styled/Container.styled';
import StyledHeader from './styled/Header.styled';
import StyledTitle from './styled/Title.styled';

const App = () => (
    <Provider store={store}>
        <ResetStyle/>
        <GlobalStyle/>
        <StyledContainer>
            <StyledHeader>
               <StyledTitle>Wallet</StyledTitle> 
               <FormContainer />
            </StyledHeader>
            <Table />
    	</StyledContainer>
    </Provider>
);

export default App;