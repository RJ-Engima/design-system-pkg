import React, {useEffect, useState} from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link, Outlet, useLocation } from "react-router-dom";
import { imageListClasses, ListItemSecondaryAction } from "@mui/material";
import { display } from "@mui/system";
import "./sidebar.css";
import Alert from '../Alert/Alert';
import '../../assets/css/icons.css';


const drawerWidth = 256;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Sidebar({
  NewArray,
  maintext,
  mainimg,
  mainClass,
  footerlogo,
  footerclass,
  footerimg,
  footerlogotext,
  powertext,
  SidebarCollapse,
  MenuCollapse,
  outlet,
  className,
  target,  // listitem  link target _self or _blank
  navBar
}) {
  // active state
  const [active, SetActive] = React.useState("");

  let location = useLocation()
  const { pathname } = location;

  // menu
  const [menu, setMenu] = React.useState(false);
  const [menuId, setMenuId] = React.useState();
  const [menuHover, setMenuHover] = useState(false)
  // icon spinner
  const [icons, setIcons] = React.useState(false);

  // React.useEffect(() => {
  //   if (!MenuCollapse) {
  //     const firstItemId = NewArray[0].id;
  //     handleMenu(firstItemId);
  //   }
  // }, [MenuCollapse])

  const handleMenu = (index) => {
    setMenu(!menu);
    setMenuId(index);
    menuId === index ? setMenu(!menu) : setMenu(true)

  }
  useEffect(()=>{
    open === false ? setMenuHover(true) : setMenuHover(false)
  },[menuId, menuHover])
  // menu
  const [hover, setHover] = React.useState(false)

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const onHover = (index) => {
    setMenuId(index);
    setMenu(true)
  }
  const onHoverOff = () => {
    setMenuId("");
    setMenu(false)
  }
  const handleActive = (e) => {
    SetActive(e);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Drawer
          </Typography>
        </Toolbar>
      </AppBar>  */}
      <Drawer variant="permanent" open={open} className={`dls-sidebar ${className} ${open === false ? "collapsed" : ""}` } >
        <DrawerHeader className="sidebar-header">
          {open || hover ? (
            <Box className="header-content">
              <Box
                className="main-logo"
                style={{ marginRight: "auto", marginLeft: "10px " }}
              >
                <img src={mainimg} />
              </Box>
              {open || hover ? (
                <Typography className={mainClass} variant="body1">
                  {maintext}
                </Typography>
              ) : null}
            </Box>
          ) : (
            <Box className="header-content" style={{ margin: "auto" }}>
              <Box className="main-logo">
                <img src={mainimg} />
              </Box>
              {open ? (
                <Typography className="main-text" variant="body1">
                  {maintext}
                </Typography>
              ) : null}
            </Box>
          )}

          {open === true ? (
            <div
              className="left-icon"
              onClick={() => SidebarCollapse ? setOpen(!open) : console.log('Boolean value is false')}
            >
              <i className="icon-Line-Arrow-Chevron-Left"></i>
            </div>
          ) : (
            <div
              className="left-icon"
              onClick={() => SidebarCollapse ? setOpen(!open) : console.log('Boolean value is false')}
            >
              <i className="icon-Line-Arrow-Chevron-Right"></i>
            </div>
          )}
        </DrawerHeader>
        <Divider style={{ height: "1px", backgroundColor: "#4D4E50" }} />
        {/* <MenuList> */}
        <List>
          {NewArray.map((item, index) => {
            return (
              <>
                <div className={`${item.title ? "navMenu_wrapper": ""}`}

                >
                  {item.title ?
                    <span className="navlist_title">{item.title}</span>
                    :""
                }
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{ display: "block" }}

                    >
                    <Link
                      style={{ textDecoration: 'none', color: 'inherit', display: "flex", width: "100%", alignItems:"center" }} to={item.link}
                      className={ `${menu && menuId === index ? "collapse":""} ${pathname === item.link ? "active" : "noactive"}`}
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 44,
                            justifyContent: open ? "initial" : "center",
                            px: 2,
                            pointerEvents: open ? "auto" : "auto",
                          }}
                          onClick={() => {
                            handleMenu(index)
                          }}
                          onMouseEnter={()=>{
                            open === false ? onHover(index) : ""
                          }}
                          onMouseLeave={()=>{
                            open === false ? onHoverOff() : ""
                          }}

                          style={item.icon &&open===false && hover===false ? {transition: "all 0.5ms ease"}:{paddingLeft:"15px",transition: "all 0.5ms ease"}}
                        >
                          {item.icon ?
                          <div className={open === false ? "iconWrapper" : ""}
                          >
                            {item.icon ? item.icon : ''}

                          </div>
                          : ""
                        }
                          <ListItemText primary={item.menu} className={ open===false ? "text-ellipsed" : ""} style={item.icon && open===false && hover===false ? {display:"none"}:{display:"block"}} />
                        </ListItemButton>
                      {item.subMenu ?
                        (open === true ? (
                          <article
                            onClick={() => handleMenu(index)}
                          >
                            {menu && menuId === index ? (
                              <i className="icon icon-Line-Arrow-Chevron-Down"></i>
                            ) : (
                              <i className="icon icon-Line-Arrow-Chevron-Up"></i>
                            )}
                          </article>
                        ) : (
                          <article style={{ display: "none" }} >
                            {menu && menuId === index ? (
                              <i className="icon icon-Line-Arrow-Chevron-Down"></i>
                            ) : (
                              <i className="icon icon-Line-Arrow-Chevron-Up"></i>
                            )}
                          </article>
                        ))
                        : ""

                      }

                    </Link>
                  {
                    item.subMenu ?
                    <Collapse in={menu && menuId === index} timeout="auto"
                      onMouseEnter={()=>{
                        open === false ? onHover(index) : ""
                      }}
                      onMouseLeave={()=>{
                        open === false ? onHoverOff() : ""
                      }}
                    >
                      <List component="div" disablePadding>
                        {item.subMenu ? item.subMenu.map((val) => {
                          return (
                            <>
                            <Link style={{ textDecoration: 'none', color: 'inherit',display:"flex" }} to={val.link} target={target}
                              className={pathname === val.link ? "active" : "noactive"}
                            >

                              <ListItemText
                                onClick={() => handleActive(val)}
                                primary={val.title} className={open===false ? "text-ellipsed" : ""} style={val.icon && open===false && hover===false ? {opacity:0}:{opacity:1}}
                              >
                                {val.list}
                              </ListItemText>
                            </Link>
                            </>
                          );
                        }) : ""}
                      </List>
                    </Collapse>
                    : ""
                  }
                  </ListItem>
                </div>
              </>
            );
          })}
        </List>
        {/* </MenuList> */}
      </Drawer>
      <Box component="main" open={hover} sx={{ flexGrow: 1 }}>
        {/* <DrawerHeader /> */}
        {navBar}
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Sidebar;