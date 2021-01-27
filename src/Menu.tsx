import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) => createStyles({
  hamburger: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: 11
  },
  menuContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    transition: 'left 300ms',
    display: 'flex',
    zIndex: 10
  }, 
  menuContent: {
    paddingTop: '4em',
    height: '100%',
    width: '30%',
    background: '#ecedf0',
    padding: '0.5em'
  },
  menuExit: {
    height: '100%',
    width: '70%'
  },
  button: {
    display: 'block',
    marginBottom: '0.5em'
  },
  link: {
    textDecoration: 'none',
    color: '#3f51b5'
  }
}))

const MenuComponent = ({ routes }) => {

  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenuOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <IconButton className={classes.hamburger} onClick={toggleMenuOpen}>
        <MenuIcon />
      </IconButton>
      <div className={classes.menuContainer} style={{ left: isOpen ? '0%' : '-100%' }}>
        <div className={classes.menuContent}>
          {routes.map(route => (
            <Button fullWidth className={classes.button} color="primary" variant="outlined" key={route.path}>
              <Link className={classes.link} to={route.path}>{route.title}</Link>
            </Button>
          ))}
        </div>
        <div className={classes.menuExit} onClick={toggleMenuOpen} />
      </div>
    </>
  )
}

export default MenuComponent;