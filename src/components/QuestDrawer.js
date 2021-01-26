import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
// import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function QuestDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Quests
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Dashboard', 'Users', 'Quests', 'Matrix'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <DashboardIcon /> : <GroupAddIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} 
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <div class="row">
            <div class="col-sm-6">
                <h6>Quests</h6>
            </div>
            <div class="col-sm-6">
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search quests..."/>
                </div>      
            </div>
        </div>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>
                        <span class="custom-checkbox">
                            <input type="checkbox" id="selectAll"/>
                            <label for="selectAll"></label>
                        </span>
                    </th>  
                    <th scope="col">Title</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created</th>
                    <th scope="col">Reward</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                <span class="custom-checkbox">
                        <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
                        <label for="checkbox1"></label>
                </span>
                </td>
                    <td>About you</td>
                    <td>Quiz</td>
                    <td>Draft</td>
                    <td>11/02/2021; 1:20pm</td>
                    <td>75</td>
                    <td>
                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="custom-checkbox">
                            <input type="checkbox" id="checkbox2" name="options[]" value="1"/>
                            <label for="checkbox1"></label>
                    </span>
                    </td>
                    <td>Luxury Spending</td>
                    <td>Reflection</td>
                    <td>Archived</td>
                    <td>11/02/2021; 1:20pm</td>
                    <td>75</td>
                    <td>
                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox3" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>Sharing session</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>25</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox4" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>No exclusions</td>
        <td>Quiz</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>75</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox5" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>About you</td>
        <td>Reflection</td>
        <td>Draft</td>
        <td>11/02/2021; 1:20pm</td>
        <td>100</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox6" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>Luxury Spending</td>
        <td>Quiz</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>270</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox7" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>No exclusions</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>300</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox8" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>About you</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>25</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox9" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>Banking Connection</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>100</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox10" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>Banking Connection</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>100</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>Banking Connection</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>100</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>Banking Connection</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>100</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>Banking Connection</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>100</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>Luxury Spending</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>50</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>No exclusions</td>
        <td>Quiz</td>
        <td>Draft</td>
        <td>11/02/2021; 1:20pm</td>
        <td>75</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
    <tr>
    <td>
       <span class="custom-checkbox">
            <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
            <label for="checkbox1"></label>
       </span>
    </td>
        <td>Banking Connection</td>
        <td>Reflection</td>
        <td>Published</td>
        <td>11/02/2021; 1:20pm</td>
        <td>100</td>
        <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Archive">archive</i></a>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Publish">publish</i></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
   
            </tbody>
        </table>

        <div class="clearfix">
            <div class="hint-text">Rows per page</div>
            <ul class="pagination">
                <li class="page-item disabled"><a href="#">Previous</a></li>
                <li class="page-item"><a href="#" class="page-link">1</a></li>
                <li class="page-item"><a href="#" class="page-link">2</a></li>
                <li class="page-item active"><a href="#" class="page-link">3</a></li>
                <li class="page-item"><a href="#" class="page-link">4</a></li>
                <li class="page-item"><a href="#" class="page-link">5</a></li>
                <li class="page-item"><a href="#" class="page-link">Next</a></li>
            </ul>
        </div>

        <div class="mdc-touch-target-wrapper">
            
            <button type="button" class="btn btn-primary bmd-btn-fab">
                <i class="material-icons fab">add</i>
            </button>
        </div>
        
    </main>
      

    </div>
  );
}
