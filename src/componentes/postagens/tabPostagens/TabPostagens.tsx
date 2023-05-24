import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ListaPostagens from '../listaPostagens/ListaPostagens';


function TabPostagens() {
  const [value, setValue] = React.useState('1');

  
  const handleChange= (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div >
      <TabContext value={value} >
        <AppBar position="static" className='navbar'>
          <TabList onChange={handleChange} aria-label="simple tabs example" style={{margin: '0 auto'}}   >
            <Tab label="Postagens" value="1" />
            <Tab label="Sobre" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1"><ListaPostagens /></TabPanel>
        <TabPanel value="2">
         mensagens legais e maneiras
        </TabPanel>
        
      </TabContext>
    </div>
  )
}

export default TabPostagens