<div className="Navbar">
<Box sx={{ display: "flex" }}>
  <CssBaseline />
  <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      {/* VJTI Logo */}
      <img
        src={VJTI_logo}
        alt="VJTI Logo"
        style={{ height: "40px", marginRight: "10px" }}
      />
      <Typography variant="h6" noWrap component="div">
        Portal VJTI
      </Typography>
    </Toolbar>
  </AppBar>

  <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    aria-label="mailbox folders"
  >
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onTransitionEnd={handleDrawerTransitionEnd}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      {drawer}
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      {drawer}
    </Drawer>
  </Box>
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      p: 3,
      width: { sm: `calc(100% - ${drawerWidth}px)` },
    }}
  >
    <Toolbar />
  </Box>
</Box>
</div>

<div className="layout">
<button
  onClick={() => setIsOpen(!isOpen)}
  className="flex float-right px-3  rounded  hover:text-black-400"
>
  <svg
    className={`fill-current float-right h-3 w-3 ${
      isOpen ? "hidden" : "block"
    }`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
  <svg
    className={`fill-current h-3  ${isOpen ? "block" : "hidden"}`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
  </svg>
</button>
<div className="sidebar">
  <div
    className={`w-15 block pr-4 flex-grow  lg:flex lg:items-center lg:w-auto ${
      isOpen ? "block" : "hidden"
    }`}
  >
    <hr />
    <div className="lg:flex-grow left-0">
      <div className="">
        {SidebarMenu.map((menu) => {
          const isActive = location.pathname === menu.path;
          return (
            <div
              key={menu.path} // Add the key prop here
              className={`menu-item ${
                isActive && "active"
              } flex flex-row w-full md:py-0 `}
            >
              <i className={menu.icon}></i>
              <Link to={menu.path}>{menu.name}</Link>
            </div>
          );
        })}

        <div className={`menu-item `} onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket "></i>
          <Link to="/login">Logout</Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="content">
  <div className="header">
    <div className="header-content" style={{ cursor: "pointer" }}>
      <Badge
        count={user && user.notifcation.length}
        onClick={() => {
          navigate("/notification");
        }}
      >
        <i class="fa-solid fa-bell"></i>
      </Badge>
      <Link to="/">{user?.name}</Link>
    </div>
  </div>
  <div className="body">{children}</div>
</div>
</div>