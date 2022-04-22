import type { NextPage } from 'next'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import styles from '../styles/Home.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// @ts-ignore
const Ali: NextPage = (props) => {
  return (
    <li><a href={props.href}>{props.children}</a></li>
  )
}

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Paper elevation={2}>
          <h1 className='padded'>
              Welcome to Learn Scraping By Doing!
          </h1>
        </Paper>
        <Paper className='padded' elevation={2}>
          <h2>Contents</h2>
          <ol>
            <Ali href="#requirements">Requirements</Ali>
            <Ali href="#setup">Setup</Ali>
          </ol>
        </Paper>
        <Paper elevation={2} className='padded' id="Requirements">
          <h2>Requirements to complete this tutorial</h2>
          <ul>
            <li>
              A device with <a href='https://python.org' target={"_blank"} rel='noreferrer'>python</a> installed
            </li>
          </ul>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default Home
