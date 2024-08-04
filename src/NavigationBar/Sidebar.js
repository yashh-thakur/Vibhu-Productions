// src/components/Layout.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, IconButton, Typography, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {['Home', 'Portfolio', 'About', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="flex">
      <CssBaseline />
      <AppBar position="fixed" className="z-10">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="mr-2 lg:hidden"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Vibhu Production
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className="lg:w-60">
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '64px' },
          }}
        >
          {drawer}
        </Drawer>
        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '64px' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </nav>
      <main className="flex-grow mt-16 lg:ml-60">
        {children}
      </main>
    </div>
  );
};

export default Layout;
