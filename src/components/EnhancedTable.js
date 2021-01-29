import React ,{useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";



export default function EnhancedTable(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));

  const rows = [
    createData('About you ', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish");
        props.setModalId("11")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("11")
      }}
      
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("11")
      }}
      />
    </div>),
     createData('Banking Connection', 'Reflection', 'Published','11/02/2021; 1:20pm', 25, 
     <div>
       <PublishOutlinedIcon 
       className="actionIcon"
       onClick={()=>{
         props.setShowModal(true);
         props.setModalPage("publish")
         props.setModalId("12")
       }}/>   
       <ArchiveOutlinedIcon 
         className="actionIcon"
         onClick={()=>{
         props.setShowModal(true);
         props.setModalPage("archive");
         props.setModalId("12")
       }}
       />
       <DeleteOutlinedIcon 
       className="actionIcon"
       onClick={()=>{
         props.setShowModal(true);
         props.setModalPage("delete")
         props.setModalId("12")
       }}
       />
     </div>),
    createData('Luxury Spending', 'Reflection', 'Archived','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("13")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("13")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("13")
      }}
      />
    </div>),
    createData('Sharing session', 'Reflection', 'Published','11/02/2021; 1:20pm', 100, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("14")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("14")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("14")
      }}
      />
    </div>),
    createData('No exclusions', 'Quiz', 'Published','11/02/2021; 1:20pm', 300, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("15")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("15")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("15")
      }}
      />
    </div>),
    createData('About you', 'Reflection', 'Draft','11/02/2021; 1:20pm', 50, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("16")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("16")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("16")
      }}
      />
    </div>),
    createData('Luxury Spending', 'Quiz', 'Published','11/02/2021; 1:20pm', 270, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("17")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("17")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("17")
      }}
      />
    </div>),
    createData('No exclusions', 'Reflection', 'Published','11/02/2021; 1:20pm', 100, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("18")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("18")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("18")
      }}
      />
    </div>),
    createData('Banking Connection', 'Quiz', 'Published','11/02/2021; 1:20pm', 300, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("19")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("19")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("19")
      }}
      />
    </div>),
    createData('About you', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("1112")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("1112")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("1112")
      }}
      />
    </div>),
    createData('About you', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("1112")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("1112")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("1112")
      }}
      />
    </div>),
    createData('About you', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("1112")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("1112")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("1112")
      }}
      />
    </div>),
    createData('About you', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("1112")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("1112")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("1112")
      }}
      />
    </div>),
    createData('About you', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("1112")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("1112")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("1112")
      }}
      />
    </div>),
    createData('About you', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("1112")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("1112")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("1112")
      }}
      />
    </div>),
    createData('About you', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("1112")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("1112")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("1112")
      }}
      />
    </div>),
    createData('About you', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("1112")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("1112")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("1112")
      }}
      />
    </div>),
    createData('About you', 'Quiz', 'Draft','11/02/2021; 1:20pm', 75, 
    <div>
      <PublishOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("publish")
        props.setModalId("1112")
      }}/>   
      <ArchiveOutlinedIcon 
        className="actionIcon"
        onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("archive");
        props.setModalId("1112")
      }}
      />
      <DeleteOutlinedIcon 
      className="actionIcon"
      onClick={()=>{
        props.setShowModal(true);
        props.setModalPage("delete")
        props.setModalId("1112")
      }}
      />
    </div>),
  ];
  
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('type');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
  

  function createData(title, type, status, created, reward, actions) {
    return { title, type, status, created, reward, actions };
  }
  
  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
    { id: 'created', numeric: false, disablePadding: false, label: 'Created' },
    { id: 'reward', numeric: true, disablePadding: false, label: 'Reward' },
    { id: 'actions', numeric: false, disablePadding: false, label: 'Actions' },
  ];
  
  function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all titles' }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  const propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  
  const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Quests
          </Typography>
        )}

        <button type="button" class="btn btn-elegant"><i class="far fa-file-archive pr-2"></i>Archive</button>
        <button type="button" class="btn btn-unique"><i class="far fa-trash-alt pr-2" aria-hidden="true"></i>Delete</button>

  
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search quests..."/>
        </div> 
  
        {/* {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )} */}
  
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  
  


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.title);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.title)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.title}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.title}
                      </TableCell>
                      <TableCell >{row.type}</TableCell>
                      <TableCell >{row.status}</TableCell>
                      <TableCell >{row.created}</TableCell>
                      <TableCell >{row.reward}</TableCell>
                      <TableCell >{row.actions}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={11} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 35]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={()=>{
          props.setShowModal(true);
          props.setModalPage("addquest")
        }}>
        <AddIcon />
        </Fab>
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}
