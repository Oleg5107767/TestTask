import AppHeader from '../appHeader/AppHeader';
import Preview from '../preview/Preview';
import UserForm from '../userForm/UserForm';
import UsersList from '../userList/UserList';

import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    typography: {
      fontFamily: "Nunito ",
      fontStyle: 'Regular 400',
    },
  });
  
const LayOut = () => {
    return(
        <>
            <MuiThemeProvider theme={theme}>
                <AppHeader/>
                <Preview/>
                <UsersList/>
                <UserForm/>
            </MuiThemeProvider>
        </>
    )
}

export default LayOut;