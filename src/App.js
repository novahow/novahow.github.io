import React, { useEffect, useRef, useState, useCallback } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import A108_1 from './components/A108_1'
import A108_2 from './components/A108_2'
import A109_1 from './components/A109_1'
import Home from './Home'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
function App() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,

        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        margin: {
            margin: theme.spacing(1),
            marginLeft: theme.spacing(2),
        },
        btn: {
            color: 'white',
            flexGrow: 1,
        },
    }));

    const BootstrapInput = withStyles((theme) => ({
        root: {
            'label + &': {
                marginTop: theme.spacing(0),

            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }))(InputBase);
    const classes = useStyles();
    const [semes, setSemes] = useState('Semester')
    return (
        <div className={classes.root}>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <Link to="/">
                            <Button to="/" className={classes.btn}>
                                Home
                            </Button>
                        </Link>
                        <FormControl className={classes.margin}>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={semes}
                                onChange={(e) => {
                                    setSemes(e.target.value);
                                    console.log(e.target.value)
                                }}
                                input={<BootstrapInput />}
                            >
                                <Link to="/大一上">
                                    <MenuItem value={108_1}>108-1</MenuItem>
                                </Link>
                                <Link to="/大一下">
                                    <MenuItem value={108_2}>108-2</MenuItem>
                                </Link>
                                <Link to="/大二上">
                                    <MenuItem value={109_1}>109-1</MenuItem>
                                </Link>
                            </Select>
                        </FormControl>
                    </Toolbar>
                </AppBar>
                <div>

                    {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/大一上">
                            <A108_1 />
                        </Route>
                        <Route path="/大一下">
                            <A108_2 />
                        </Route>
                        <Route path="/大二上">
                            <A109_1 />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App