import logo from './logo.svg';
import './App.css';
import { AppBar, Container,ThemeProvider, Toolbar, Box, Chip, Typography, Paper, Grid, Button, ButtonGroup, Link, colors,createTheme, createMuiTheme, TextField, FormControl, InputLabel, OutlinedInput, } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import { AlignHorizontalCenter, AlignHorizontalRight, AlignVerticalCenter, FontDownload, VerticalAlignCenter } from '@mui/icons-material';
import {makeStyles} from '@material-ui/core';
import GlobalStyles from '@mui/material/GlobalStyles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import * as React from 'react';
import { bgcolor, color, display, fontFamily, fontSize, height, spacing, width } from '@mui/system';
import { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({

}));

function App() {
  const classes = useStyles(); 
  const theme = createTheme({
    typography: {
      fontFamily:[ '"Exo 2"','sans-serif'].join(',')
    }
  });
  const [email,setEmail] = React.useState(''); //стейт для емейла
  const [password, setPassword] = React.useState(''); //стейт для пароля

  return (
    <>
    {/* Header */}
    <ThemeProvider theme={theme}>
      <main container sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        fontFamily:'Exo 2'
      }}>
        <Grid container flexDirection='column'>
          <Grid item xs='12' lg='12'>
            <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '548px',
                    left: '0',
                    background: 'linear-gradient(92.17deg, #210C9F 0.13%, #0C0439 98.17%)'
              }}>
                <Box sx={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center'
                }}>
                  <Box sx={{
                    width:'90%',
                    height:{
                      xs:'500px',
                      md:'114px'
                    },
                    mt:'30px',
                    bgcolor:'#FFFFFF',
                    borderRadius:'40px',
                    display:'flex',
                    alignItems:'center'
                  }}>
                    <Grid container flexDirection='row' spacing={4}>
                      <Grid item xl={3} lg={3} md={3} sm={3} xs={10}>
                        <Box sx={{
                          ml:'50px'
                        }}>
                          <Typography style={{
                                width: '126px',
                                height: '59px',
                                fontFamily: 'Mplus 1p Bold',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '40px',
                                lineHeight: '59px',
                                color: '#000000',
                                top:'20%',
                                display:'inline-block',
                                paddingRight:'44%'
                          }}>Sellfin</Typography>
                        </Box>
                      </Grid>
                      <Grid item xl={7} lg={7} md={7} sm={7} xs={10}>
                        <Box sx={{
                          display:'flex',
                          flexDirection:'row',
                          justifyContent:'flex-end',
                          height:'100%',
                          alignItems:'center',
                          ml:'40px'
                        }}>
                          <Link href="#" underline="none">
                            <Typography style={{
                              fontFamily:' Exo 2',
                              color:'#000000',
                              fontSize: '30px',
                              fontWeight: '200',
                              lineHeight: '32.7px',
                              textAlign: 'left',
                            }}>Инструменты</Typography>
                          </Link>
                          <Link href="#" underline="none">
                            <Typography style={{
                              fontFamily:' Exo 2',
                              fontSize: '30px',
                              color:'#000000',
                              fontWeight: '200',
                              lineHeight: '32.7px',
                              textAlign: 'left',
                              paddingLeft:'15px',
                              paddingRight:'15px'
                            }}>Тарифы</Typography>
                          </Link>
                          <Link href="#" underline="none">
                            <Typography style={{
                              fontFamily:' Exo 2',
                              fontSize: '30px',
                              color:'#000000',
                              fontWeight: '200',
                              lineHeight: '32.7px',
                              textAlign: 'left',
                            }}>Контакты</Typography>
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item lg={2} md={2} sm={2} xs={10} ml='20px'>
                        <Box sx={{
                          width:'100%',
                          display:'flex',
                          justifyContent:'flex-start',
                        }}>
                          <Button style={{
                            width: '169px',
                            height: '58px',
                            border:' 4px solid #1400FF',
                            borderRadius: '14px',
                            fontFamily: 'Exo 2',
                            fontSize: '24px',
                            fontWeight: '600',
                            lineHeight: '28.8px',
                            textAlign: 'left',
                            mr:'20px'
                          }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21" stroke="#1400FF" stroke-width="2" stroke-linecap="round"/>
                            <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" stroke="#1400FF" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <Typography>
                              Войти
                            </Typography>
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{
                    width:'90%',
                    height:'90vh',
                    bgcolor:'#FFFFFF',
                    borderRadius:'40px',
                    mt:'30px'
                  }}>
                    <Grid container flexDirection='row'>
                      <Grid item xs={12} md={6}>
                        <Box sx={{
                          display:'flex',
                          width:'100%',
                          height:'60vh',
                          flexDirection:'column',
                          mt:'80px',
                          ml:'60px',

                        }}>
                          <Box sx={{
                          }}>
                            <Typography style={{
                              fontFamily: 'Exo 2',
                              fontSize: '50px',
                              fontWeight: '700',
                              lineHeight: '54.5px',
                              textAlign: 'left',
                              color:'#545454',
                            }}>Финансовая CRM система для маркетплейсов</Typography>
                          </Box>
                          <Box sx={{mt:'60px'}}>
                            <Typography style={{
                              fontFamily:'Exo 2',
                              fontSize: '35px',
                              fontWeight: '400',
                              lineHeight: '38.15px',
                              textAlign: 'left',
                              width:'430px',
                              textWrap:'wrap'
                            }}>
                              Комплексный инструмент для работы с финансами на маркетплейсах
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs='12' md='6' alignItems='center'>
                        <Box sx={{
                          height:'65vh',
                          width:'100%',
                          display:'flex',
                          justifyContent:'center',
                          alignItems:'flex-end'
                        }}> 
                          <Box sx={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            height:'auto',
                            width:'100%'
                          }}>
                            <Box 
                              component="img"
                              sx={{
                                height: '90%',
                                width: '90%',
                                justifyContent:'flex-end',
                                alignItems:'center',
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                              }}
                              alt="Picture"
                              src="https://sun9-21.userapi.com/impg/nKXyw8n_94uySpRGHQFaLjZ67s2EN1LarfUJrQ/W-5tGfhEihw.jpg?size=860x522&quality=96&sign=dfcfdfe42b2dee35ffc3e0eb2892dee4&c_uniq_tag=-ZoW-tts27gXMsvRI7GBsYX2jiThmtXpgHEEZgWMX3w&type=album"
                            />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box sx={{
                      marginTop:'30px',
                      marginLeft:'60px',
                      display:'flex',
                      alignItems:'flex-end',
                      flexDirection:'row',
                    }}>
                      <Button style={{
                        width: '350px',
                        height: '100px',
                        borderRadius: '23px',
                        backgroundColor:'#3300FF',
                        color:'#FFFFFF',
                        fontFamily: 'Exo 2',
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight: '32.7px',
                        textAlign: 'left',               
                      }}>
                        Демо версия
                      </Button>
                      <Box sx={{
                        marginLeft:'30px'
                      }}>
                        <Button style={{
                          width: '350px',
                          height: '100px',
                          borderRadius: '23px',
                          backgroundColor:'#4A4A4A',
                          color:'#FFFFFF',
                          fontFamily: 'Exo 2',
                          fontSize: '30px',
                          fontWeight: '700',
                          lineHeight: '32.7px',
                          textAlign: 'left',               
                        }}>
                          Регистрация
                        </Button>
                      </Box>
                    </Box>
                    <Box sx={{
                      ml:'60px',
                      mt:'10px'
                    }}>
                      <Typography style={{
                        fontFamily:' Exo 2',
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '21.8px',
                        textAlign: 'left',                  
                      }}>
                        Получите демо-доступ для знакомства с системой
                      </Typography>
                    </Box>
                  </Box>
                </Box>
            </div>
          </Grid>
        
        {/* About block */}

          <Grid item xs='12' lg='12'>

            <Box sx={{
              width:'100%',
              height:'100vh',
              marginTop:'120vh'
            }}>
              <Box sx={{
                display:'flex',
                justifyContent:'center'
              }}>
                <Typography style={{
                  fontFamily: 'Exo 2',
                  fontSize: '40px',
                  fontWeight: '700',
                  lineHeight: '54.5px',
                  textAlign: 'left',
                  color:'#545454',
                }}>Чем сможет помочь система sellfin.ru?</Typography>
              </Box>
              <Grid container direction='row'>
                <Grid item xs='10'>
                  <Grid container direction='row'>
                    <Grid item xs={2}>
                        <svg width="100%" height="100%" viewBox="0 0 218 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M191.167 204C191.167 211.364 197.136 217.333 204.5 217.333C211.864 217.333 217.833 211.364 217.833 204C217.833 196.636 211.864 190.667 204.5 190.667C197.136 190.667 191.167 196.636 191.167 204ZM-7.2046 6.67334C-6.74645 7.97582 -5.31917 8.66028 -4.01669 8.20213C-2.7142 7.74398 -2.02974 6.31671 -2.48789 5.01422L-7.2046 6.67334ZM1.07152 14.6103C0.570593 13.3237 -0.878515 12.6867 -2.16515 13.1877C-3.45179 13.6886 -4.08873 15.1377 -3.58781 16.4243L1.07152 14.6103ZM0.319747 26.0385C0.857841 27.3101 2.32484 27.9046 3.59638 27.3665C4.86793 26.8285 5.4625 25.3615 4.92441 24.0899L0.319747 26.0385ZM9.05515 33.493C8.48305 32.2364 7.00059 31.6815 5.74398 32.2535C4.48737 32.8256 3.93246 34.3081 4.50455 35.5647L9.05515 33.493ZM8.93055 44.9638C9.53462 46.2053 11.0308 46.7221 12.2724 46.1181C13.5139 45.514 14.0307 44.0178 13.4266 42.7763L8.93055 44.9638ZM18.0206 51.9263C17.3858 50.7002 15.8772 50.2208 14.6511 50.8556C13.425 51.4904 12.9456 52.9989 13.5804 54.2251L18.0206 51.9263ZM18.4628 63.3768C19.1277 64.5869 20.6476 65.0288 21.8577 64.3639C23.0678 63.699 23.5097 62.179 22.8448 60.969L18.4628 63.3768ZM27.8936 69.8931C27.1988 68.6999 25.6683 68.2959 24.4752 68.9907C23.282 69.6855 22.878 71.216 23.5728 72.4091L27.8936 69.8931ZM28.9089 81.313C29.6337 82.4883 31.1739 82.8535 32.3491 82.1287C33.5243 81.404 33.8895 79.8638 33.1648 78.6886L28.9089 81.313ZM38.6585 87.3454C37.9035 86.1894 36.3544 85.8642 35.1983 86.6191C34.0423 87.374 33.7171 88.9232 34.472 90.0792L38.6585 87.3454ZM40.2649 98.6976C41.0505 99.8331 42.6078 100.117 43.7432 99.3311C44.8787 98.5455 45.1623 96.9882 44.3767 95.8528L40.2649 98.6976ZM50.323 104.199C49.5061 103.086 47.9416 102.845 46.8284 103.662C45.7152 104.479 45.475 106.044 46.2918 107.157L50.323 104.199ZM52.5579 115.443C53.4067 116.532 54.9776 116.727 56.0666 115.878C57.1556 115.03 57.3504 113.459 56.5016 112.37L52.5579 115.443ZM62.9178 120.351C62.0363 119.288 60.4602 119.141 59.3975 120.023C58.3349 120.904 58.188 122.48 59.0696 123.543L62.9178 120.351ZM65.8334 131.438C66.7485 132.472 68.3285 132.568 69.3624 131.653C70.3962 130.738 70.4925 129.158 69.5773 128.124L65.8334 131.438ZM76.4861 135.67C75.5365 134.668 73.9541 134.625 72.9518 135.575C71.9496 136.524 71.9069 138.107 72.8565 139.109L76.4861 135.67ZM80.146 146.534C81.131 147.501 82.7139 147.487 83.6814 146.502C84.649 145.517 84.6349 143.935 83.6499 142.967L80.146 146.534ZM91.0743 149.99C90.0532 149.061 88.4721 149.135 87.5427 150.156C86.6133 151.177 86.6877 152.759 87.7088 153.688L91.0743 149.99ZM95.5508 160.543C96.6086 161.431 98.1855 161.292 99.0728 160.235C99.9601 159.177 99.8218 157.6 98.764 156.713L95.5508 160.543ZM106.722 163.104C105.627 162.263 104.058 162.469 103.217 163.564C102.376 164.659 102.582 166.229 103.677 167.069L106.722 163.104ZM112.089 173.232C113.222 174.022 114.78 173.745 115.57 172.613C116.36 171.48 116.083 169.922 114.95 169.132L112.089 173.232ZM123.447 174.761C122.278 174.027 120.735 174.38 120 175.549C119.266 176.718 119.619 178.262 120.788 178.996L123.447 174.761ZM129.77 184.32C130.976 184.994 132.499 184.562 133.172 183.356C133.845 182.151 133.413 180.628 132.208 179.955L129.77 184.32ZM141.224 184.675C139.984 184.069 138.486 184.582 137.88 185.822C137.273 187.063 137.787 188.56 139.027 189.167L141.224 184.675ZM148.544 193.494C149.816 194.029 151.282 193.431 151.817 192.158C152.352 190.885 151.755 189.42 150.482 188.884L148.544 193.494ZM159.962 192.546C158.66 192.087 157.233 192.771 156.774 194.073C156.315 195.376 156.999 196.803 158.301 197.262L159.962 192.546ZM168.272 200.436C169.6 200.814 170.983 200.044 171.361 198.716C171.739 197.388 170.969 196.005 169.641 195.627L168.272 200.436ZM179.488 198.1C178.139 197.806 176.807 198.661 176.514 200.011C176.22 201.36 177.075 202.691 178.424 202.985L179.488 198.1ZM188.719 204.886C190.084 205.094 191.358 204.155 191.566 202.79C191.773 201.425 190.834 200.15 189.469 199.943L188.719 204.886ZM199.546 201.144C198.171 201.025 196.959 202.043 196.84 203.418C196.72 204.794 197.738 206.006 199.114 206.125L199.546 201.144ZM-8.87353 1.78509C-8.34707 3.37671 -7.79072 5.00704 -7.2046 6.67334L-2.48789 5.01422C-3.06391 3.37664 -3.61012 1.77596 -4.12647 0.21491L-8.87353 1.78509ZM-3.58781 16.4243C-2.37486 19.5398 -1.07218 22.7493 0.319747 26.0385L4.92441 24.0899C3.55104 20.8446 2.26661 17.6799 1.07152 14.6103L-3.58781 16.4243ZM4.50455 35.5647C5.90798 38.6474 7.38342 41.7839 8.93055 44.9638L13.4266 42.7763C11.8982 39.6349 10.441 36.537 9.05515 33.493L4.50455 35.5647ZM13.5804 54.2251C15.1461 57.2494 16.7737 60.3028 18.4628 63.3768L22.8448 60.969C21.1758 57.9316 19.5677 54.9146 18.0206 51.9263L13.5804 54.2251ZM23.5728 72.4091C25.2959 75.3681 27.0746 78.3385 28.9089 81.313L33.1648 78.6886C31.353 75.7507 29.5959 72.8164 27.8936 69.8931L23.5728 72.4091ZM34.472 90.0792C36.3512 92.9569 38.2823 95.8319 40.2649 98.6976L44.3767 95.8528C42.42 93.0247 40.5139 90.1867 38.6585 87.3454L34.472 90.0792ZM46.2918 107.157C48.3312 109.936 50.42 112.7 52.5579 115.443L56.5016 112.37C54.3941 109.666 52.3345 106.94 50.323 104.199L46.2918 107.157ZM59.0696 123.543C61.2763 126.203 63.531 128.837 65.8334 131.438L69.5773 128.124C67.3114 125.564 65.0915 122.971 62.9178 120.351L59.0696 123.543ZM72.8565 139.109C75.2392 141.624 77.6691 144.101 80.146 146.534L83.6499 142.967C81.217 140.577 78.829 138.143 76.4861 135.67L72.8565 139.109ZM87.7088 153.688C90.2759 156.025 92.89 158.312 95.5508 160.543L98.764 156.713C96.1564 154.525 93.5932 152.283 91.0743 149.99L87.7088 153.688ZM103.677 167.069C106.434 169.187 109.238 171.243 112.089 173.232L114.95 169.132C112.164 167.188 109.421 165.177 106.722 163.104L103.677 167.069ZM120.788 178.996C123.736 180.846 126.73 182.623 129.77 184.32L132.208 179.955C129.244 178.3 126.324 176.567 123.447 174.761L120.788 178.996ZM139.027 189.167C142.153 190.696 145.325 192.14 148.544 193.494L150.482 188.884C147.353 187.569 144.267 186.164 141.224 184.675L139.027 189.167ZM158.301 197.262C161.58 198.417 164.904 199.477 168.272 200.436L169.641 195.627C166.373 194.697 163.147 193.668 159.962 192.546L158.301 197.262ZM178.424 202.985C181.813 203.724 185.245 204.359 188.719 204.886L189.469 199.943C186.102 199.432 182.775 198.816 179.488 198.1L178.424 202.985ZM199.114 206.125C200.854 206.276 202.604 206.4 204.364 206.496L204.636 201.504C202.93 201.411 201.233 201.29 199.546 201.144L199.114 206.125Z" fill="#1400FF"/>
                        </svg>
                      </Grid>
                      <Grid item xs='2'>
                        <Box sx = {{
                          display:'flex',
                          justifyContent:'flex-end',
                          flexDirection: 'column',
                          height:'350px'
                        }}>
                          <Typography style={{
                            fontFamily: 'Exo 2',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '30px',
                            lineHeight: '109%',
                            paddingBottom:'10px'
                          }}>Работа с финансовыми отчетами</Typography>
                          <Typography style={{
                            fontFamily:'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '27.25px',
                            textAlign: 'left',
                          }}>Система поможет оцифровать финансовые отчеты с доступных маркетплейсов</Typography>
                        </Box>
                      </Grid> 
                      <Grid item xs='2'>
                        <Box sx = {{
                              display:'flex',
                              alignItems:'center',
                              height:'350px'
                            }}>
                          <svg width="100%" height="57.5%" viewBox="0 0 240 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M236.698 7.75155C238.069 7.91822 239.315 6.94223 239.482 5.57162C239.648 4.201 238.672 2.95478 237.302 2.78811L236.698 7.75155ZM6.80754 133.136C7.24017 131.825 6.52796 130.411 5.21678 129.979C3.9056 129.546 2.49196 130.258 2.05933 131.57L6.80754 133.136ZM5.48763 122.29C4.96629 123.569 5.58009 125.028 6.85859 125.549C8.1371 126.071 9.59616 125.457 10.1175 124.178L5.48763 122.29ZM14.0134 115.4C14.6104 114.155 14.0851 112.662 12.8402 112.065C11.5952 111.468 10.102 111.993 9.50495 113.238L14.0134 115.4ZM14.0253 104.448C13.3607 105.658 13.803 107.178 15.0132 107.843C16.2234 108.507 17.7433 108.065 18.4079 106.855L14.0253 104.448ZM23.2617 98.543C23.9888 97.3692 23.6266 95.8283 22.4528 95.1012C21.279 94.3742 19.7381 94.7364 19.011 95.9102L23.2617 98.543ZM24.414 87.6628C23.6285 88.7983 23.9122 90.3556 25.0477 91.1411C26.1832 91.9266 27.7404 91.6429 28.526 90.5074L24.414 87.6628ZM34.2015 82.7268C35.0428 81.632 34.8372 80.0625 33.7423 79.2212C32.6475 78.38 31.078 78.5856 30.2367 79.6804L34.2015 82.7268ZM36.4523 71.9939C35.5578 73.0456 35.6853 74.6234 36.737 75.5179C37.7888 76.4125 39.3665 76.285 40.2611 75.2332L36.4523 71.9939ZM46.6648 68.0705C47.6102 67.0642 47.5609 65.4821 46.5546 64.5367C45.5483 63.5913 43.9662 63.6406 43.0208 64.6468L46.6648 68.0705ZM49.9515 57.6272C48.9573 58.5854 48.9281 60.168 49.8863 61.1622C50.8444 62.1563 52.427 62.1855 53.4212 61.2274L49.9515 57.6272ZM60.5128 54.7254C61.5535 53.818 61.6615 52.2388 60.754 51.1981C59.8466 50.1575 58.2674 50.0495 57.2267 50.9569L60.5128 54.7254ZM64.8284 44.6559C63.7437 45.5102 63.5568 47.082 64.4111 48.1667C65.2653 49.2515 66.8372 49.4383 67.9219 48.5841L64.8284 44.6559ZM75.6299 42.8211C76.7561 42.0223 77.0216 40.4618 76.2228 39.3356C75.424 38.2094 73.8635 37.944 72.7373 38.7427L75.6299 42.8211ZM80.9329 33.2337C79.768 33.975 79.4247 35.5202 80.1659 36.6851C80.9072 37.8499 82.4525 38.1933 83.6173 37.452L80.9329 33.2337ZM91.8631 32.49C93.0635 31.8079 93.4837 30.2818 92.8016 29.0813C92.1195 27.8809 90.5934 27.4607 89.3929 28.1428L91.8631 32.49ZM98.094 23.4811C96.8611 24.1027 96.3657 25.6061 96.9874 26.839C97.609 28.0718 99.1124 28.5673 100.345 27.9456L98.094 23.4811ZM109.041 23.8262C110.303 23.2658 110.871 21.7886 110.311 20.5267C109.751 19.2648 108.273 18.6961 107.012 19.2565L109.041 23.8262ZM116.121 15.4734C114.833 15.9721 114.193 17.42 114.692 18.7076C115.191 19.9951 116.639 20.6346 117.926 20.136L116.121 15.4734ZM126.978 16.8759C128.288 16.439 128.996 15.023 128.559 13.7132C128.122 12.4035 126.706 11.696 125.396 12.133L126.978 16.8759ZM134.814 9.23259C133.485 9.6084 132.713 10.9901 133.089 12.3187C133.464 13.6472 134.846 14.4196 136.175 14.0438L134.814 9.23259ZM145.494 11.6344C146.838 11.3188 147.672 9.97339 147.357 8.62921C147.041 7.28504 145.696 6.45115 144.351 6.76668L145.494 11.6344ZM153.989 4.72686C152.632 4.98333 151.74 6.29105 151.997 7.64773C152.253 9.00441 153.561 9.89631 154.918 9.63984L153.989 4.72686ZM164.429 8.05044C165.795 7.85151 166.742 6.58264 166.543 5.21633C166.344 3.85003 165.075 2.90368 163.709 3.1026L164.429 8.05044ZM173.497 1.88187C172.123 2.02498 171.126 3.25426 171.269 4.62754C171.412 6.00081 172.642 6.99805 174.015 6.85493L173.497 1.88187ZM183.648 6.04243C185.026 5.95313 186.071 4.7638 185.981 3.38598C185.892 2.00816 184.703 0.9636 183.325 1.0529L183.648 6.04243ZM193.119 0.602528C191.739 0.640431 190.651 1.79002 190.688 3.17022C190.726 4.55041 191.876 5.63855 193.256 5.60064L193.119 0.602528ZM202.897 5.50936C204.277 5.52074 205.406 4.41071 205.417 3.03005C205.428 1.64938 204.318 0.520905 202.938 0.509526L202.897 5.50936ZM212.781 0.760233C211.401 0.70168 210.236 1.77249 210.177 3.15196C210.118 4.53143 211.189 5.69718 212.569 5.75574L212.781 0.760233ZM222.253 6.32661C223.63 6.43016 224.83 5.39798 224.933 4.02115C225.037 2.64433 224.005 1.44425 222.628 1.34069L222.253 6.32661ZM232.359 2.22482C230.986 2.07889 229.755 3.07361 229.609 4.44659C229.463 5.81956 230.458 7.05088 231.831 7.19681L232.359 2.22482ZM5.40342 137.688C5.8264 136.211 6.29413 134.692 6.80754 133.136L2.05933 131.57C1.52576 133.187 1.0384 134.769 0.596578 136.312L5.40342 137.688ZM10.1175 124.178C11.2793 121.329 12.5766 118.396 14.0134 115.4L9.50495 113.238C8.02561 116.323 6.68774 119.347 5.48763 122.29L10.1175 124.178ZM18.4079 106.855C19.9131 104.114 21.5302 101.339 23.2617 98.543L19.011 95.9102C17.2333 98.7804 15.5723 101.631 14.0253 104.448L18.4079 106.855ZM28.526 90.5074C30.3186 87.9161 32.2098 85.319 34.2015 82.7268L30.2367 79.6804C28.1936 82.3395 26.2534 85.0039 24.414 87.6628L28.526 90.5074ZM40.2611 75.2332C42.3056 72.8293 44.4396 70.4388 46.6648 68.0705L43.0208 64.6468C40.7384 67.0761 38.5495 69.5281 36.4523 71.9939L40.2611 75.2332ZM53.4212 61.2274C55.7012 59.03 58.0646 56.8602 60.5128 54.7254L57.2267 50.9569C54.715 53.1471 52.2904 55.3731 49.9515 57.6272L53.4212 61.2274ZM67.9219 48.5841C70.4126 46.6226 72.9815 44.6995 75.6299 42.8211L72.7373 38.7427C70.0199 40.6701 67.384 42.6434 64.8284 44.6559L67.9219 48.5841ZM83.6173 37.452C86.2921 35.7498 89.0403 34.094 91.8631 32.49L89.3929 28.1428C86.497 29.7883 83.6773 31.4872 80.9329 33.2337L83.6173 37.452ZM100.345 27.9456C103.175 26.5189 106.073 25.1441 109.041 23.8262L107.012 19.2565C103.968 20.6078 100.996 22.0177 98.094 23.4811L100.345 27.9456ZM117.926 20.136C120.879 18.9923 123.896 17.9042 126.978 16.8759L125.396 12.133C122.239 13.1863 119.147 14.3012 116.121 15.4734L117.926 20.136ZM136.175 14.0438C139.222 13.182 142.328 12.3776 145.494 11.6344L144.351 6.76668C141.112 7.52708 137.933 8.35024 134.814 9.23259L136.175 14.0438ZM154.918 9.63984C158.033 9.05091 161.203 8.52008 164.429 8.05044L163.709 3.1026C160.413 3.58234 157.174 4.12478 153.989 4.72686L154.918 9.63984ZM174.015 6.85493C177.175 6.52555 180.386 6.25384 183.648 6.04243L183.325 1.0529C179.998 1.26849 176.722 1.54568 173.497 1.88187L174.015 6.85493ZM193.256 5.60064C196.424 5.51366 199.637 5.48249 202.897 5.50936L202.938 0.509526C199.619 0.482174 196.346 0.513893 193.119 0.602528L193.256 5.60064ZM212.569 5.75574C215.754 5.89096 218.982 6.08061 222.253 6.32661L222.628 1.34069C219.304 1.09066 216.021 0.897789 212.781 0.760233L212.569 5.75574ZM231.831 7.19681C233.443 7.3682 235.066 7.55304 236.698 7.75155L237.302 2.78811C235.644 2.58658 233.997 2.39888 232.359 2.22482L231.831 7.19681Z" fill="#1400FF"/>
                          </svg>
                        </Box>
                      </Grid> 
                      <Grid item xs='2'>
                        <Box sx = {{
                            display:'flex',
                            justifyContent:'center',
                            flexDirection: 'column',
                            height:'350px'
                          }}>
                            <Typography style={{
                            fontFamily: 'Exo 2',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '30px',
                            lineHeight: '109%',
                            paddingBottom:'10px'
                          }}>Бухгалтерский учет</Typography>
                            <Typography style={{
                            fontFamily:'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '27.25px',
                            textAlign: 'left',
                          }}>Полное бухгалтерское введение с возможностью формирования налоговых отчетов для разных стран</Typography>
                        </Box>  
                      </Grid>  
                      <Grid item xs='2'>
                        <Box sx = {{
                                display:'flex',
                                alignItems:'center',
                                height:'350px'
                              }}>
                          <svg width="287" height="73" viewBox="0 0 287 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 12.0005C105 -38.9993 162.8 146.001 284 32.0005" stroke="#1400FF" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"/>
                          </svg>
                        </Box>
                      </Grid> 
                      <Grid item xs='2'>
                        <Box sx = {{
                            display:'flex',
                            justifyContent:'center',
                            flexDirection: 'column',
                            height:'350px'
                          }}>
                            <Box xs={{
                              display:'flex',
                              width:'100%',
                              height:'50px',
                              flexDirection:'row',
                            }}>
                              <Typography style={{
                            fontFamily: 'Exo 2',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '30px',
                            lineHeight: '109%',
                            paddingBottom:'10px',
                            color:'#7E7E7E',
                          }}>Складской учет</Typography>
                            </Box>
                            <Typography style={{
                            fontFamily:'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '27.25px',
                            textAlign: 'left',
                          }}>Складской учет с возможностью подключения систем FBS по API</Typography>
                        </Box>  
                      </Grid> 
                    </Grid>
                    <Box mt='70px'>
                    <Grid item xs={12}>
                      <Grid container flexDirection='row' spacing={2} alignSelf='flex-end'>
                        <Grid item xs={4}>
                          <Box sx = {{
                                  display:'flex',
                                  alignItems:'center',
                                  height:'350px'
                                }}>
                                <svg width="196.5%" height="100%" viewBox="0 0 497 253" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M494 133.5C399.167 207.5 196.4 322.3 144 189.5C91.6 56.7 215.833 20.3333 285 2.5C350.5 4 456.8 -4 354 82C251.2 168 34.1667 117.833 -61.5 82" stroke="#1400FF" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"/>
                                </svg>
                          </Box>                     
                        </Grid>
                        <Grid item xs={2}>
                          <Box sx = {{
                                display:'flex',
                                justifyContent:'center',
                                flexDirection: 'column',
                                height:'350px'
                              }}>
                                <Typography style={{
                            fontFamily: 'Exo 2',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '30px',
                            lineHeight: '109%',
                            paddingBottom:'10px'
                          }}>Аналитика продаж</Typography>
                          <Typography style={{
                            fontFamily:'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '27.25px',
                            textAlign: 'left',
                          }}>С помощью сервиса можно проанализировать продажи каждой позиции на каждом маркетплейсе</Typography>
                            </Box>  
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx = {{
                                  display:'flex',
                                  alignItems:'center',
                                  height:'350px'
                                }}>
                            <svg width="100%" height="100%" viewBox="0 0 482 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M465.844 140C507.675 68.3748 473.671 -53.3882 3 32.5621" stroke="#1400FF" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"/>
                            </svg>
                          </Box>                     
                        </Grid>
                        <Grid item xs={2}>
                          <Box sx = {{
                                display:'flex',
                                justifyContent:'flex-end',
                                flexDirection: 'column',
                                height:'350px'
                              }}>
                                <Typography style={{
                            fontFamily: 'Exo 2',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '30px',
                            lineHeight: '109%',
                            paddingBottom:'10px'
                          }}>CRM Системы</Typography>
                          <Typography style={{
                            fontFamily:'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '27.25px',
                            textAlign: 'left',
                          }}>Вся информация выведена в понятный графиках и таблицах</Typography>
                            </Box>  
                        </Grid>
                      </Grid>
                    </Grid>
                    </Box>
                </Grid>         
                <Grid item xs='2'>
                  <Box sx = {{
                            display:'flex',
                            alignItems:'flex-start',
                            justifyContent:'flex-end',
                            height:'100%',
                            mt:'50px',
                            flexDirection:'column'
                          }}>
                      <Box sx={{
                        fontFamily:'Exo 2',
                        fontSize:'30px',
                        fontWeight:'700',
                        lineHeight: '32.7px',
                        textAlign: 'left', 
                        color:'#1400FF',
                        maxWidth:'95px',
                        flexWrap:'wrap'
                      }}>
                        <Typography style={{
                            fontFamily: 'Exo 2',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '30px',
                            lineHeight: '109%',
                            paddingBottom:'10px'
                          }} width='50px'>SOON Скоро</Typography>
                      </Box>      
                      <svg width="100%" height="138%" viewBox="0 0 261 362" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M132.5 3C175 9.66667 259.5 50.8 257.5 162C255.5 273.2 157 313.5 107.5 292.5C83 279 67.2671 267.586 81 236C96 201.5 123 213 132.5 214.5C147 217.167 162.309 230.853 173.5 248.5C186.5 269 253 347 3 359" stroke="#1400FF" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"/>
                      </svg>
                    </Box>                 
                </Grid> 
              </Grid>
            </Box>
          </Grid>

          {/* интеграции по апи */}

          <Grid item xs='12'>
            <Box sx={{
                position:'absolute',
                width:'100%',
                bgcolor:'#250F63',
                height:'auto',
              }}>
                <Grid container flexDirection='row'>
                  <Grid item xs={6}>
                    <Box sx={{
                        display:'flex',
                        fontFamily: 'Exo 2',
                        fontSize: '75px',
                        fontWeight: '700',
                        textAlign: 'left', 
                        paddingLeft:'50px',
                        color:'#FFFFFF',           
                        alignSelf:'center',
                        paddingTop:'45px',
                        paddingBottom:'30px'
                    }}>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '30px',
                        lineHeight: '109%',
                        paddingBottom:'10px'
                      }}>Интеграции маркетплейсов по API</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{
                      display:'flex',
                      flexDirection:'column',      
                      color:'#5121D9',
                      textAlign:'right',
                      paddingTop:'10px'   
                    }}>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '30px',
                        lineHeight: '109%',
                        paddingBottom:'10px'
                      }}>01010101110100101001</Typography>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '30px',
                        lineHeight: '109%',
                        paddingBottom:'10px'
                      }}>101011000100101011100010</Typography>
                      <Typography style={{
                        fontFamily: 'Exo 2',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '30px',
                        lineHeight: '109%',
                        paddingBottom:'10px'
                      }}>10101100010</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container flexDirection='row'>
                  <Grid imem xs={6} justifyContent='center'>
                    <Box sx={{
                      display:'flex',
                      paddingTop:'30px',
                      paddingLeft:'30px',
                      paddingBottom:'30px',
                      flexDirection:'row',
                      justifyContent:'center',
                      height:'50vh'                
                    }}>
                    <Box sx={{
                      display:'flex',
                      paddingTop:'30px',
                      paddingLeft:'30px',
                      paddingBottom:'30px',
                      flexDirection:'column',
                      height:'50vh',

                    }}>
                      <Box sx={{
                        display:'flex',
                        flexDirection:'row',
                        color:'#FFFFFF',
                        justifyContent:'center',
                        width:'410px',
                      }}>
                        <svg width="62" height="62" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.1563 12.4687C32.1563 12.9879 32.0023 13.4954 31.7139 13.9271C31.4254 14.3587 31.0155 14.6952 30.5358 14.8939C30.0561 15.0925 29.5283 15.1445 29.0191 15.0432C28.5099 14.942 28.0422 14.692 27.6751 14.3248C27.308 13.9577 27.058 13.49 26.9567 12.9808C26.8554 12.4716 26.9074 11.9438 27.1061 11.4641C27.3048 10.9845 27.6412 10.5745 28.0729 10.2861C28.5046 9.99764 29.0121 9.84369 29.5313 9.84369C30.2275 9.84369 30.8951 10.1202 31.3874 10.6125C31.8797 11.1048 32.1563 11.7725 32.1563 12.4687ZM40.0313 16.1995C39.9025 19.7688 38.3979 23.1499 35.8324 25.6349C33.267 28.1199 29.8397 29.5161 26.2681 29.5312H26.25C24.9368 29.5333 23.63 29.3465 22.3699 28.9767L21.0804 30.2678C20.8974 30.4506 20.6802 30.5955 20.4412 30.6943C20.2022 30.7931 19.9461 30.8439 19.6875 30.8437H17.7188V32.8124C17.7188 33.3346 17.5113 33.8353 17.1421 34.2046C16.7729 34.5738 16.2722 34.7812 15.75 34.7812H13.7813V36.7499C13.7813 37.2721 13.5738 37.7728 13.2046 38.1421C12.8354 38.5113 12.3347 38.7187 11.8125 38.7187H6.56251C5.69227 38.7187 4.85767 38.373 4.24232 37.7576C3.62696 37.1423 3.28126 36.3077 3.28126 35.4374V30.7305C3.28009 30.2994 3.36447 29.8724 3.5295 29.4742C3.69453 29.076 3.93693 28.7145 4.24267 28.4106L13.0233 19.63C12.4672 17.7176 12.3321 15.7074 12.6275 13.7378C12.9229 11.7682 13.6417 9.88605 14.7343 8.22092C15.827 6.5558 17.2676 5.14729 18.9569 4.0924C20.6462 3.03751 22.5441 2.36129 24.5198 2.11034C26.4955 1.85938 28.5022 2.03963 30.4016 2.63869C32.301 3.23775 34.048 4.24138 35.5222 5.58045C36.9965 6.91952 38.163 8.56223 38.9414 10.3954C39.7198 12.2286 40.0916 14.2088 40.0313 16.1995ZM33.2112 8.78876C32.2614 7.83049 31.1233 7.07956 29.8687 6.58341C28.614 6.08726 27.2702 5.85666 25.9219 5.90618C20.6719 6.07025 16.4063 10.4819 16.4063 15.7319C16.4022 16.9782 16.6361 18.2138 17.0953 19.3724C17.2501 19.7341 17.293 20.1339 17.2184 20.5202C17.1439 20.9065 16.9553 21.2616 16.677 21.5397L7.21876 31.0077V34.7812H9.84376V32.8124C9.84376 32.2903 10.0512 31.7895 10.4204 31.4203C10.7896 31.0511 11.2904 30.8437 11.8125 30.8437H13.7813V28.8749C13.7813 28.3528 13.9887 27.852 14.3579 27.4828C14.7271 27.1136 15.2279 26.9062 15.75 26.9062H18.8672L20.4504 25.323C20.7286 25.0443 21.084 24.8555 21.4707 24.781C21.8573 24.7064 22.2574 24.7495 22.6193 24.9046C23.7747 25.363 25.007 25.5969 26.25 25.5937H26.2631C31.5131 25.5937 35.9215 21.3166 36.0888 16.0781C36.1383 14.7302 35.9082 13.3868 35.4129 12.1322C34.9176 10.8777 34.168 9.73933 33.2112 8.78876Z" fill="white"/>
                        </svg><Typography style={{
                        fontFamily: 'Exo 2',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '30px',
                        lineHeight: '109%',
                        paddingBottom:'10px'
                      }}>100% безопасная система синхронизации</Typography>
                      </Box>
                      <Box sx={{
                          display:'flex',
                          flexDirection:'row',
                          color:'#FFFFFF',
                          width:'410px',
                          paddingLeft:'30px',
                          marginTop:'50px',
                          justifyContent:'center'
                        }}>
                          <Typography style={{
                            fontFamily:'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '27.25px',
                            textAlign: 'left',
                          }}>Для работы базового тарифа нашей системы, требуются API ключи только с функционалом “Статистика”. Система только получает информацию и анализирует после хранит данные в шифрованном виде</Typography>
                        </Box>
                      </Box>
                      </Box>
                      <Box sx={{
                          display:'flex',
                          justifyContent:'flex-end',
                          alignContent:'flex-end'
                        }}> 
                          <Button style={{
                            width: '350px',
                            height: '100px',
                            backgroundColor:'#3300FF',
                            color:'#FFFFFF',
                            gap: '0px',
                            borderRadius: '18px',
                            opacity: '0px',
                            marginLeft: '50px',
                            marginRight:'30px',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                          }}>Демо-версия</Button>
                        </Box>
                  </Grid>
                  <Grid imem xs={6} justifyContent='center'>
                  <Box sx={{
                      display:'flex',
                      paddingTop:'30px',
                      paddingLeft:'30px',
                      paddingBottom:'30px',
                      flexDirection:'row',
                      justifyContent:'center',
                      height:'50vh'                
                    }}>
                    <Box sx={{
                      display:'flex',
                      paddingTop:'30px',
                      paddingLeft:'30px',
                      paddingBottom:'30px',
                      flexDirection:'column',
                      height:'50vh',

                    }}>
                      <Box sx={{
                        display:'flex',
                        flexDirection:'row',
                        color:'#FFFFFF',
                        justifyContent:'center',
                        width:'410px',
                      }}>
                        <Typography style={{
                        fontFamily: 'Exo 2',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '30px',
                        lineHeight: '109%',
                        paddingBottom:'10px'
                      }}>Синхронизация с реальном времени</Typography>
                      </Box>
                      <Box sx={{
                          display:'flex',
                          flexDirection:'row',
                          color:'#FFFFFF',
                          width:'410px',
                          marginTop:'50px',
                          justifyContent:'center'
                        }}>
                          <Typography style={{
                            fontFamily:'Exo 2',
                            fontSize: '25px',
                            fontWeight: '200',
                            lineHeight: '27.25px',
                            textAlign: 'left',
                          }}>Система синхронизируется в реальном времени, все полученные и обработанные данные мы храним у себя, чтобы в будущем вы смогли ими воспользоваться</Typography>
                        </Box>
                      </Box>
                      </Box>
                      <Box sx={{
                          display:'flex',
                          justifyContent:'flex-start',
                          alignItems:'flex-end',
                          marginLeft:'15px',
                          marginBottom:'30px'
                        }}> 
                          <Button style={{
                            color:'#FFFFFF',
                            boxSizing: 'border-box',
                            width: '350px',
                            height: '100px',
                            fontWeight: '700',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            fontSize:'20px',
                            paddingTop:'10px',
                            paddingBottom:'10px',
                            paddingLeft:'1.5%',
                            paddingRight:'1.5%',
                            border: '4px solid #FFFFFF',
                            borderRadius: '14px',
                          }}>Демо-версия</Button>
                        </Box>    
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{
                marginTop:'800px',
                height:'50vh',
                width:'100%',
                bgcolor:"#181818"
              }}>
                <Box sx={{
                  paddingTop:'50px',
                  marginLeft:'120px',
                  color:'#FFFFFF'
                }}>
                  <Typography style={{
                      fontFamily: 'Exo 2',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '30px',
                  }}>Данные полностью защищены</Typography>
                </Box>
                <Grid container flexDirection='row' mt='100px'>
                  <Grid item xs={6}>
                    <Box sx={{
                      display:'flex',
                      height:'100%',
                      flexWrap:'wrap',
                      alignItems:'center',
                      justifyContent:'center',
                      color:'#FFFFFF'
                    }}>
                      <Typography style={{
                        fontFamily:'Exo 2',
                        flexWrap:'wrap',
                        width:'600px',
                        fontSize: '25px',
                        fontWeight: '200',
                        lineHeight: '27.25px',
                        textAlign: 'left',
                      }}>Все полученные данные мы храним в полностью зашифрованном виде.  Наши специалисты постоянно улучшают безопасность сервиса и хранения данных. Чтобы вы были спокойны</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                      <Box sx={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                      }}>
                          <Box sx={{
                              fontFamily: 'Exo 2',
                              fontStyle: 'normal',
                              fontWeight: '200',
                              fontSize: '50px',
                              lineHeight: '109%',
                              color: 'linear-gradient(90deg, #FFFFFF 0%, #999999 100%)',
                          }}>
                            <Typography style={{
                              fontSize: 50,
                              background: "-webkit-linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
                              webkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}>“api_key”</Typography>
                          </Box>
                          <svg width="234" height="234" viewBox="0 0 234 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M212.697 45.2518C211.821 44.2512 210.747 43.4421 209.544 42.8753C208.341 42.3085 207.034 41.9962 205.704 41.9578C185.049 41.4178 158.913 19.3318 141.633 10.6648C130.959 5.32781 123.912 1.80881 118.62 0.881814C117.545 0.725238 116.454 0.72827 115.38 0.890814C110.088 1.81781 103.041 5.33681 92.376 10.6738C75.096 19.3318 48.96 41.4178 28.305 41.9578C26.9745 41.9982 25.6665 42.3114 24.4621 42.878C23.2576 43.4446 22.1824 44.2526 21.303 45.2518C19.4802 47.314 18.5398 50.0093 18.684 52.7578C23.121 142.965 55.476 198.792 112.248 231.237C113.724 232.074 115.362 232.506 116.991 232.506C118.62 232.506 120.258 232.074 121.743 231.237C178.515 198.792 210.861 142.965 215.307 52.7578C215.459 50.0097 214.522 47.3124 212.697 45.2518ZM167.553 80.7298L119.646 151.425C117.927 153.963 115.227 155.646 112.554 155.646C109.872 155.646 106.893 154.179 105.012 152.298L71.244 118.521C70.1415 117.414 69.5225 115.916 69.5225 114.354C69.5225 112.792 70.1415 111.293 71.244 110.187L79.587 101.826C80.6959 100.728 82.1934 100.112 83.754 100.112C85.3146 100.112 86.8121 100.728 87.921 101.826L109.881 123.786L148.032 67.4728C148.915 66.1842 150.271 65.2971 151.806 65.0054C153.34 64.7137 154.928 65.041 156.222 65.9158L165.987 72.5398C167.277 73.4211 168.166 74.7772 168.459 76.3118C168.753 77.8464 168.427 79.4347 167.553 80.7298Z" fill="#14FD00"/>
                          </svg>
                          <Box sx={{
                              fontFamily: 'Exo 2',
                              fontStyle: 'normal',
                              fontWeight: '200',
                              fontSize: '50px',
                              lineHeight: '109%',
                              color: 'linear-gradient(90deg, #FFFFFF 0%, #999999 100%)',
                          }}>
                            <Typography style={{
                              fontSize: 50,
                              background: "-webkit-linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
                              webkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}>ndj24n1n8428jdnch</Typography>
                          </Box>
                      </Box>
                  </Grid>
                </Grid>
              </Box>
          </Grid>
          <Grid item xs='12'>
            <Box sx={{
                position:'absolute',
                marginTop:'50px',
                width:'100%'
              }}>
                  <Box sx={{
                    display:'flex',
                    width:'100%',
                    justifyContent:'center',
                  }}><Typography style={{
                    fontFamily: 'Exo 2',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '30px',
                    color:'#000000',
                  }}>При разработке мы изучаем и учитываем все особенности раздела</Typography>
                  </Box>
                  <Box sx={{
                    display:'flex',
                    justifyContent:'space-around',
                    marginTop:'50px'
                }}>
                    <Box sx={{
                      width:'500px',
                      height:'600px',
                      bgcolor:'#FFFFFF',
                      boxShadow: '0px 0px 8.4px 0px #00000033',
                      borderRadius:'19px',
                    }}>
                      <Grid container flexDirection='column'>
                        <Grid item xs={12}>
                          <Box sx={{
                            marginTop:'40px',
                            display:'flex',
                            justifyContent:'center'
                          }}>
                            <Typography style={{
                                fontFamily: 'Exo 2',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '30px',
                                lineHeight: '109%',
                                paddingBottom:'10px'
                            }}>Финансовые отчеты</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{
                            marginTop:'40px',
                            marginLeft:'20px',
                            marginRight:'20px'
                          }}>
                            <Typography style={{
                                  fontFamily:'Exo 2',
                                  fontSize: '25px',
                                  fontWeight: '200',
                                  lineHeight: '27.25px',
                                  textAlign: 'left'
                            }}>При разработке раздела были приглашены селлеры с разных маркетплейсов. Вместе мы разработали унифицированный и удобный отчет для всех маркетплейсов.</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{
                            display:'flex',
                            height:'270px',
                            marginBottom:'50px',
                            alignItems:'flex-end',
                            justifyContent:'center'
                          }}>
                            <svg width="108" height="128" viewBox="0 0 108 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M106.199 36.1759L72.0741 2.05094C71.621 1.59837 71.0832 1.2395 70.4914 0.994837C69.8996 0.75017 69.2654 0.624498 68.625 0.625002H10.125C7.53914 0.625002 5.05919 1.65223 3.23071 3.48071C1.40223 5.30919 0.375 7.78914 0.375 10.375V117.625C0.375 120.211 1.40223 122.691 3.23071 124.519C5.05919 126.348 7.53914 127.375 10.125 127.375H97.875C100.461 127.375 102.941 126.348 104.769 124.519C106.598 122.691 107.625 120.211 107.625 117.625V39.625C107.626 38.9846 107.5 38.3504 107.255 37.7586C107.011 37.1668 106.652 36.629 106.199 36.1759ZM73.5 17.267L90.983 34.75H73.5V17.267ZM97.875 117.625H10.125V10.375H63.75V39.625C63.75 40.9179 64.2636 42.1579 65.1779 43.0721C66.0921 43.9864 67.3321 44.5 68.625 44.5H97.875V117.625Z" fill="#181818"/>
                            </svg>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{
                      width:'500px',
                      height:'600px',
                      bgcolor:'#FFFFFF',
                      boxShadow: '0px 0px 8.4px 0px #00000033',
                      borderRadius:'19px',
                    }}>
                      <Grid container flexDirection='column'>
                        <Grid item xs={12}>
                          <Box sx={{
                            marginTop:'40px',
                            display:'flex',
                            justifyContent:'center'
                          }}>
                            <Typography style={{
                                fontFamily: 'Exo 2',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '30px',
                                lineHeight: '109%',
                                paddingBottom:'10px'
                            }}>Бухгалтерия</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{
                            marginTop:'40px',
                            marginLeft:'20px',
                            marginRight:'20px'
                          }}>
                            <Typography style={{
                                  fontFamily:'Exo 2',
                                  fontSize: '25px',
                                  fontWeight: '200',
                                  lineHeight: '27.25px',
                                  textAlign: 'left'
                            }}>В нашей команде целая команда профессиональных бухгалтеров прорабатывают каждый инструмент внутри этого раздела сайта</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{
                            display:'flex',
                            alignItems:'flex-end',
                            height:'300px',
                            marginBottom:'50px',
                            justifyContent:'center'
                          }}>
                            <svg width="117" height="141" viewBox="0 0 117 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M104.9 0.900024H12.1C5.72 0.900024 0.5 6.12002 0.5 12.5V128.5C0.5 134.88 5.72 140.1 12.1 140.1H104.9C111.28 140.1 116.5 134.88 116.5 128.5V12.5C116.5 6.12002 111.28 0.900024 104.9 0.900024ZM35.3 116.9C35.3 120.09 32.69 122.7 29.5 122.7H17.9C14.71 122.7 12.1 120.09 12.1 116.9V114C12.1 110.81 14.71 108.2 17.9 108.2H29.5C32.69 108.2 35.3 110.81 35.3 114V116.9ZM35.3 93.7C35.3 96.89 32.69 99.5 29.5 99.5H17.9C14.71 99.5 12.1 96.89 12.1 93.7V90.8C12.1 87.61 14.71 85 17.9 85H29.5C32.69 85 35.3 87.61 35.3 90.8V93.7ZM35.3 70.5C35.3 73.69 32.69 76.3 29.5 76.3H17.9C14.71 76.3 12.1 73.69 12.1 70.5V67.6C12.1 64.41 14.71 61.8 17.9 61.8H29.5C32.69 61.8 35.3 64.41 35.3 67.6V70.5ZM70.1 116.9C70.1 120.09 67.49 122.7 64.3 122.7H52.7C49.51 122.7 46.9 120.09 46.9 116.9V114C46.9 110.81 49.51 108.2 52.7 108.2H64.3C67.49 108.2 70.1 110.81 70.1 114V116.9ZM70.1 93.7C70.1 96.89 67.49 99.5 64.3 99.5H52.7C49.51 99.5 46.9 96.89 46.9 93.7V90.8C46.9 87.61 49.51 85 52.7 85H64.3C67.49 85 70.1 87.61 70.1 90.8V93.7ZM70.1 70.5C70.1 73.69 67.49 76.3 64.3 76.3H52.7C49.51 76.3 46.9 73.69 46.9 70.5V67.6C46.9 64.41 49.51 61.8 52.7 61.8H64.3C67.49 61.8 70.1 64.41 70.1 67.6V70.5ZM104.9 116.9C104.9 120.09 102.29 122.7 99.1 122.7H87.5C84.31 122.7 81.7 120.09 81.7 116.9V114C81.7 110.81 84.31 108.2 87.5 108.2H99.1C102.29 108.2 104.9 110.81 104.9 114V116.9ZM104.9 93.7C104.9 96.89 102.29 99.5 99.1 99.5H87.5C84.31 99.5 81.7 96.89 81.7 93.7V90.8C81.7 87.61 84.31 85 87.5 85H99.1C102.29 85 104.9 87.61 104.9 90.8V93.7ZM104.9 70.5C104.9 73.69 102.29 76.3 99.1 76.3H87.5C84.31 76.3 81.7 73.69 81.7 70.5V67.6C81.7 64.41 84.31 61.8 87.5 61.8H99.1C102.29 61.8 104.9 64.41 104.9 67.6V70.5ZM104.9 44.4C104.9 47.59 102.29 50.2 99.1 50.2H17.9C14.71 50.2 12.1 47.59 12.1 44.4V21.2C12.1 18.01 14.71 15.4 17.9 15.4H99.1C102.29 15.4 104.9 18.01 104.9 21.2V44.4Z" fill="#181818"/>
                            </svg>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{
                      width:'500px',
                      height:'600px',
                      bgcolor:'#FFFFFF',
                      boxShadow: '0px 0px 8.4px 0px #00000033',
                      borderRadius:'19px',
                    }}>
                      <Grid container flexDirection='column'>
                        <Grid item xs={12}>
                          <Box sx={{
                            marginTop:'40px',
                            display:'flex',
                            justifyContent:'center'
                          }}>
                            <Typography style={{
                                fontFamily: 'Exo 2',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '30px',
                                lineHeight: '109%',
                                paddingBottom:'10px'
                            }}>Складской учет</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{
                            marginTop:'40px',
                            marginLeft:'20px',
                            marginRight:'20px'
                          }}>
                            <Typography style={{
                                  fontFamily:'Exo 2',
                                  fontSize: '25px',
                                  fontWeight: '200',
                                  lineHeight: '27.25px',
                                  textAlign: 'left'
                            }}>Мы пригласили владельцев фуллфилментов, и вместе продумывали как из чего должен состоять данный раздел сайта.</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box sx={{
                            display:'flex',
                            alignItems:'flex-end',
                            height:'300px',
                            marginBottom:'50px',
                            justifyContent:'center'
                          }}>
                            <svg width="128" height="137" viewBox="0 0 128 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_6_4)">
                            <path d="M96 51.375V0H32V51.375H0V111.312H128V51.375H96ZM56 102.75H8V59.9375H24V68.5H40V59.9375H56V102.75ZM40 51.375V8.5625H56V17.125H72V8.5625H88V51.375H40ZM120 102.75H72V59.9375H88V68.5H104V59.9375H120V102.75ZM0 137H24V128.438H104V137H128V119.875H0V137Z" fill="#181818"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_6_4">
                            <rect width="128" height="137" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
              </Box>
            </Grid>

          {/* Форма регистрации */}

          <Grid item xs='12'>
            <Box sx={{
            width:'100%',
            bgcolor:'#FFFFFF',
            position:'relative'
            }}>
              <Box sx={{
                paddingTop:'150px',
                paddingBottom:'150px',
                zIndex:'0'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 1920 530" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-1 526L299.633 356.44C371.37 315.98 457.502 309.934 534.187 339.977L716.366 411.35C800.405 444.274 894.209 441.673 976.295 404.145L1720.01 64.1295C1770.36 41.1081 1829.12 46.3117 1874.64 77.8241L1921 109.913" stroke="#1400FF" stroke-opacity="0.2" stroke-width="8" stroke-linejoin="round" stroke-dasharray="20 20"/>
                <path d="M105.67 308.436C106.702 308.436 107.518 308.532 108.118 308.724C108.73 308.904 109.174 309.228 109.45 309.696C109.726 310.164 109.864 310.824 109.864 311.676C109.864 312.564 109.696 313.242 109.36 313.71C109.036 314.178 108.496 314.448 107.74 314.52V314.592C108.676 314.676 109.324 315 109.684 315.564C110.056 316.128 110.242 316.908 110.242 317.904C110.242 318.756 110.104 319.416 109.828 319.884C109.564 320.352 109.138 320.682 108.55 320.874C107.962 321.054 107.188 321.144 106.228 321.144C105.508 321.144 104.884 321.138 104.356 321.126C103.828 321.126 103.342 321.114 102.898 321.09C102.454 321.066 101.992 321.036 101.512 321L101.764 319.614C102.04 319.626 102.55 319.638 103.294 319.65C104.05 319.662 104.932 319.668 105.94 319.668C106.576 319.668 107.074 319.614 107.434 319.506C107.794 319.398 108.046 319.194 108.19 318.894C108.346 318.594 108.424 318.156 108.424 317.58C108.424 316.956 108.346 316.482 108.19 316.158C108.034 315.822 107.764 315.588 107.38 315.456C107.008 315.312 106.492 315.234 105.832 315.222H101.746V313.908H105.814C106.39 313.896 106.846 313.836 107.182 313.728C107.518 313.62 107.758 313.422 107.902 313.134C108.046 312.834 108.118 312.42 108.118 311.892C108.118 311.352 108.04 310.938 107.884 310.65C107.728 310.362 107.464 310.17 107.092 310.074C106.732 309.966 106.228 309.912 105.58 309.912C104.98 309.912 104.44 309.912 103.96 309.912C103.492 309.912 103.072 309.918 102.7 309.93C102.34 309.93 102.028 309.942 101.764 309.966L101.512 308.58C101.944 308.532 102.352 308.502 102.736 308.49C103.132 308.466 103.564 308.454 104.032 308.454C104.5 308.442 105.046 308.436 105.67 308.436ZM103.276 308.58V321H101.512V308.58H103.276ZM116.236 315.564C117.136 315.564 117.838 315.648 118.342 315.816C118.858 315.984 119.224 316.272 119.44 316.68C119.656 317.088 119.764 317.64 119.764 318.336C119.764 319.056 119.65 319.62 119.422 320.028C119.206 320.436 118.858 320.718 118.378 320.874C117.898 321.03 117.274 321.108 116.506 321.108C115.918 321.108 115.408 321.102 114.976 321.09C114.544 321.09 114.148 321.078 113.788 321.054C113.428 321.042 113.05 321.024 112.654 321L112.852 319.74C113.08 319.752 113.494 319.764 114.094 319.776C114.694 319.788 115.408 319.794 116.236 319.794C116.68 319.794 117.028 319.752 117.28 319.668C117.544 319.584 117.73 319.434 117.838 319.218C117.946 319.002 118 318.684 118 318.264C118 317.712 117.88 317.328 117.64 317.112C117.4 316.896 116.932 316.788 116.236 316.788H112.834V315.564H116.236ZM114.292 312.216V321H112.6V312.216H114.292ZM123.04 312.216V321H121.294V312.216H123.04ZM130.95 312C132.042 312 132.822 312.396 133.29 313.188C133.758 313.98 133.992 315.138 133.992 316.662C133.992 317.802 133.872 318.708 133.632 319.38C133.392 320.04 133.026 320.514 132.534 320.802C132.042 321.078 131.424 321.216 130.68 321.216C130.092 321.216 129.516 321.138 128.952 320.982C128.388 320.814 127.854 320.562 127.35 320.226L127.458 319.254C127.986 319.41 128.454 319.536 128.862 319.632C129.27 319.728 129.708 319.776 130.176 319.776C130.668 319.776 131.058 319.692 131.346 319.524C131.646 319.356 131.862 319.044 131.994 318.588C132.126 318.132 132.192 317.49 132.192 316.662C132.192 315.846 132.132 315.21 132.012 314.754C131.892 314.286 131.7 313.956 131.436 313.764C131.172 313.56 130.812 313.458 130.356 313.458C129.9 313.458 129.45 313.566 129.006 313.782C128.562 313.986 128.052 314.31 127.476 314.754L127.278 313.674C127.578 313.338 127.926 313.044 128.322 312.792C128.73 312.54 129.162 312.348 129.618 312.216C130.074 312.072 130.518 312 130.95 312ZM127.206 312.216L127.404 313.998L127.53 314.232V319.884L127.44 320.1C127.476 320.436 127.5 320.766 127.512 321.09C127.536 321.414 127.542 321.756 127.53 322.116V324.582H125.802V312.216H127.206ZM144.235 312.216L140.797 321.414C140.689 321.726 140.551 322.044 140.383 322.368C140.215 322.704 140.011 323.022 139.771 323.322C139.543 323.622 139.273 323.88 138.961 324.096C138.505 324.408 137.995 324.594 137.431 324.654C136.879 324.714 136.291 324.702 135.667 324.618L135.811 323.43C136.219 323.442 136.609 323.424 136.981 323.376C137.353 323.328 137.683 323.214 137.971 323.034C138.223 322.854 138.451 322.608 138.655 322.296C138.859 321.996 139.033 321.666 139.177 321.306L139.627 320.244C139.723 319.992 139.819 319.716 139.915 319.416C140.011 319.104 140.101 318.834 140.185 318.606L142.363 312.216H144.235ZM137.053 312.216L139.267 318.606C139.327 318.786 139.381 318.972 139.429 319.164C139.477 319.344 139.525 319.53 139.573 319.722H140.005L139.411 321H138.943C138.787 321 138.655 320.964 138.547 320.892C138.451 320.808 138.373 320.694 138.313 320.55L135.199 312.216H137.053ZM147.242 312.216V315.492C147.242 315.9 147.332 316.188 147.512 316.356C147.692 316.524 147.986 316.608 148.394 316.608C148.874 316.608 149.342 316.566 149.798 316.482C150.254 316.386 150.77 316.212 151.346 315.96L151.508 317.238C150.884 317.502 150.236 317.7 149.564 317.832C148.892 317.952 148.304 318.012 147.8 318.012C147.044 318.012 146.474 317.85 146.09 317.526C145.718 317.202 145.532 316.71 145.532 316.05V312.216H147.242ZM152.894 312.216V321H151.148V312.216H152.894ZM163.209 312.216C163.005 312.756 162.819 313.242 162.651 313.674C162.483 314.106 162.315 314.484 162.147 314.808C161.979 315.132 161.787 315.402 161.571 315.618C161.367 315.834 161.127 316.008 160.851 316.14C160.587 316.272 160.263 316.356 159.879 316.392V316.464C160.287 316.5 160.629 316.578 160.905 316.698C161.193 316.818 161.445 316.992 161.661 317.22C161.889 317.448 162.093 317.736 162.273 318.084C162.453 318.42 162.639 318.834 162.831 319.326C163.023 319.806 163.233 320.364 163.461 321H161.643C161.427 320.412 161.229 319.902 161.049 319.47C160.881 319.026 160.713 318.654 160.545 318.354C160.377 318.042 160.197 317.796 160.005 317.616C159.813 317.424 159.585 317.292 159.321 317.22C159.069 317.136 158.769 317.094 158.421 317.094V315.78C158.841 315.78 159.195 315.708 159.483 315.564C159.771 315.408 160.017 315.18 160.221 314.88C160.437 314.58 160.635 314.214 160.815 313.782C160.995 313.338 161.193 312.816 161.409 312.216H163.209ZM157.395 312.216V314.754C157.395 315.03 157.371 315.312 157.323 315.6C157.287 315.876 157.227 316.14 157.143 316.392C157.215 316.656 157.275 316.92 157.323 317.184C157.371 317.448 157.395 317.694 157.395 317.922V321H155.649V312.216H157.395ZM159.015 315.78V317.094H156.891V315.78H159.015ZM169.636 312C170.308 312 170.872 312.09 171.328 312.27C171.784 312.438 172.126 312.732 172.354 313.152C172.594 313.572 172.714 314.148 172.714 314.88V321H171.346L171.076 319.092L170.986 318.876V314.88C170.974 314.364 170.848 313.992 170.608 313.764C170.38 313.536 169.93 313.422 169.258 313.422C168.79 313.422 168.208 313.446 167.512 313.494C166.828 313.542 166.15 313.59 165.478 313.638L165.316 312.396C165.724 312.324 166.18 312.258 166.684 312.198C167.188 312.138 167.698 312.09 168.214 312.054C168.73 312.018 169.204 312 169.636 312ZM171.922 315.582L171.904 316.806L167.782 316.824C167.374 316.836 167.086 316.944 166.918 317.148C166.75 317.34 166.666 317.61 166.666 317.958V318.498C166.666 318.93 166.774 319.248 166.99 319.452C167.206 319.644 167.536 319.74 167.98 319.74C168.316 319.74 168.688 319.68 169.096 319.56C169.516 319.428 169.936 319.236 170.356 318.984C170.776 318.72 171.154 318.39 171.49 317.994V319.128C171.382 319.296 171.208 319.5 170.968 319.74C170.728 319.968 170.434 320.19 170.086 320.406C169.75 320.622 169.372 320.802 168.952 320.946C168.532 321.09 168.076 321.162 167.584 321.162C167.056 321.162 166.588 321.072 166.18 320.892C165.784 320.7 165.472 320.424 165.244 320.064C165.028 319.692 164.92 319.242 164.92 318.714V317.76C164.92 317.076 165.136 316.542 165.568 316.158C166.012 315.774 166.624 315.582 167.404 315.582H171.922ZM176.379 313.044C176.619 313.044 176.787 313.092 176.883 313.188C176.979 313.272 177.027 313.434 177.027 313.674V314.628C177.027 314.868 176.979 315.036 176.883 315.132C176.787 315.228 176.619 315.276 176.379 315.276H175.857C175.617 315.276 175.449 315.228 175.353 315.132C175.257 315.036 175.209 314.868 175.209 314.628V313.674C175.209 313.434 175.257 313.272 175.353 313.188C175.449 313.092 175.617 313.044 175.857 313.044H176.379ZM176.379 318.768C176.619 318.768 176.787 318.816 176.883 318.912C176.979 318.996 177.027 319.158 177.027 319.398V320.352C177.027 320.592 176.979 320.76 176.883 320.856C176.787 320.952 176.619 321 176.379 321H175.857C175.617 321 175.449 320.952 175.353 320.856C175.257 320.76 175.209 320.592 175.209 320.352V319.398C175.209 319.158 175.257 318.996 175.353 318.912C175.449 318.816 175.617 318.768 175.857 318.768H176.379ZM187.664 308.58V321H185.864V311.352C185.864 311.16 185.87 310.974 185.882 310.794C185.894 310.602 185.918 310.41 185.954 310.218L182.93 311.136L182.696 309.858L185.864 308.58H187.664ZM198.518 308.364C199.322 308.364 200.012 308.436 200.588 308.58C201.176 308.712 201.626 308.976 201.938 309.372C202.25 309.756 202.406 310.326 202.406 311.082C202.406 311.586 202.34 312.066 202.208 312.522C202.076 312.966 201.848 313.428 201.524 313.908C201.212 314.376 200.78 314.916 200.228 315.528L196.718 319.38C197.03 319.356 197.36 319.338 197.708 319.326C198.056 319.314 198.392 319.308 198.716 319.308H202.856V321H194.558V319.92C194.558 319.776 194.576 319.638 194.612 319.506C194.66 319.374 194.732 319.254 194.828 319.146L198.32 315.222C199.1 314.394 199.676 313.656 200.048 313.008C200.432 312.36 200.612 311.754 200.588 311.19C200.576 310.818 200.48 310.548 200.3 310.38C200.132 310.2 199.886 310.08 199.562 310.02C199.238 309.96 198.842 309.93 198.374 309.93C197.99 309.93 197.618 309.936 197.258 309.948C196.91 309.96 196.538 309.99 196.142 310.038C195.758 310.074 195.302 310.128 194.774 310.2L194.666 308.832C195.23 308.7 195.728 308.604 196.16 308.544C196.604 308.472 197.012 308.424 197.384 308.4C197.768 308.376 198.146 308.364 198.518 308.364ZM208.803 308.364C209.715 308.364 210.447 308.472 210.999 308.688C211.551 308.892 211.971 309.234 212.259 309.714C212.547 310.182 212.733 310.824 212.817 311.64C212.913 312.444 212.961 313.446 212.961 314.646C212.961 316.038 212.871 317.166 212.691 318.03C212.511 318.894 212.229 319.56 211.845 320.028C211.461 320.484 210.957 320.796 210.333 320.964C209.721 321.132 208.971 321.216 208.083 321.216C207.807 321.216 207.423 321.204 206.931 321.18C206.439 321.156 205.899 321.072 205.311 320.928L205.455 319.65C205.755 319.674 206.019 319.692 206.247 319.704C206.487 319.716 206.745 319.722 207.021 319.722C207.309 319.722 207.663 319.722 208.083 319.722C208.695 319.722 209.199 319.65 209.595 319.506C210.003 319.362 210.327 319.104 210.567 318.732C210.807 318.36 210.975 317.844 211.071 317.184C211.179 316.512 211.233 315.648 211.233 314.592C211.233 313.668 211.209 312.9 211.161 312.288C211.125 311.676 211.035 311.19 210.891 310.83C210.747 310.47 210.507 310.218 210.171 310.074C209.835 309.918 209.373 309.84 208.785 309.84C208.125 309.84 207.627 309.948 207.291 310.164C206.955 310.38 206.733 310.698 206.625 311.118C206.517 311.538 206.463 312.048 206.463 312.648C206.463 313.236 206.523 313.728 206.643 314.124C206.763 314.508 206.979 314.802 207.291 315.006C207.615 315.21 208.059 315.312 208.623 315.312C209.007 315.312 209.355 315.264 209.667 315.168C209.991 315.06 210.321 314.892 210.657 314.664C211.005 314.424 211.407 314.094 211.863 313.674L211.935 314.502C211.551 315.066 211.173 315.51 210.801 315.834C210.441 316.146 210.051 316.368 209.631 316.5C209.211 316.632 208.713 316.698 208.137 316.698C207.273 316.698 206.595 316.524 206.103 316.176C205.611 315.828 205.257 315.354 205.041 314.754C204.837 314.142 204.735 313.446 204.735 312.666C204.735 311.706 204.861 310.908 205.113 310.272C205.365 309.636 205.785 309.162 206.373 308.85C206.973 308.526 207.783 308.364 208.803 308.364ZM220.182 308.58L216.798 315.888C216.69 316.116 216.684 316.296 216.78 316.428C216.888 316.548 217.038 316.608 217.23 316.608H224.556V317.832L222.918 318.012H216.15C215.814 318.012 215.526 317.916 215.286 317.724C215.058 317.532 214.908 317.286 214.836 316.986C214.776 316.686 214.812 316.386 214.944 316.086L218.418 308.58H220.182ZM222.972 310.956V321H221.28V313.008L221.586 310.956H222.972ZM237.063 308.58C237.315 308.58 237.519 308.628 237.675 308.724C237.831 308.82 237.933 308.958 237.981 309.138C238.029 309.306 238.017 309.51 237.945 309.75L234.075 321H232.293L235.713 311.064C235.785 310.884 235.851 310.716 235.911 310.56C235.971 310.404 236.043 310.248 236.127 310.092H230.025L229.953 308.58H237.063ZM246.939 308.58L246.849 310.056H241.647L241.467 313.26L242.889 313.386C243.705 313.446 244.389 313.56 244.941 313.728C245.505 313.896 245.961 314.136 246.309 314.448C246.657 314.748 246.909 315.132 247.065 315.6C247.221 316.056 247.299 316.608 247.299 317.256C247.299 317.772 247.245 318.264 247.137 318.732C247.029 319.2 246.831 319.62 246.543 319.992C246.255 320.364 245.841 320.664 245.301 320.892C244.773 321.108 244.077 321.216 243.213 321.216C242.709 321.216 242.127 321.18 241.467 321.108C240.807 321.036 240.129 320.928 239.433 320.784L239.631 319.344C240.207 319.44 240.771 319.518 241.323 319.578C241.887 319.626 242.379 319.65 242.799 319.65C243.555 319.65 244.125 319.56 244.509 319.38C244.893 319.188 245.157 318.912 245.301 318.552C245.445 318.192 245.523 317.754 245.535 317.238C245.547 316.698 245.481 316.272 245.337 315.96C245.193 315.648 244.965 315.414 244.653 315.258C244.341 315.102 243.927 314.994 243.411 314.934C242.895 314.874 242.265 314.82 241.521 314.772L240.567 314.682C240.375 314.658 240.213 314.58 240.081 314.448C239.961 314.316 239.907 314.148 239.919 313.944L240.207 308.58H246.939ZM252.952 308.346C253.876 308.346 254.62 308.436 255.184 308.616C255.748 308.784 256.162 309.078 256.426 309.498C256.69 309.918 256.822 310.494 256.822 311.226C256.822 311.766 256.768 312.258 256.66 312.702C256.552 313.134 256.366 313.494 256.102 313.782C255.85 314.07 255.478 314.262 254.986 314.358V314.43C255.814 314.562 256.378 314.898 256.678 315.438C256.99 315.978 257.152 316.68 257.164 317.544C257.176 318.384 257.05 319.08 256.786 319.632C256.534 320.172 256.114 320.574 255.526 320.838C254.95 321.102 254.158 321.234 253.15 321.234C252.49 321.234 251.818 321.198 251.134 321.126C250.462 321.066 249.802 320.994 249.154 320.91L249.262 319.488C249.682 319.524 250.078 319.56 250.45 319.596C250.834 319.62 251.206 319.638 251.566 319.65C251.938 319.662 252.316 319.668 252.7 319.668C253.348 319.668 253.864 319.596 254.248 319.452C254.644 319.308 254.932 319.068 255.112 318.732C255.292 318.384 255.382 317.922 255.382 317.346C255.382 316.902 255.322 316.518 255.202 316.194C255.082 315.87 254.848 315.618 254.5 315.438C254.164 315.246 253.672 315.15 253.024 315.15L250.702 315.168V313.818H253.024C253.492 313.818 253.864 313.758 254.14 313.638C254.428 313.506 254.638 313.344 254.77 313.152C254.914 312.948 255.004 312.72 255.04 312.468C255.088 312.204 255.112 311.934 255.112 311.658C255.1 311.154 255.016 310.776 254.86 310.524C254.716 310.272 254.47 310.104 254.122 310.02C253.774 309.936 253.294 309.894 252.682 309.894C252.082 309.894 251.506 309.912 250.954 309.948C250.402 309.972 249.916 309.996 249.496 310.02L249.37 308.67C249.994 308.562 250.6 308.484 251.188 308.436C251.776 308.376 252.364 308.346 252.952 308.346ZM268.815 312C269.907 312 270.687 312.396 271.155 313.188C271.623 313.98 271.857 315.138 271.857 316.662C271.857 317.802 271.737 318.708 271.497 319.38C271.257 320.04 270.891 320.514 270.399 320.802C269.907 321.078 269.289 321.216 268.545 321.216C267.957 321.216 267.381 321.138 266.817 320.982C266.253 320.814 265.719 320.562 265.215 320.226L265.323 319.254C265.851 319.41 266.319 319.536 266.727 319.632C267.135 319.728 267.573 319.776 268.041 319.776C268.533 319.776 268.923 319.692 269.211 319.524C269.511 319.356 269.727 319.044 269.859 318.588C269.991 318.132 270.057 317.49 270.057 316.662C270.057 315.846 269.997 315.21 269.877 314.754C269.757 314.286 269.565 313.956 269.301 313.764C269.037 313.56 268.677 313.458 268.221 313.458C267.765 313.458 267.315 313.566 266.871 313.782C266.427 313.986 265.917 314.31 265.341 314.754L265.143 313.674C265.443 313.338 265.791 313.044 266.187 312.792C266.595 312.54 267.027 312.348 267.483 312.216C267.939 312.072 268.383 312 268.815 312ZM265.071 312.216L265.269 313.998L265.395 314.232V319.884L265.305 320.1C265.341 320.436 265.365 320.766 265.377 321.09C265.401 321.414 265.407 321.756 265.395 322.116V324.582H263.667V312.216H265.071ZM282.1 312.216L278.662 321.414C278.554 321.726 278.416 322.044 278.248 322.368C278.08 322.704 277.876 323.022 277.636 323.322C277.408 323.622 277.138 323.88 276.826 324.096C276.37 324.408 275.86 324.594 275.296 324.654C274.744 324.714 274.156 324.702 273.532 324.618L273.676 323.43C274.084 323.442 274.474 323.424 274.846 323.376C275.218 323.328 275.548 323.214 275.836 323.034C276.088 322.854 276.316 322.608 276.52 322.296C276.724 321.996 276.898 321.666 277.042 321.306L277.492 320.244C277.588 319.992 277.684 319.716 277.78 319.416C277.876 319.104 277.966 318.834 278.05 318.606L280.228 312.216H282.1ZM274.918 312.216L277.132 318.606C277.192 318.786 277.246 318.972 277.294 319.164C277.342 319.344 277.39 319.53 277.438 319.722H277.87L277.276 321H276.808C276.652 321 276.52 320.964 276.412 320.892C276.316 320.808 276.238 320.694 276.178 320.55L273.064 312.216H274.918ZM291.047 307.734L291.425 309.066C291.065 309.294 290.723 309.468 290.399 309.588C290.075 309.708 289.757 309.798 289.445 309.858C289.145 309.906 288.839 309.954 288.527 310.002C288.215 310.05 287.891 310.122 287.555 310.218C286.979 310.374 286.523 310.596 286.187 310.884C285.863 311.172 285.623 311.496 285.467 311.856C285.323 312.216 285.215 312.588 285.143 312.972C285.095 313.248 285.053 313.5 285.017 313.728C284.993 313.944 284.975 314.124 284.963 314.268H284.999C285.107 314.052 285.239 313.836 285.395 313.62C285.551 313.404 285.749 313.212 285.989 313.044C286.241 312.876 286.553 312.744 286.925 312.648C287.309 312.54 287.777 312.486 288.329 312.486C289.205 312.486 289.901 312.63 290.417 312.918C290.933 313.206 291.305 313.662 291.533 314.286C291.761 314.898 291.875 315.708 291.875 316.716C291.875 317.652 291.761 318.456 291.533 319.128C291.305 319.8 290.891 320.316 290.291 320.676C289.703 321.036 288.869 321.216 287.789 321.216C287.009 321.216 286.361 321.126 285.845 320.946C285.341 320.766 284.939 320.514 284.639 320.19C284.351 319.854 284.135 319.458 283.991 319.002C283.859 318.546 283.769 318.036 283.721 317.472C283.685 316.908 283.667 316.308 283.667 315.672C283.667 314.736 283.703 313.896 283.775 313.152C283.859 312.408 284.009 311.76 284.225 311.208C284.453 310.656 284.789 310.188 285.233 309.804C285.677 309.42 286.259 309.12 286.979 308.904C287.339 308.796 287.681 308.712 288.005 308.652C288.341 308.592 288.671 308.532 288.995 308.472C289.331 308.412 289.667 308.328 290.003 308.22C290.339 308.112 290.687 307.95 291.047 307.734ZM287.879 313.872C287.195 313.872 286.679 313.98 286.331 314.196C285.983 314.412 285.749 314.73 285.629 315.15C285.521 315.558 285.467 316.08 285.467 316.716C285.467 317.496 285.539 318.114 285.683 318.57C285.827 319.026 286.067 319.344 286.403 319.524C286.751 319.704 287.207 319.794 287.771 319.794C288.335 319.794 288.779 319.704 289.103 319.524C289.439 319.344 289.679 319.032 289.823 318.588C289.967 318.132 290.039 317.508 290.039 316.716C290.039 315.972 289.973 315.396 289.841 314.988C289.721 314.568 289.505 314.28 289.193 314.124C288.881 313.956 288.443 313.872 287.879 313.872ZM295.19 318.768C295.43 318.768 295.598 318.816 295.694 318.912C295.79 318.996 295.838 319.158 295.838 319.398V320.352C295.838 320.592 295.79 320.76 295.694 320.856C295.598 320.952 295.43 321 295.19 321H294.668C294.428 321 294.26 320.952 294.164 320.856C294.068 320.76 294.02 320.592 294.02 320.352V319.398C294.02 319.158 294.068 318.996 294.164 318.912C294.26 318.816 294.428 318.768 294.668 318.768H295.19Z" fill="#868686"/>
                <path d="M103.312 331.58V344H101.512V331.58H103.312ZM109 331.58V333.002H103.168V331.58H109ZM110.602 331.58V344H108.802V331.58H110.602ZM118.663 335C119.755 335 120.535 335.396 121.003 336.188C121.471 336.98 121.705 338.138 121.705 339.662C121.705 340.802 121.585 341.708 121.345 342.38C121.105 343.04 120.739 343.514 120.247 343.802C119.755 344.078 119.137 344.216 118.393 344.216C117.805 344.216 117.229 344.138 116.665 343.982C116.101 343.814 115.567 343.562 115.063 343.226L115.171 342.254C115.699 342.41 116.167 342.536 116.575 342.632C116.983 342.728 117.421 342.776 117.889 342.776C118.381 342.776 118.771 342.692 119.059 342.524C119.359 342.356 119.575 342.044 119.707 341.588C119.839 341.132 119.905 340.49 119.905 339.662C119.905 338.846 119.845 338.21 119.725 337.754C119.605 337.286 119.413 336.956 119.149 336.764C118.885 336.56 118.525 336.458 118.069 336.458C117.613 336.458 117.163 336.566 116.719 336.782C116.275 336.986 115.765 337.31 115.189 337.754L114.991 336.674C115.291 336.338 115.639 336.044 116.035 335.792C116.443 335.54 116.875 335.348 117.331 335.216C117.787 335.072 118.231 335 118.663 335ZM114.919 335.216L115.117 336.998L115.243 337.232V342.884L115.153 343.1C115.189 343.436 115.213 343.766 115.225 344.09C115.249 344.414 115.255 344.756 115.243 345.116V347.582H113.515V335.216H114.919ZM131.945 335.216V344H130.379V338.402C130.379 338.198 130.385 338 130.397 337.808C130.409 337.616 130.427 337.406 130.451 337.178H130.397C130.325 337.358 130.229 337.55 130.109 337.754C130.001 337.946 129.893 338.114 129.785 338.258L125.519 344H124.061V335.216H125.627V340.832C125.627 341.024 125.621 341.216 125.609 341.408C125.609 341.6 125.597 341.81 125.573 342.038H125.609C125.705 341.846 125.807 341.66 125.915 341.48C126.023 341.288 126.131 341.126 126.239 340.994L130.505 335.216H131.945ZM141.932 330.734L142.31 332.066C141.95 332.294 141.608 332.468 141.284 332.588C140.96 332.708 140.642 332.798 140.33 332.858C140.03 332.906 139.724 332.954 139.412 333.002C139.1 333.05 138.776 333.122 138.44 333.218C137.864 333.374 137.408 333.596 137.072 333.884C136.748 334.172 136.508 334.496 136.352 334.856C136.208 335.216 136.1 335.588 136.028 335.972C135.98 336.248 135.938 336.5 135.902 336.728C135.878 336.944 135.86 337.124 135.848 337.268H135.884C135.992 337.052 136.124 336.836 136.28 336.62C136.436 336.404 136.634 336.212 136.874 336.044C137.126 335.876 137.438 335.744 137.81 335.648C138.194 335.54 138.662 335.486 139.214 335.486C140.09 335.486 140.786 335.63 141.302 335.918C141.818 336.206 142.19 336.662 142.418 337.286C142.646 337.898 142.76 338.708 142.76 339.716C142.76 340.652 142.646 341.456 142.418 342.128C142.19 342.8 141.776 343.316 141.176 343.676C140.588 344.036 139.754 344.216 138.674 344.216C137.894 344.216 137.246 344.126 136.73 343.946C136.226 343.766 135.824 343.514 135.524 343.19C135.236 342.854 135.02 342.458 134.876 342.002C134.744 341.546 134.654 341.036 134.606 340.472C134.57 339.908 134.552 339.308 134.552 338.672C134.552 337.736 134.588 336.896 134.66 336.152C134.744 335.408 134.894 334.76 135.11 334.208C135.338 333.656 135.674 333.188 136.118 332.804C136.562 332.42 137.144 332.12 137.864 331.904C138.224 331.796 138.566 331.712 138.89 331.652C139.226 331.592 139.556 331.532 139.88 331.472C140.216 331.412 140.552 331.328 140.888 331.22C141.224 331.112 141.572 330.95 141.932 330.734ZM138.764 336.872C138.08 336.872 137.564 336.98 137.216 337.196C136.868 337.412 136.634 337.73 136.514 338.15C136.406 338.558 136.352 339.08 136.352 339.716C136.352 340.496 136.424 341.114 136.568 341.57C136.712 342.026 136.952 342.344 137.288 342.524C137.636 342.704 138.092 342.794 138.656 342.794C139.22 342.794 139.664 342.704 139.988 342.524C140.324 342.344 140.564 342.032 140.708 341.588C140.852 341.132 140.924 340.508 140.924 339.716C140.924 338.972 140.858 338.396 140.726 337.988C140.606 337.568 140.39 337.28 140.078 337.124C139.766 336.956 139.328 336.872 138.764 336.872ZM148.738 338.564C149.638 338.564 150.34 338.648 150.844 338.816C151.36 338.984 151.726 339.272 151.942 339.68C152.158 340.088 152.266 340.64 152.266 341.336C152.266 342.056 152.152 342.62 151.924 343.028C151.708 343.436 151.36 343.718 150.88 343.874C150.4 344.03 149.776 344.108 149.008 344.108C148.42 344.108 147.91 344.102 147.478 344.09C147.046 344.09 146.65 344.078 146.29 344.054C145.93 344.042 145.552 344.024 145.156 344L145.354 342.74C145.582 342.752 145.996 342.764 146.596 342.776C147.196 342.788 147.91 342.794 148.738 342.794C149.182 342.794 149.53 342.752 149.782 342.668C150.046 342.584 150.232 342.434 150.34 342.218C150.448 342.002 150.502 341.684 150.502 341.264C150.502 340.712 150.382 340.328 150.142 340.112C149.902 339.896 149.434 339.788 148.738 339.788H145.336V338.564H148.738ZM146.794 335.216V344H145.102V335.216H146.794ZM155.542 335.216V344H153.796V335.216H155.542ZM165.522 335.216V336.53H162.246C161.886 336.53 161.622 336.608 161.454 336.764C161.298 336.92 161.196 337.196 161.148 337.592C161.088 338.108 161.016 338.642 160.932 339.194C160.86 339.734 160.776 340.256 160.68 340.76C160.596 341.252 160.482 341.696 160.338 342.092C160.194 342.548 159.984 342.926 159.708 343.226C159.444 343.526 159.12 343.748 158.736 343.892C158.352 344.024 157.914 344.09 157.422 344.09L157.242 342.776C157.554 342.692 157.806 342.602 157.998 342.506C158.202 342.41 158.358 342.29 158.466 342.146C158.586 341.99 158.688 341.804 158.772 341.588C158.88 341.324 158.97 341.012 159.042 340.652C159.126 340.292 159.192 339.92 159.24 339.536C159.3 339.14 159.348 338.75 159.384 338.366C159.432 337.97 159.474 337.61 159.51 337.286C159.594 336.614 159.816 336.104 160.176 335.756C160.536 335.396 161.082 335.216 161.814 335.216H165.522ZM165.756 335.216V344H164.01V335.216H165.756ZM172.152 338.564C173.076 338.564 173.802 338.648 174.33 338.816C174.858 338.984 175.23 339.272 175.446 339.68C175.674 340.088 175.788 340.64 175.788 341.336C175.788 342.056 175.674 342.62 175.446 343.028C175.218 343.436 174.852 343.718 174.348 343.874C173.856 344.03 173.214 344.108 172.422 344.108C171.834 344.108 171.324 344.102 170.892 344.09C170.46 344.09 170.064 344.078 169.704 344.054C169.344 344.042 168.966 344.024 168.57 344L168.768 342.74C168.996 342.752 169.41 342.764 170.01 342.776C170.622 342.788 171.336 342.794 172.152 342.794C172.608 342.794 172.974 342.752 173.25 342.668C173.526 342.584 173.718 342.434 173.826 342.218C173.946 342.002 174.006 341.684 174.006 341.264C174.006 340.892 173.952 340.598 173.844 340.382C173.736 340.166 173.55 340.016 173.286 339.932C173.022 339.836 172.644 339.788 172.152 339.788H168.75V338.564H172.152ZM170.208 335.216V344H168.516V335.216H170.208ZM178.858 336.044C179.098 336.044 179.266 336.092 179.362 336.188C179.458 336.272 179.506 336.434 179.506 336.674V337.628C179.506 337.868 179.458 338.036 179.362 338.132C179.266 338.228 179.098 338.276 178.858 338.276H178.336C178.096 338.276 177.928 338.228 177.832 338.132C177.736 338.036 177.688 337.868 177.688 337.628V336.674C177.688 336.434 177.736 336.272 177.832 336.188C177.928 336.092 178.096 336.044 178.336 336.044H178.858ZM178.858 341.768C179.098 341.768 179.266 341.816 179.362 341.912C179.458 341.996 179.506 342.158 179.506 342.398V343.352C179.506 343.592 179.458 343.76 179.362 343.856C179.266 343.952 179.098 344 178.858 344H178.336C178.096 344 177.928 343.952 177.832 343.856C177.736 343.76 177.688 343.592 177.688 343.352V342.398C177.688 342.158 177.736 341.996 177.832 341.912C177.928 341.816 178.096 341.768 178.336 341.768H178.858ZM190.844 331.58L187.46 338.888C187.352 339.116 187.346 339.296 187.442 339.428C187.55 339.548 187.7 339.608 187.892 339.608H195.218V340.832L193.58 341.012H186.812C186.476 341.012 186.188 340.916 185.948 340.724C185.72 340.532 185.57 340.286 185.498 339.986C185.438 339.686 185.474 339.386 185.606 339.086L189.08 331.58H190.844ZM193.634 333.956V344H191.942V336.008L192.248 333.956H193.634ZM200.963 331.364C201.875 331.364 202.607 331.472 203.159 331.688C203.711 331.892 204.131 332.234 204.419 332.714C204.707 333.182 204.893 333.824 204.977 334.64C205.073 335.444 205.121 336.446 205.121 337.646C205.121 339.038 205.031 340.166 204.851 341.03C204.671 341.894 204.389 342.56 204.005 343.028C203.621 343.484 203.117 343.796 202.493 343.964C201.881 344.132 201.131 344.216 200.243 344.216C199.967 344.216 199.583 344.204 199.091 344.18C198.599 344.156 198.059 344.072 197.471 343.928L197.615 342.65C197.915 342.674 198.179 342.692 198.407 342.704C198.647 342.716 198.905 342.722 199.181 342.722C199.469 342.722 199.823 342.722 200.243 342.722C200.855 342.722 201.359 342.65 201.755 342.506C202.163 342.362 202.487 342.104 202.727 341.732C202.967 341.36 203.135 340.844 203.231 340.184C203.339 339.512 203.393 338.648 203.393 337.592C203.393 336.668 203.369 335.9 203.321 335.288C203.285 334.676 203.195 334.19 203.051 333.83C202.907 333.47 202.667 333.218 202.331 333.074C201.995 332.918 201.533 332.84 200.945 332.84C200.285 332.84 199.787 332.948 199.451 333.164C199.115 333.38 198.893 333.698 198.785 334.118C198.677 334.538 198.623 335.048 198.623 335.648C198.623 336.236 198.683 336.728 198.803 337.124C198.923 337.508 199.139 337.802 199.451 338.006C199.775 338.21 200.219 338.312 200.783 338.312C201.167 338.312 201.515 338.264 201.827 338.168C202.151 338.06 202.481 337.892 202.817 337.664C203.165 337.424 203.567 337.094 204.023 336.674L204.095 337.502C203.711 338.066 203.333 338.51 202.961 338.834C202.601 339.146 202.211 339.368 201.791 339.5C201.371 339.632 200.873 339.698 200.297 339.698C199.433 339.698 198.755 339.524 198.263 339.176C197.771 338.828 197.417 338.354 197.201 337.754C196.997 337.142 196.895 336.446 196.895 335.666C196.895 334.706 197.021 333.908 197.273 333.272C197.525 332.636 197.945 332.162 198.533 331.85C199.133 331.526 199.943 331.364 200.963 331.364ZM212.343 331.58L208.958 338.888C208.851 339.116 208.845 339.296 208.941 339.428C209.049 339.548 209.199 339.608 209.391 339.608H216.717V340.832L215.079 341.012H208.311C207.975 341.012 207.687 340.916 207.447 340.724C207.219 340.532 207.069 340.286 206.997 339.986C206.937 339.686 206.973 339.386 207.105 339.086L210.579 331.58H212.343ZM215.133 333.956V344H213.441V336.008L213.747 333.956H215.133ZM229.223 331.58C229.475 331.58 229.679 331.628 229.835 331.724C229.991 331.82 230.093 331.958 230.141 332.138C230.189 332.306 230.177 332.51 230.105 332.75L226.235 344H224.453L227.873 334.064C227.945 333.884 228.011 333.716 228.071 333.56C228.131 333.404 228.203 333.248 228.287 333.092H222.185L222.113 331.58H229.223ZM239.099 331.58L239.009 333.056H233.807L233.627 336.26L235.049 336.386C235.865 336.446 236.549 336.56 237.101 336.728C237.665 336.896 238.121 337.136 238.469 337.448C238.817 337.748 239.069 338.132 239.225 338.6C239.381 339.056 239.459 339.608 239.459 340.256C239.459 340.772 239.405 341.264 239.297 341.732C239.189 342.2 238.991 342.62 238.703 342.992C238.415 343.364 238.001 343.664 237.461 343.892C236.933 344.108 236.237 344.216 235.373 344.216C234.869 344.216 234.287 344.18 233.627 344.108C232.967 344.036 232.289 343.928 231.593 343.784L231.791 342.344C232.367 342.44 232.931 342.518 233.483 342.578C234.047 342.626 234.539 342.65 234.959 342.65C235.715 342.65 236.285 342.56 236.669 342.38C237.053 342.188 237.317 341.912 237.461 341.552C237.605 341.192 237.683 340.754 237.695 340.238C237.707 339.698 237.641 339.272 237.497 338.96C237.353 338.648 237.125 338.414 236.813 338.258C236.501 338.102 236.087 337.994 235.571 337.934C235.055 337.874 234.425 337.82 233.681 337.772L232.727 337.682C232.535 337.658 232.373 337.58 232.241 337.448C232.121 337.316 232.067 337.148 232.079 336.944L232.367 331.58H239.099ZM245.112 331.346C246.036 331.346 246.78 331.436 247.344 331.616C247.908 331.784 248.322 332.078 248.586 332.498C248.85 332.918 248.982 333.494 248.982 334.226C248.982 334.766 248.928 335.258 248.82 335.702C248.712 336.134 248.526 336.494 248.262 336.782C248.01 337.07 247.638 337.262 247.146 337.358V337.43C247.974 337.562 248.538 337.898 248.838 338.438C249.15 338.978 249.312 339.68 249.324 340.544C249.336 341.384 249.21 342.08 248.946 342.632C248.694 343.172 248.274 343.574 247.686 343.838C247.11 344.102 246.318 344.234 245.31 344.234C244.65 344.234 243.978 344.198 243.294 344.126C242.622 344.066 241.962 343.994 241.314 343.91L241.422 342.488C241.842 342.524 242.238 342.56 242.61 342.596C242.994 342.62 243.366 342.638 243.726 342.65C244.098 342.662 244.476 342.668 244.86 342.668C245.508 342.668 246.024 342.596 246.408 342.452C246.804 342.308 247.092 342.068 247.272 341.732C247.452 341.384 247.542 340.922 247.542 340.346C247.542 339.902 247.482 339.518 247.362 339.194C247.242 338.87 247.008 338.618 246.66 338.438C246.324 338.246 245.832 338.15 245.184 338.15L242.862 338.168V336.818H245.184C245.652 336.818 246.024 336.758 246.3 336.638C246.588 336.506 246.798 336.344 246.93 336.152C247.074 335.948 247.164 335.72 247.2 335.468C247.248 335.204 247.272 334.934 247.272 334.658C247.26 334.154 247.176 333.776 247.02 333.524C246.876 333.272 246.63 333.104 246.282 333.02C245.934 332.936 245.454 332.894 244.842 332.894C244.242 332.894 243.666 332.912 243.114 332.948C242.562 332.972 242.076 332.996 241.656 333.02L241.53 331.67C242.154 331.562 242.76 331.484 243.348 331.436C243.936 331.376 244.524 331.346 245.112 331.346ZM260.975 335C262.067 335 262.847 335.396 263.315 336.188C263.783 336.98 264.017 338.138 264.017 339.662C264.017 340.802 263.897 341.708 263.657 342.38C263.417 343.04 263.051 343.514 262.559 343.802C262.067 344.078 261.449 344.216 260.705 344.216C260.117 344.216 259.541 344.138 258.977 343.982C258.413 343.814 257.879 343.562 257.375 343.226L257.483 342.254C258.011 342.41 258.479 342.536 258.887 342.632C259.295 342.728 259.733 342.776 260.201 342.776C260.693 342.776 261.083 342.692 261.371 342.524C261.671 342.356 261.887 342.044 262.019 341.588C262.151 341.132 262.217 340.49 262.217 339.662C262.217 338.846 262.157 338.21 262.037 337.754C261.917 337.286 261.725 336.956 261.461 336.764C261.197 336.56 260.837 336.458 260.381 336.458C259.925 336.458 259.475 336.566 259.031 336.782C258.587 336.986 258.077 337.31 257.501 337.754L257.303 336.674C257.603 336.338 257.951 336.044 258.347 335.792C258.755 335.54 259.187 335.348 259.643 335.216C260.099 335.072 260.543 335 260.975 335ZM257.231 335.216L257.429 336.998L257.555 337.232V342.884L257.465 343.1C257.501 343.436 257.525 343.766 257.537 344.09C257.561 344.414 257.567 344.756 257.555 345.116V347.582H255.827V335.216H257.231ZM274.26 335.216L270.822 344.414C270.714 344.726 270.576 345.044 270.408 345.368C270.24 345.704 270.036 346.022 269.796 346.322C269.568 346.622 269.298 346.88 268.986 347.096C268.53 347.408 268.02 347.594 267.456 347.654C266.904 347.714 266.316 347.702 265.692 347.618L265.836 346.43C266.244 346.442 266.634 346.424 267.006 346.376C267.378 346.328 267.708 346.214 267.996 346.034C268.248 345.854 268.476 345.608 268.68 345.296C268.884 344.996 269.058 344.666 269.202 344.306L269.652 343.244C269.748 342.992 269.844 342.716 269.94 342.416C270.036 342.104 270.126 341.834 270.21 341.606L272.388 335.216H274.26ZM267.078 335.216L269.292 341.606C269.352 341.786 269.406 341.972 269.454 342.164C269.502 342.344 269.55 342.53 269.598 342.722H270.03L269.436 344H268.968C268.812 344 268.68 343.964 268.572 343.892C268.476 343.808 268.398 343.694 268.338 343.55L265.224 335.216H267.078ZM283.208 330.734L283.586 332.066C283.226 332.294 282.884 332.468 282.56 332.588C282.236 332.708 281.918 332.798 281.606 332.858C281.306 332.906 281 332.954 280.688 333.002C280.376 333.05 280.052 333.122 279.716 333.218C279.14 333.374 278.684 333.596 278.348 333.884C278.024 334.172 277.784 334.496 277.628 334.856C277.484 335.216 277.376 335.588 277.304 335.972C277.256 336.248 277.214 336.5 277.178 336.728C277.154 336.944 277.136 337.124 277.124 337.268H277.16C277.268 337.052 277.4 336.836 277.556 336.62C277.712 336.404 277.91 336.212 278.15 336.044C278.402 335.876 278.714 335.744 279.086 335.648C279.47 335.54 279.938 335.486 280.49 335.486C281.366 335.486 282.062 335.63 282.578 335.918C283.094 336.206 283.466 336.662 283.694 337.286C283.922 337.898 284.036 338.708 284.036 339.716C284.036 340.652 283.922 341.456 283.694 342.128C283.466 342.8 283.052 343.316 282.452 343.676C281.864 344.036 281.03 344.216 279.95 344.216C279.17 344.216 278.522 344.126 278.006 343.946C277.502 343.766 277.1 343.514 276.8 343.19C276.512 342.854 276.296 342.458 276.152 342.002C276.02 341.546 275.93 341.036 275.882 340.472C275.846 339.908 275.828 339.308 275.828 338.672C275.828 337.736 275.864 336.896 275.936 336.152C276.02 335.408 276.17 334.76 276.386 334.208C276.614 333.656 276.95 333.188 277.394 332.804C277.838 332.42 278.42 332.12 279.14 331.904C279.5 331.796 279.842 331.712 280.166 331.652C280.502 331.592 280.832 331.532 281.156 331.472C281.492 331.412 281.828 331.328 282.164 331.22C282.5 331.112 282.848 330.95 283.208 330.734ZM280.04 336.872C279.356 336.872 278.84 336.98 278.492 337.196C278.144 337.412 277.91 337.73 277.79 338.15C277.682 338.558 277.628 339.08 277.628 339.716C277.628 340.496 277.7 341.114 277.844 341.57C277.988 342.026 278.228 342.344 278.564 342.524C278.912 342.704 279.368 342.794 279.932 342.794C280.496 342.794 280.94 342.704 281.264 342.524C281.6 342.344 281.84 342.032 281.984 341.588C282.128 341.132 282.2 340.508 282.2 339.716C282.2 338.972 282.134 338.396 282.002 337.988C281.882 337.568 281.666 337.28 281.354 337.124C281.042 336.956 280.604 336.872 280.04 336.872ZM287.35 341.768C287.59 341.768 287.758 341.816 287.854 341.912C287.95 341.996 287.998 342.158 287.998 342.398V343.352C287.998 343.592 287.95 343.76 287.854 343.856C287.758 343.952 287.59 344 287.35 344H286.828C286.588 344 286.42 343.952 286.324 343.856C286.228 343.76 286.18 343.592 286.18 343.352V342.398C286.18 342.158 286.228 341.996 286.324 341.912C286.42 341.816 286.588 341.768 286.828 341.768H287.35Z" fill="#868686"/>
                <circle cx="300" cy="354" r="10" fill="#1400FF"/>
                <circle cx="1799" cy="50" r="10" fill="#1400FF"/>
                <path d="M1607.67 1.436C1608.7 1.436 1609.52 1.532 1610.12 1.724C1610.73 1.904 1611.17 2.228 1611.45 2.696C1611.73 3.164 1611.86 3.824 1611.86 4.676C1611.86 5.564 1611.7 6.242 1611.36 6.71C1611.04 7.178 1610.5 7.448 1609.74 7.52V7.592C1610.68 7.676 1611.32 8 1611.68 8.564C1612.06 9.128 1612.24 9.908 1612.24 10.904C1612.24 11.756 1612.1 12.416 1611.83 12.884C1611.56 13.352 1611.14 13.682 1610.55 13.874C1609.96 14.054 1609.19 14.144 1608.23 14.144C1607.51 14.144 1606.88 14.138 1606.36 14.126C1605.83 14.126 1605.34 14.114 1604.9 14.09C1604.45 14.066 1603.99 14.036 1603.51 14L1603.76 12.614C1604.04 12.626 1604.55 12.638 1605.29 12.65C1606.05 12.662 1606.93 12.668 1607.94 12.668C1608.58 12.668 1609.07 12.614 1609.43 12.506C1609.79 12.398 1610.05 12.194 1610.19 11.894C1610.35 11.594 1610.42 11.156 1610.42 10.58C1610.42 9.956 1610.35 9.482 1610.19 9.158C1610.03 8.822 1609.76 8.588 1609.38 8.456C1609.01 8.312 1608.49 8.234 1607.83 8.222H1603.75V6.908H1607.81C1608.39 6.896 1608.85 6.836 1609.18 6.728C1609.52 6.62 1609.76 6.422 1609.9 6.134C1610.05 5.834 1610.12 5.42 1610.12 4.892C1610.12 4.352 1610.04 3.938 1609.88 3.65C1609.73 3.362 1609.46 3.17 1609.09 3.074C1608.73 2.966 1608.23 2.912 1607.58 2.912C1606.98 2.912 1606.44 2.912 1605.96 2.912C1605.49 2.912 1605.07 2.918 1604.7 2.93C1604.34 2.93 1604.03 2.942 1603.76 2.966L1603.51 1.58C1603.94 1.532 1604.35 1.502 1604.74 1.49C1605.13 1.466 1605.56 1.454 1606.03 1.454C1606.5 1.442 1607.05 1.436 1607.67 1.436ZM1605.28 1.58V14H1603.51V1.58H1605.28ZM1618.24 8.564C1619.14 8.564 1619.84 8.648 1620.34 8.816C1620.86 8.984 1621.22 9.272 1621.44 9.68C1621.66 10.088 1621.76 10.64 1621.76 11.336C1621.76 12.056 1621.65 12.62 1621.42 13.028C1621.21 13.436 1620.86 13.718 1620.38 13.874C1619.9 14.03 1619.27 14.108 1618.51 14.108C1617.92 14.108 1617.41 14.102 1616.98 14.09C1616.54 14.09 1616.15 14.078 1615.79 14.054C1615.43 14.042 1615.05 14.024 1614.65 14L1614.85 12.74C1615.08 12.752 1615.49 12.764 1616.09 12.776C1616.69 12.788 1617.41 12.794 1618.24 12.794C1618.68 12.794 1619.03 12.752 1619.28 12.668C1619.54 12.584 1619.73 12.434 1619.84 12.218C1619.95 12.002 1620 11.684 1620 11.264C1620 10.712 1619.88 10.328 1619.64 10.112C1619.4 9.896 1618.93 9.788 1618.24 9.788H1614.83V8.564H1618.24ZM1616.29 5.216V14H1614.6V5.216H1616.29ZM1625.04 5.216V14H1623.29V5.216H1625.04ZM1632.95 5C1634.04 5 1634.82 5.396 1635.29 6.188C1635.76 6.98 1635.99 8.138 1635.99 9.662C1635.99 10.802 1635.87 11.708 1635.63 12.38C1635.39 13.04 1635.03 13.514 1634.53 13.802C1634.04 14.078 1633.42 14.216 1632.68 14.216C1632.09 14.216 1631.52 14.138 1630.95 13.982C1630.39 13.814 1629.85 13.562 1629.35 13.226L1629.46 12.254C1629.99 12.41 1630.45 12.536 1630.86 12.632C1631.27 12.728 1631.71 12.776 1632.18 12.776C1632.67 12.776 1633.06 12.692 1633.35 12.524C1633.65 12.356 1633.86 12.044 1633.99 11.588C1634.13 11.132 1634.19 10.49 1634.19 9.662C1634.19 8.846 1634.13 8.21 1634.01 7.754C1633.89 7.286 1633.7 6.956 1633.44 6.764C1633.17 6.56 1632.81 6.458 1632.36 6.458C1631.9 6.458 1631.45 6.566 1631.01 6.782C1630.56 6.986 1630.05 7.31 1629.48 7.754L1629.28 6.674C1629.58 6.338 1629.93 6.044 1630.32 5.792C1630.73 5.54 1631.16 5.348 1631.62 5.216C1632.07 5.072 1632.52 5 1632.95 5ZM1629.21 5.216L1629.4 6.998L1629.53 7.232V12.884L1629.44 13.1C1629.48 13.436 1629.5 13.766 1629.51 14.09C1629.54 14.414 1629.54 14.756 1629.53 15.116V17.582H1627.8V5.216H1629.21ZM1646.24 5.216L1642.8 14.414C1642.69 14.726 1642.55 15.044 1642.38 15.368C1642.22 15.704 1642.01 16.022 1641.77 16.322C1641.54 16.622 1641.27 16.88 1640.96 17.096C1640.51 17.408 1640 17.594 1639.43 17.654C1638.88 17.714 1638.29 17.702 1637.67 17.618L1637.81 16.43C1638.22 16.442 1638.61 16.424 1638.98 16.376C1639.35 16.328 1639.68 16.214 1639.97 16.034C1640.22 15.854 1640.45 15.608 1640.66 15.296C1640.86 14.996 1641.03 14.666 1641.18 14.306L1641.63 13.244C1641.72 12.992 1641.82 12.716 1641.92 12.416C1642.01 12.104 1642.1 11.834 1642.19 11.606L1644.36 5.216H1646.24ZM1639.05 5.216L1641.27 11.606C1641.33 11.786 1641.38 11.972 1641.43 12.164C1641.48 12.344 1641.53 12.53 1641.57 12.722H1642.01L1641.41 14H1640.94C1640.79 14 1640.66 13.964 1640.55 13.892C1640.45 13.808 1640.37 13.694 1640.31 13.55L1637.2 5.216H1639.05ZM1649.24 5.216V8.492C1649.24 8.9 1649.33 9.188 1649.51 9.356C1649.69 9.524 1649.99 9.608 1650.39 9.608C1650.87 9.608 1651.34 9.566 1651.8 9.482C1652.25 9.386 1652.77 9.212 1653.35 8.96L1653.51 10.238C1652.88 10.502 1652.24 10.7 1651.56 10.832C1650.89 10.952 1650.3 11.012 1649.8 11.012C1649.04 11.012 1648.47 10.85 1648.09 10.526C1647.72 10.202 1647.53 9.71 1647.53 9.05V5.216H1649.24ZM1654.89 5.216V14H1653.15V5.216H1654.89ZM1665.21 5.216C1665.01 5.756 1664.82 6.242 1664.65 6.674C1664.48 7.106 1664.32 7.484 1664.15 7.808C1663.98 8.132 1663.79 8.402 1663.57 8.618C1663.37 8.834 1663.13 9.008 1662.85 9.14C1662.59 9.272 1662.26 9.356 1661.88 9.392V9.464C1662.29 9.5 1662.63 9.578 1662.91 9.698C1663.19 9.818 1663.45 9.992 1663.66 10.22C1663.89 10.448 1664.09 10.736 1664.27 11.084C1664.45 11.42 1664.64 11.834 1664.83 12.326C1665.02 12.806 1665.23 13.364 1665.46 14H1663.64C1663.43 13.412 1663.23 12.902 1663.05 12.47C1662.88 12.026 1662.71 11.654 1662.55 11.354C1662.38 11.042 1662.2 10.796 1662.01 10.616C1661.81 10.424 1661.59 10.292 1661.32 10.22C1661.07 10.136 1660.77 10.094 1660.42 10.094V8.78C1660.84 8.78 1661.2 8.708 1661.48 8.564C1661.77 8.408 1662.02 8.18 1662.22 7.88C1662.44 7.58 1662.64 7.214 1662.82 6.782C1663 6.338 1663.19 5.816 1663.41 5.216H1665.21ZM1659.4 5.216V7.754C1659.4 8.03 1659.37 8.312 1659.32 8.6C1659.29 8.876 1659.23 9.14 1659.14 9.392C1659.22 9.656 1659.28 9.92 1659.32 10.184C1659.37 10.448 1659.4 10.694 1659.4 10.922V14H1657.65V5.216H1659.4ZM1661.02 8.78V10.094H1658.89V8.78H1661.02ZM1671.64 5C1672.31 5 1672.87 5.09 1673.33 5.27C1673.78 5.438 1674.13 5.732 1674.35 6.152C1674.59 6.572 1674.71 7.148 1674.71 7.88V14H1673.35L1673.08 12.092L1672.99 11.876V7.88C1672.97 7.364 1672.85 6.992 1672.61 6.764C1672.38 6.536 1671.93 6.422 1671.26 6.422C1670.79 6.422 1670.21 6.446 1669.51 6.494C1668.83 6.542 1668.15 6.59 1667.48 6.638L1667.32 5.396C1667.72 5.324 1668.18 5.258 1668.68 5.198C1669.19 5.138 1669.7 5.09 1670.21 5.054C1670.73 5.018 1671.2 5 1671.64 5ZM1673.92 8.582L1673.9 9.806L1669.78 9.824C1669.37 9.836 1669.09 9.944 1668.92 10.148C1668.75 10.34 1668.67 10.61 1668.67 10.958V11.498C1668.67 11.93 1668.77 12.248 1668.99 12.452C1669.21 12.644 1669.54 12.74 1669.98 12.74C1670.32 12.74 1670.69 12.68 1671.1 12.56C1671.52 12.428 1671.94 12.236 1672.36 11.984C1672.78 11.72 1673.15 11.39 1673.49 10.994V12.128C1673.38 12.296 1673.21 12.5 1672.97 12.74C1672.73 12.968 1672.43 13.19 1672.09 13.406C1671.75 13.622 1671.37 13.802 1670.95 13.946C1670.53 14.09 1670.08 14.162 1669.58 14.162C1669.06 14.162 1668.59 14.072 1668.18 13.892C1667.78 13.7 1667.47 13.424 1667.24 13.064C1667.03 12.692 1666.92 12.242 1666.92 11.714V10.76C1666.92 10.076 1667.14 9.542 1667.57 9.158C1668.01 8.774 1668.62 8.582 1669.4 8.582H1673.92ZM1678.38 6.044C1678.62 6.044 1678.79 6.092 1678.88 6.188C1678.98 6.272 1679.03 6.434 1679.03 6.674V7.628C1679.03 7.868 1678.98 8.036 1678.88 8.132C1678.79 8.228 1678.62 8.276 1678.38 8.276H1677.86C1677.62 8.276 1677.45 8.228 1677.35 8.132C1677.26 8.036 1677.21 7.868 1677.21 7.628V6.674C1677.21 6.434 1677.26 6.272 1677.35 6.188C1677.45 6.092 1677.62 6.044 1677.86 6.044H1678.38ZM1678.38 11.768C1678.62 11.768 1678.79 11.816 1678.88 11.912C1678.98 11.996 1679.03 12.158 1679.03 12.398V13.352C1679.03 13.592 1678.98 13.76 1678.88 13.856C1678.79 13.952 1678.62 14 1678.38 14H1677.86C1677.62 14 1677.45 13.952 1677.35 13.856C1677.26 13.76 1677.21 13.592 1677.21 13.352V12.398C1677.21 12.158 1677.26 11.996 1677.35 11.912C1677.45 11.816 1677.62 11.768 1677.86 11.768H1678.38ZM1689.03 1.346C1689.96 1.346 1690.7 1.436 1691.27 1.616C1691.83 1.784 1692.24 2.078 1692.51 2.498C1692.77 2.918 1692.9 3.494 1692.9 4.226C1692.9 4.766 1692.85 5.258 1692.74 5.702C1692.63 6.134 1692.45 6.494 1692.18 6.782C1691.93 7.07 1691.56 7.262 1691.07 7.358V7.43C1691.9 7.562 1692.46 7.898 1692.76 8.438C1693.07 8.978 1693.23 9.68 1693.25 10.544C1693.26 11.384 1693.13 12.08 1692.87 12.632C1692.62 13.172 1692.2 13.574 1691.61 13.838C1691.03 14.102 1690.24 14.234 1689.23 14.234C1688.57 14.234 1687.9 14.198 1687.22 14.126C1686.54 14.066 1685.88 13.994 1685.24 13.91L1685.34 12.488C1685.76 12.524 1686.16 12.56 1686.53 12.596C1686.92 12.62 1687.29 12.638 1687.65 12.65C1688.02 12.662 1688.4 12.668 1688.78 12.668C1689.43 12.668 1689.95 12.596 1690.33 12.452C1690.73 12.308 1691.01 12.068 1691.19 11.732C1691.37 11.384 1691.46 10.922 1691.46 10.346C1691.46 9.902 1691.4 9.518 1691.28 9.194C1691.16 8.87 1690.93 8.618 1690.58 8.438C1690.25 8.246 1689.75 8.15 1689.11 8.15L1686.78 8.168V6.818H1689.11C1689.57 6.818 1689.95 6.758 1690.22 6.638C1690.51 6.506 1690.72 6.344 1690.85 6.152C1691 5.948 1691.09 5.72 1691.12 5.468C1691.17 5.204 1691.19 4.934 1691.19 4.658C1691.18 4.154 1691.1 3.776 1690.94 3.524C1690.8 3.272 1690.55 3.104 1690.2 3.02C1689.86 2.936 1689.38 2.894 1688.76 2.894C1688.16 2.894 1687.59 2.912 1687.04 2.948C1686.48 2.972 1686 2.996 1685.58 3.02L1685.45 1.67C1686.08 1.562 1686.68 1.484 1687.27 1.436C1687.86 1.376 1688.45 1.346 1689.03 1.346ZM1703.84 1.346C1704.93 1.346 1705.79 1.568 1706.43 2.012C1707.06 2.444 1707.52 3.134 1707.8 4.082C1708.07 5.03 1708.21 6.266 1708.21 7.79C1708.21 9.314 1708.07 10.55 1707.8 11.498C1707.52 12.446 1707.06 13.142 1706.43 13.586C1705.79 14.018 1704.93 14.234 1703.84 14.234C1702.76 14.234 1701.89 14.018 1701.24 13.586C1700.61 13.142 1700.15 12.446 1699.88 11.498C1699.6 10.55 1699.46 9.314 1699.46 7.79C1699.46 6.266 1699.6 5.03 1699.88 4.082C1700.15 3.134 1700.61 2.444 1701.24 2.012C1701.89 1.568 1702.76 1.346 1703.84 1.346ZM1703.82 2.876C1703.33 2.876 1702.91 2.966 1702.58 3.146C1702.25 3.314 1701.99 3.59 1701.78 3.974C1701.59 4.358 1701.45 4.862 1701.35 5.486C1701.27 6.11 1701.23 6.878 1701.23 7.79C1701.23 8.69 1701.27 9.458 1701.35 10.094C1701.45 10.718 1701.59 11.222 1701.78 11.606C1701.99 11.99 1702.25 12.272 1702.58 12.452C1702.91 12.62 1703.33 12.704 1703.82 12.704C1704.32 12.704 1704.74 12.62 1705.08 12.452C1705.41 12.272 1705.68 11.99 1705.89 11.606C1706.09 11.222 1706.24 10.718 1706.32 10.094C1706.4 9.458 1706.45 8.69 1706.45 7.79C1706.45 6.878 1706.4 6.11 1706.32 5.486C1706.24 4.862 1706.09 4.358 1705.89 3.974C1705.68 3.59 1705.41 3.314 1705.08 3.146C1704.74 2.966 1704.32 2.876 1703.82 2.876ZM1714.32 1.364C1715.23 1.364 1715.96 1.472 1716.51 1.688C1717.07 1.892 1717.49 2.234 1717.77 2.714C1718.06 3.182 1718.25 3.824 1718.33 4.64C1718.43 5.444 1718.48 6.446 1718.48 7.646C1718.48 9.038 1718.39 10.166 1718.21 11.03C1718.03 11.894 1717.74 12.56 1717.36 13.028C1716.98 13.484 1716.47 13.796 1715.85 13.964C1715.24 14.132 1714.49 14.216 1713.6 14.216C1713.32 14.216 1712.94 14.204 1712.45 14.18C1711.95 14.156 1711.41 14.072 1710.83 13.928L1710.97 12.65C1711.27 12.674 1711.53 12.692 1711.76 12.704C1712 12.716 1712.26 12.722 1712.54 12.722C1712.82 12.722 1713.18 12.722 1713.6 12.722C1714.21 12.722 1714.71 12.65 1715.11 12.506C1715.52 12.362 1715.84 12.104 1716.08 11.732C1716.32 11.36 1716.49 10.844 1716.59 10.184C1716.69 9.512 1716.75 8.648 1716.75 7.592C1716.75 6.668 1716.72 5.9 1716.68 5.288C1716.64 4.676 1716.55 4.19 1716.41 3.83C1716.26 3.47 1716.02 3.218 1715.69 3.074C1715.35 2.918 1714.89 2.84 1714.3 2.84C1713.64 2.84 1713.14 2.948 1712.81 3.164C1712.47 3.38 1712.25 3.698 1712.14 4.118C1712.03 4.538 1711.98 5.048 1711.98 5.648C1711.98 6.236 1712.04 6.728 1712.16 7.124C1712.28 7.508 1712.49 7.802 1712.81 8.006C1713.13 8.21 1713.57 8.312 1714.14 8.312C1714.52 8.312 1714.87 8.264 1715.18 8.168C1715.51 8.06 1715.84 7.892 1716.17 7.664C1716.52 7.424 1716.92 7.094 1717.38 6.674L1717.45 7.502C1717.07 8.066 1716.69 8.51 1716.32 8.834C1715.96 9.146 1715.57 9.368 1715.15 9.5C1714.73 9.632 1714.23 9.698 1713.65 9.698C1712.79 9.698 1712.11 9.524 1711.62 9.176C1711.13 8.828 1710.77 8.354 1710.56 7.754C1710.35 7.142 1710.25 6.446 1710.25 5.666C1710.25 4.706 1710.38 3.908 1710.63 3.272C1710.88 2.636 1711.3 2.162 1711.89 1.85C1712.49 1.526 1713.3 1.364 1714.32 1.364ZM1725.7 1.58L1722.31 8.888C1722.21 9.116 1722.2 9.296 1722.3 9.428C1722.4 9.548 1722.55 9.608 1722.75 9.608H1730.07V10.832L1728.43 11.012H1721.67C1721.33 11.012 1721.04 10.916 1720.8 10.724C1720.57 10.532 1720.42 10.286 1720.35 9.986C1720.29 9.686 1720.33 9.386 1720.46 9.086L1723.93 1.58H1725.7ZM1728.49 3.956V14H1726.8V6.008L1727.1 3.956H1728.49ZM1742.58 1.58C1742.83 1.58 1743.03 1.628 1743.19 1.724C1743.35 1.82 1743.45 1.958 1743.5 2.138C1743.54 2.306 1743.53 2.51 1743.46 2.75L1739.59 14H1737.81L1741.23 4.064C1741.3 3.884 1741.37 3.716 1741.43 3.56C1741.49 3.404 1741.56 3.248 1741.64 3.092H1735.54L1735.47 1.58H1742.58ZM1752.45 1.58L1752.36 3.056H1747.16L1746.98 6.26L1748.4 6.386C1749.22 6.446 1749.9 6.56 1750.46 6.728C1751.02 6.896 1751.48 7.136 1751.82 7.448C1752.17 7.748 1752.42 8.132 1752.58 8.6C1752.74 9.056 1752.81 9.608 1752.81 10.256C1752.81 10.772 1752.76 11.264 1752.65 11.732C1752.54 12.2 1752.35 12.62 1752.06 12.992C1751.77 13.364 1751.36 13.664 1750.82 13.892C1750.29 14.108 1749.59 14.216 1748.73 14.216C1748.22 14.216 1747.64 14.18 1746.98 14.108C1746.32 14.036 1745.64 13.928 1744.95 13.784L1745.15 12.344C1745.72 12.44 1746.29 12.518 1746.84 12.578C1747.4 12.626 1747.89 12.65 1748.31 12.65C1749.07 12.65 1749.64 12.56 1750.02 12.38C1750.41 12.188 1750.67 11.912 1750.82 11.552C1750.96 11.192 1751.04 10.754 1751.05 10.238C1751.06 9.698 1751 9.272 1750.85 8.96C1750.71 8.648 1750.48 8.414 1750.17 8.258C1749.86 8.102 1749.44 7.994 1748.93 7.934C1748.41 7.874 1747.78 7.82 1747.04 7.772L1746.08 7.682C1745.89 7.658 1745.73 7.58 1745.6 7.448C1745.48 7.316 1745.42 7.148 1745.43 6.944L1745.72 1.58H1752.45ZM1758.47 1.346C1759.39 1.346 1760.14 1.436 1760.7 1.616C1761.26 1.784 1761.68 2.078 1761.94 2.498C1762.21 2.918 1762.34 3.494 1762.34 4.226C1762.34 4.766 1762.28 5.258 1762.18 5.702C1762.07 6.134 1761.88 6.494 1761.62 6.782C1761.37 7.07 1760.99 7.262 1760.5 7.358V7.43C1761.33 7.562 1761.89 7.898 1762.19 8.438C1762.51 8.978 1762.67 9.68 1762.68 10.544C1762.69 11.384 1762.57 12.08 1762.3 12.632C1762.05 13.172 1761.63 13.574 1761.04 13.838C1760.47 14.102 1759.67 14.234 1758.67 14.234C1758.01 14.234 1757.33 14.198 1756.65 14.126C1755.98 14.066 1755.32 13.994 1754.67 13.91L1754.78 12.488C1755.2 12.524 1755.59 12.56 1755.97 12.596C1756.35 12.62 1756.72 12.638 1757.08 12.65C1757.45 12.662 1757.83 12.668 1758.22 12.668C1758.86 12.668 1759.38 12.596 1759.76 12.452C1760.16 12.308 1760.45 12.068 1760.63 11.732C1760.81 11.384 1760.9 10.922 1760.9 10.346C1760.9 9.902 1760.84 9.518 1760.72 9.194C1760.6 8.87 1760.36 8.618 1760.02 8.438C1759.68 8.246 1759.19 8.15 1758.54 8.15L1756.22 8.168V6.818H1758.54C1759.01 6.818 1759.38 6.758 1759.66 6.638C1759.94 6.506 1760.15 6.344 1760.29 6.152C1760.43 5.948 1760.52 5.72 1760.56 5.468C1760.6 5.204 1760.63 4.934 1760.63 4.658C1760.62 4.154 1760.53 3.776 1760.38 3.524C1760.23 3.272 1759.99 3.104 1759.64 3.02C1759.29 2.936 1758.81 2.894 1758.2 2.894C1757.6 2.894 1757.02 2.912 1756.47 2.948C1755.92 2.972 1755.43 2.996 1755.01 3.02L1754.89 1.67C1755.51 1.562 1756.12 1.484 1756.7 1.436C1757.29 1.376 1757.88 1.346 1758.47 1.346ZM1774.33 5C1775.42 5 1776.2 5.396 1776.67 6.188C1777.14 6.98 1777.37 8.138 1777.37 9.662C1777.37 10.802 1777.25 11.708 1777.01 12.38C1776.77 13.04 1776.41 13.514 1775.91 13.802C1775.42 14.078 1774.8 14.216 1774.06 14.216C1773.47 14.216 1772.9 14.138 1772.33 13.982C1771.77 13.814 1771.23 13.562 1770.73 13.226L1770.84 12.254C1771.37 12.41 1771.83 12.536 1772.24 12.632C1772.65 12.728 1773.09 12.776 1773.56 12.776C1774.05 12.776 1774.44 12.692 1774.73 12.524C1775.03 12.356 1775.24 12.044 1775.37 11.588C1775.51 11.132 1775.57 10.49 1775.57 9.662C1775.57 8.846 1775.51 8.21 1775.39 7.754C1775.27 7.286 1775.08 6.956 1774.82 6.764C1774.55 6.56 1774.19 6.458 1773.74 6.458C1773.28 6.458 1772.83 6.566 1772.39 6.782C1771.94 6.986 1771.43 7.31 1770.86 7.754L1770.66 6.674C1770.96 6.338 1771.31 6.044 1771.7 5.792C1772.11 5.54 1772.54 5.348 1773 5.216C1773.45 5.072 1773.9 5 1774.33 5ZM1770.59 5.216L1770.78 6.998L1770.91 7.232V12.884L1770.82 13.1C1770.86 13.436 1770.88 13.766 1770.89 14.09C1770.92 14.414 1770.92 14.756 1770.91 15.116V17.582H1769.18V5.216H1770.59ZM1787.62 5.216L1784.18 14.414C1784.07 14.726 1783.93 15.044 1783.76 15.368C1783.6 15.704 1783.39 16.022 1783.15 16.322C1782.92 16.622 1782.65 16.88 1782.34 17.096C1781.89 17.408 1781.38 17.594 1780.81 17.654C1780.26 17.714 1779.67 17.702 1779.05 17.618L1779.19 16.43C1779.6 16.442 1779.99 16.424 1780.36 16.376C1780.73 16.328 1781.06 16.214 1781.35 16.034C1781.6 15.854 1781.83 15.608 1782.04 15.296C1782.24 14.996 1782.41 14.666 1782.56 14.306L1783.01 13.244C1783.1 12.992 1783.2 12.716 1783.3 12.416C1783.39 12.104 1783.48 11.834 1783.57 11.606L1785.74 5.216H1787.62ZM1780.43 5.216L1782.65 11.606C1782.71 11.786 1782.76 11.972 1782.81 12.164C1782.86 12.344 1782.91 12.53 1782.95 12.722H1783.39L1782.79 14H1782.32C1782.17 14 1782.04 13.964 1781.93 13.892C1781.83 13.808 1781.75 13.694 1781.69 13.55L1778.58 5.216H1780.43ZM1796.56 0.733999L1796.94 2.066C1796.58 2.294 1796.24 2.468 1795.91 2.588C1795.59 2.708 1795.27 2.798 1794.96 2.858C1794.66 2.906 1794.35 2.954 1794.04 3.002C1793.73 3.05 1793.41 3.122 1793.07 3.218C1792.49 3.374 1792.04 3.596 1791.7 3.884C1791.38 4.172 1791.14 4.496 1790.98 4.856C1790.84 5.216 1790.73 5.588 1790.66 5.972C1790.61 6.248 1790.57 6.5 1790.53 6.728C1790.51 6.944 1790.49 7.124 1790.48 7.268H1790.51C1790.62 7.052 1790.75 6.836 1790.91 6.62C1791.07 6.404 1791.26 6.212 1791.5 6.044C1791.76 5.876 1792.07 5.744 1792.44 5.648C1792.82 5.54 1793.29 5.486 1793.84 5.486C1794.72 5.486 1795.42 5.63 1795.93 5.918C1796.45 6.206 1796.82 6.662 1797.05 7.286C1797.28 7.898 1797.39 8.708 1797.39 9.716C1797.39 10.652 1797.28 11.456 1797.05 12.128C1796.82 12.8 1796.41 13.316 1795.81 13.676C1795.22 14.036 1794.38 14.216 1793.3 14.216C1792.52 14.216 1791.88 14.126 1791.36 13.946C1790.86 13.766 1790.45 13.514 1790.15 13.19C1789.87 12.854 1789.65 12.458 1789.51 12.002C1789.37 11.546 1789.28 11.036 1789.24 10.472C1789.2 9.908 1789.18 9.308 1789.18 8.672C1789.18 7.736 1789.22 6.896 1789.29 6.152C1789.37 5.408 1789.52 4.76 1789.74 4.208C1789.97 3.656 1790.3 3.188 1790.75 2.804C1791.19 2.42 1791.77 2.12 1792.49 1.904C1792.85 1.796 1793.2 1.712 1793.52 1.652C1793.86 1.592 1794.19 1.532 1794.51 1.472C1794.85 1.412 1795.18 1.328 1795.52 1.22C1795.85 1.112 1796.2 0.949999 1796.56 0.733999ZM1793.39 6.872C1792.71 6.872 1792.19 6.98 1791.85 7.196C1791.5 7.412 1791.26 7.73 1791.14 8.15C1791.04 8.558 1790.98 9.08 1790.98 9.716C1790.98 10.496 1791.05 11.114 1791.2 11.57C1791.34 12.026 1791.58 12.344 1791.92 12.524C1792.27 12.704 1792.72 12.794 1793.29 12.794C1793.85 12.794 1794.29 12.704 1794.62 12.524C1794.95 12.344 1795.19 12.032 1795.34 11.588C1795.48 11.132 1795.55 10.508 1795.55 9.716C1795.55 8.972 1795.49 8.396 1795.36 7.988C1795.24 7.568 1795.02 7.28 1794.71 7.124C1794.4 6.956 1793.96 6.872 1793.39 6.872ZM1800.71 11.768C1800.95 11.768 1801.11 11.816 1801.21 11.912C1801.31 11.996 1801.35 12.158 1801.35 12.398V13.352C1801.35 13.592 1801.31 13.76 1801.21 13.856C1801.11 13.952 1800.95 14 1800.71 14H1800.18C1799.94 14 1799.78 13.952 1799.68 13.856C1799.58 13.76 1799.54 13.592 1799.54 13.352V12.398C1799.54 12.158 1799.58 11.996 1799.68 11.912C1799.78 11.816 1799.94 11.768 1800.18 11.768H1800.71Z" fill="#868686"/>
                <path d="M1605.31 24.58V37H1603.51V24.58H1605.31ZM1611 24.58V26.002H1605.17V24.58H1611ZM1612.6 24.58V37H1610.8V24.58H1612.6ZM1620.66 28C1621.75 28 1622.53 28.396 1623 29.188C1623.47 29.98 1623.7 31.138 1623.7 32.662C1623.7 33.802 1623.58 34.708 1623.34 35.38C1623.1 36.04 1622.74 36.514 1622.25 36.802C1621.75 37.078 1621.14 37.216 1620.39 37.216C1619.8 37.216 1619.23 37.138 1618.66 36.982C1618.1 36.814 1617.57 36.562 1617.06 36.226L1617.17 35.254C1617.7 35.41 1618.17 35.536 1618.57 35.632C1618.98 35.728 1619.42 35.776 1619.89 35.776C1620.38 35.776 1620.77 35.692 1621.06 35.524C1621.36 35.356 1621.57 35.044 1621.71 34.588C1621.84 34.132 1621.9 33.49 1621.9 32.662C1621.9 31.846 1621.84 31.21 1621.72 30.754C1621.6 30.286 1621.41 29.956 1621.15 29.764C1620.88 29.56 1620.52 29.458 1620.07 29.458C1619.61 29.458 1619.16 29.566 1618.72 29.782C1618.27 29.986 1617.76 30.31 1617.19 30.754L1616.99 29.674C1617.29 29.338 1617.64 29.044 1618.03 28.792C1618.44 28.54 1618.87 28.348 1619.33 28.216C1619.79 28.072 1620.23 28 1620.66 28ZM1616.92 28.216L1617.12 29.998L1617.24 30.232V35.884L1617.15 36.1C1617.19 36.436 1617.21 36.766 1617.22 37.09C1617.25 37.414 1617.25 37.756 1617.24 38.116V40.582H1615.51V28.216H1616.92ZM1633.95 28.216V37H1632.38V31.402C1632.38 31.198 1632.39 31 1632.4 30.808C1632.41 30.616 1632.43 30.406 1632.45 30.178H1632.4C1632.33 30.358 1632.23 30.55 1632.11 30.754C1632 30.946 1631.89 31.114 1631.79 31.258L1627.52 37H1626.06V28.216H1627.63V33.832C1627.63 34.024 1627.62 34.216 1627.61 34.408C1627.61 34.6 1627.6 34.81 1627.57 35.038H1627.61C1627.71 34.846 1627.81 34.66 1627.92 34.48C1628.02 34.288 1628.13 34.126 1628.24 33.994L1632.51 28.216H1633.95ZM1643.93 23.734L1644.31 25.066C1643.95 25.294 1643.61 25.468 1643.28 25.588C1642.96 25.708 1642.64 25.798 1642.33 25.858C1642.03 25.906 1641.72 25.954 1641.41 26.002C1641.1 26.05 1640.78 26.122 1640.44 26.218C1639.86 26.374 1639.41 26.596 1639.07 26.884C1638.75 27.172 1638.51 27.496 1638.35 27.856C1638.21 28.216 1638.1 28.588 1638.03 28.972C1637.98 29.248 1637.94 29.5 1637.9 29.728C1637.88 29.944 1637.86 30.124 1637.85 30.268H1637.88C1637.99 30.052 1638.12 29.836 1638.28 29.62C1638.44 29.404 1638.63 29.212 1638.87 29.044C1639.13 28.876 1639.44 28.744 1639.81 28.648C1640.19 28.54 1640.66 28.486 1641.21 28.486C1642.09 28.486 1642.79 28.63 1643.3 28.918C1643.82 29.206 1644.19 29.662 1644.42 30.286C1644.65 30.898 1644.76 31.708 1644.76 32.716C1644.76 33.652 1644.65 34.456 1644.42 35.128C1644.19 35.8 1643.78 36.316 1643.18 36.676C1642.59 37.036 1641.75 37.216 1640.67 37.216C1639.89 37.216 1639.25 37.126 1638.73 36.946C1638.23 36.766 1637.82 36.514 1637.52 36.19C1637.24 35.854 1637.02 35.458 1636.88 35.002C1636.74 34.546 1636.65 34.036 1636.61 33.472C1636.57 32.908 1636.55 32.308 1636.55 31.672C1636.55 30.736 1636.59 29.896 1636.66 29.152C1636.74 28.408 1636.89 27.76 1637.11 27.208C1637.34 26.656 1637.67 26.188 1638.12 25.804C1638.56 25.42 1639.14 25.12 1639.86 24.904C1640.22 24.796 1640.57 24.712 1640.89 24.652C1641.23 24.592 1641.56 24.532 1641.88 24.472C1642.22 24.412 1642.55 24.328 1642.89 24.22C1643.22 24.112 1643.57 23.95 1643.93 23.734ZM1640.76 29.872C1640.08 29.872 1639.56 29.98 1639.22 30.196C1638.87 30.412 1638.63 30.73 1638.51 31.15C1638.41 31.558 1638.35 32.08 1638.35 32.716C1638.35 33.496 1638.42 34.114 1638.57 34.57C1638.71 35.026 1638.95 35.344 1639.29 35.524C1639.64 35.704 1640.09 35.794 1640.66 35.794C1641.22 35.794 1641.66 35.704 1641.99 35.524C1642.32 35.344 1642.56 35.032 1642.71 34.588C1642.85 34.132 1642.92 33.508 1642.92 32.716C1642.92 31.972 1642.86 31.396 1642.73 30.988C1642.61 30.568 1642.39 30.28 1642.08 30.124C1641.77 29.956 1641.33 29.872 1640.76 29.872ZM1650.74 31.564C1651.64 31.564 1652.34 31.648 1652.84 31.816C1653.36 31.984 1653.73 32.272 1653.94 32.68C1654.16 33.088 1654.27 33.64 1654.27 34.336C1654.27 35.056 1654.15 35.62 1653.92 36.028C1653.71 36.436 1653.36 36.718 1652.88 36.874C1652.4 37.03 1651.78 37.108 1651.01 37.108C1650.42 37.108 1649.91 37.102 1649.48 37.09C1649.05 37.09 1648.65 37.078 1648.29 37.054C1647.93 37.042 1647.55 37.024 1647.16 37L1647.35 35.74C1647.58 35.752 1648 35.764 1648.6 35.776C1649.2 35.788 1649.91 35.794 1650.74 35.794C1651.18 35.794 1651.53 35.752 1651.78 35.668C1652.05 35.584 1652.23 35.434 1652.34 35.218C1652.45 35.002 1652.5 34.684 1652.5 34.264C1652.5 33.712 1652.38 33.328 1652.14 33.112C1651.9 32.896 1651.43 32.788 1650.74 32.788H1647.34V31.564H1650.74ZM1648.79 28.216V37H1647.1V28.216H1648.79ZM1657.54 28.216V37H1655.8V28.216H1657.54ZM1667.52 28.216V29.53H1664.25C1663.89 29.53 1663.62 29.608 1663.45 29.764C1663.3 29.92 1663.2 30.196 1663.15 30.592C1663.09 31.108 1663.02 31.642 1662.93 32.194C1662.86 32.734 1662.78 33.256 1662.68 33.76C1662.6 34.252 1662.48 34.696 1662.34 35.092C1662.19 35.548 1661.98 35.926 1661.71 36.226C1661.44 36.526 1661.12 36.748 1660.74 36.892C1660.35 37.024 1659.91 37.09 1659.42 37.09L1659.24 35.776C1659.55 35.692 1659.81 35.602 1660 35.506C1660.2 35.41 1660.36 35.29 1660.47 35.146C1660.59 34.99 1660.69 34.804 1660.77 34.588C1660.88 34.324 1660.97 34.012 1661.04 33.652C1661.13 33.292 1661.19 32.92 1661.24 32.536C1661.3 32.14 1661.35 31.75 1661.38 31.366C1661.43 30.97 1661.47 30.61 1661.51 30.286C1661.59 29.614 1661.82 29.104 1662.18 28.756C1662.54 28.396 1663.08 28.216 1663.81 28.216H1667.52ZM1667.76 28.216V37H1666.01V28.216H1667.76ZM1674.15 31.564C1675.08 31.564 1675.8 31.648 1676.33 31.816C1676.86 31.984 1677.23 32.272 1677.45 32.68C1677.67 33.088 1677.79 33.64 1677.79 34.336C1677.79 35.056 1677.67 35.62 1677.45 36.028C1677.22 36.436 1676.85 36.718 1676.35 36.874C1675.86 37.03 1675.21 37.108 1674.42 37.108C1673.83 37.108 1673.32 37.102 1672.89 37.09C1672.46 37.09 1672.06 37.078 1671.7 37.054C1671.34 37.042 1670.97 37.024 1670.57 37L1670.77 35.74C1671 35.752 1671.41 35.764 1672.01 35.776C1672.62 35.788 1673.34 35.794 1674.15 35.794C1674.61 35.794 1674.97 35.752 1675.25 35.668C1675.53 35.584 1675.72 35.434 1675.83 35.218C1675.95 35.002 1676.01 34.684 1676.01 34.264C1676.01 33.892 1675.95 33.598 1675.84 33.382C1675.74 33.166 1675.55 33.016 1675.29 32.932C1675.02 32.836 1674.64 32.788 1674.15 32.788H1670.75V31.564H1674.15ZM1672.21 28.216V37H1670.52V28.216H1672.21ZM1680.86 29.044C1681.1 29.044 1681.27 29.092 1681.36 29.188C1681.46 29.272 1681.51 29.434 1681.51 29.674V30.628C1681.51 30.868 1681.46 31.036 1681.36 31.132C1681.27 31.228 1681.1 31.276 1680.86 31.276H1680.34C1680.1 31.276 1679.93 31.228 1679.83 31.132C1679.74 31.036 1679.69 30.868 1679.69 30.628V29.674C1679.69 29.434 1679.74 29.272 1679.83 29.188C1679.93 29.092 1680.1 29.044 1680.34 29.044H1680.86ZM1680.86 34.768C1681.1 34.768 1681.27 34.816 1681.36 34.912C1681.46 34.996 1681.51 35.158 1681.51 35.398V36.352C1681.51 36.592 1681.46 36.76 1681.36 36.856C1681.27 36.952 1681.1 37 1680.86 37H1680.34C1680.1 37 1679.93 36.952 1679.83 36.856C1679.74 36.76 1679.69 36.592 1679.69 36.352V35.398C1679.69 35.158 1679.74 34.996 1679.83 34.912C1679.93 34.816 1680.1 34.768 1680.34 34.768H1680.86ZM1692.14 24.58V37H1690.34V27.352C1690.34 27.16 1690.35 26.974 1690.36 26.794C1690.37 26.602 1690.4 26.41 1690.43 26.218L1687.41 27.136L1687.17 25.858L1690.34 24.58H1692.14ZM1703.59 24.4C1704.39 24.4 1705.05 24.466 1705.57 24.598C1706.1 24.73 1706.51 24.928 1706.81 25.192C1707.11 25.456 1707.32 25.798 1707.42 26.218C1707.54 26.626 1707.6 27.112 1707.6 27.676C1707.6 28.204 1707.54 28.672 1707.42 29.08C1707.3 29.488 1707.11 29.818 1706.85 30.07C1706.58 30.322 1706.24 30.472 1705.82 30.52V30.592C1706.36 30.64 1706.78 30.808 1707.06 31.096C1707.36 31.384 1707.57 31.768 1707.69 32.248C1707.81 32.716 1707.87 33.268 1707.87 33.904C1707.87 34.672 1707.75 35.302 1707.51 35.794C1707.29 36.274 1706.86 36.628 1706.24 36.856C1705.62 37.072 1704.74 37.18 1703.59 37.18C1702.45 37.18 1701.57 37.072 1700.94 36.856C1700.32 36.628 1699.88 36.274 1699.63 35.794C1699.39 35.302 1699.27 34.672 1699.27 33.904C1699.27 33.268 1699.33 32.716 1699.45 32.248C1699.58 31.768 1699.8 31.384 1700.1 31.096C1700.4 30.808 1700.81 30.64 1701.34 30.592V30.52C1700.92 30.472 1700.57 30.322 1700.3 30.07C1700.03 29.818 1699.84 29.488 1699.72 29.08C1699.6 28.672 1699.54 28.204 1699.54 27.676C1699.54 27.112 1699.6 26.626 1699.72 26.218C1699.84 25.798 1700.05 25.456 1700.35 25.192C1700.65 24.928 1701.06 24.73 1701.57 24.598C1702.1 24.466 1702.77 24.4 1703.59 24.4ZM1703.63 31.24C1703.09 31.24 1702.64 31.276 1702.29 31.348C1701.95 31.408 1701.68 31.522 1701.48 31.69C1701.29 31.858 1701.15 32.092 1701.07 32.392C1701 32.692 1700.96 33.076 1700.96 33.544C1700.96 34.084 1701.03 34.51 1701.18 34.822C1701.32 35.134 1701.59 35.356 1701.97 35.488C1702.35 35.62 1702.9 35.686 1703.61 35.686C1704.3 35.686 1704.83 35.62 1705.19 35.488C1705.56 35.356 1705.82 35.134 1705.95 34.822C1706.09 34.51 1706.16 34.084 1706.16 33.544C1706.16 33.064 1706.12 32.674 1706.04 32.374C1705.97 32.074 1705.84 31.846 1705.66 31.69C1705.48 31.522 1705.22 31.408 1704.89 31.348C1704.56 31.276 1704.14 31.24 1703.63 31.24ZM1703.61 25.786C1702.95 25.786 1702.44 25.852 1702.1 25.984C1701.76 26.104 1701.53 26.314 1701.39 26.614C1701.26 26.914 1701.2 27.328 1701.2 27.856C1701.2 28.396 1701.26 28.816 1701.39 29.116C1701.53 29.404 1701.77 29.602 1702.11 29.71C1702.46 29.818 1702.97 29.872 1703.63 29.872C1704.29 29.872 1704.78 29.818 1705.12 29.71C1705.46 29.59 1705.68 29.386 1705.79 29.098C1705.91 28.798 1705.97 28.384 1705.97 27.856C1705.97 27.328 1705.91 26.914 1705.79 26.614C1705.67 26.314 1705.43 26.104 1705.08 25.984C1704.75 25.852 1704.26 25.786 1703.61 25.786ZM1714.07 24.364C1714.98 24.364 1715.72 24.472 1716.27 24.688C1716.82 24.892 1717.24 25.234 1717.53 25.714C1717.82 26.182 1718 26.824 1718.09 27.64C1718.18 28.444 1718.23 29.446 1718.23 30.646C1718.23 32.038 1718.14 33.166 1717.96 34.03C1717.78 34.894 1717.5 35.56 1717.11 36.028C1716.73 36.484 1716.23 36.796 1715.6 36.964C1714.99 37.132 1714.24 37.216 1713.35 37.216C1713.08 37.216 1712.69 37.204 1712.2 37.18C1711.71 37.156 1711.17 37.072 1710.58 36.928L1710.72 35.65C1711.02 35.674 1711.29 35.692 1711.52 35.704C1711.76 35.716 1712.01 35.722 1712.29 35.722C1712.58 35.722 1712.93 35.722 1713.35 35.722C1713.96 35.722 1714.47 35.65 1714.86 35.506C1715.27 35.362 1715.6 35.104 1715.84 34.732C1716.08 34.36 1716.24 33.844 1716.34 33.184C1716.45 32.512 1716.5 31.648 1716.5 30.592C1716.5 29.668 1716.48 28.9 1716.43 28.288C1716.39 27.676 1716.3 27.19 1716.16 26.83C1716.02 26.47 1715.78 26.218 1715.44 26.074C1715.1 25.918 1714.64 25.84 1714.05 25.84C1713.39 25.84 1712.9 25.948 1712.56 26.164C1712.22 26.38 1712 26.698 1711.89 27.118C1711.79 27.538 1711.73 28.048 1711.73 28.648C1711.73 29.236 1711.79 29.728 1711.91 30.124C1712.03 30.508 1712.25 30.802 1712.56 31.006C1712.88 31.21 1713.33 31.312 1713.89 31.312C1714.28 31.312 1714.62 31.264 1714.94 31.168C1715.26 31.06 1715.59 30.892 1715.93 30.664C1716.27 30.424 1716.68 30.094 1717.13 29.674L1717.2 30.502C1716.82 31.066 1716.44 31.51 1716.07 31.834C1715.71 32.146 1715.32 32.368 1714.9 32.5C1714.48 32.632 1713.98 32.698 1713.41 32.698C1712.54 32.698 1711.86 32.524 1711.37 32.176C1710.88 31.828 1710.53 31.354 1710.31 30.754C1710.11 30.142 1710 29.446 1710 28.666C1710 27.706 1710.13 26.908 1710.38 26.272C1710.63 25.636 1711.05 25.162 1711.64 24.85C1712.24 24.526 1713.05 24.364 1714.07 24.364ZM1725.45 24.58L1722.07 31.888C1721.96 32.116 1721.95 32.296 1722.05 32.428C1722.16 32.548 1722.31 32.608 1722.5 32.608H1729.83V33.832L1728.19 34.012H1721.42C1721.08 34.012 1720.8 33.916 1720.56 33.724C1720.33 33.532 1720.18 33.286 1720.11 32.986C1720.05 32.686 1720.08 32.386 1720.21 32.086L1723.69 24.58H1725.45ZM1728.24 26.956V37H1726.55V29.008L1726.86 26.956H1728.24ZM1742.33 24.58C1742.58 24.58 1742.79 24.628 1742.94 24.724C1743.1 24.82 1743.2 24.958 1743.25 25.138C1743.3 25.306 1743.29 25.51 1743.21 25.75L1739.34 37H1737.56L1740.98 27.064C1741.05 26.884 1741.12 26.716 1741.18 26.56C1741.24 26.404 1741.31 26.248 1741.4 26.092H1735.29L1735.22 24.58H1742.33ZM1752.21 24.58L1752.12 26.056H1746.92L1746.74 29.26L1748.16 29.386C1748.97 29.446 1749.66 29.56 1750.21 29.728C1750.77 29.896 1751.23 30.136 1751.58 30.448C1751.93 30.748 1752.18 31.132 1752.33 31.6C1752.49 32.056 1752.57 32.608 1752.57 33.256C1752.57 33.772 1752.51 34.264 1752.41 34.732C1752.3 35.2 1752.1 35.62 1751.81 35.992C1751.52 36.364 1751.11 36.664 1750.57 36.892C1750.04 37.108 1749.35 37.216 1748.48 37.216C1747.98 37.216 1747.4 37.18 1746.74 37.108C1746.08 37.036 1745.4 36.928 1744.7 36.784L1744.9 35.344C1745.48 35.44 1746.04 35.518 1746.59 35.578C1747.16 35.626 1747.65 35.65 1748.07 35.65C1748.82 35.65 1749.39 35.56 1749.78 35.38C1750.16 35.188 1750.43 34.912 1750.57 34.552C1750.71 34.192 1750.79 33.754 1750.8 33.238C1750.82 32.698 1750.75 32.272 1750.61 31.96C1750.46 31.648 1750.23 31.414 1749.92 31.258C1749.61 31.102 1749.2 30.994 1748.68 30.934C1748.16 30.874 1747.53 30.82 1746.79 30.772L1745.84 30.682C1745.64 30.658 1745.48 30.58 1745.35 30.448C1745.23 30.316 1745.18 30.148 1745.19 29.944L1745.48 24.58H1752.21ZM1758.22 24.346C1759.15 24.346 1759.89 24.436 1760.45 24.616C1761.02 24.784 1761.43 25.078 1761.7 25.498C1761.96 25.918 1762.09 26.494 1762.09 27.226C1762.09 27.766 1762.04 28.258 1761.93 28.702C1761.82 29.134 1761.64 29.494 1761.37 29.782C1761.12 30.07 1760.75 30.262 1760.26 30.358V30.43C1761.08 30.562 1761.65 30.898 1761.95 31.438C1762.26 31.978 1762.42 32.68 1762.43 33.544C1762.45 34.384 1762.32 35.08 1762.06 35.632C1761.8 36.172 1761.38 36.574 1760.8 36.838C1760.22 37.102 1759.43 37.234 1758.42 37.234C1757.76 37.234 1757.09 37.198 1756.4 37.126C1755.73 37.066 1755.07 36.994 1754.42 36.91L1754.53 35.488C1754.95 35.524 1755.35 35.56 1755.72 35.596C1756.1 35.62 1756.48 35.638 1756.84 35.65C1757.21 35.662 1757.59 35.668 1757.97 35.668C1758.62 35.668 1759.13 35.596 1759.52 35.452C1759.91 35.308 1760.2 35.068 1760.38 34.732C1760.56 34.384 1760.65 33.922 1760.65 33.346C1760.65 32.902 1760.59 32.518 1760.47 32.194C1760.35 31.87 1760.12 31.618 1759.77 31.438C1759.43 31.246 1758.94 31.15 1758.29 31.15L1755.97 31.168V29.818H1758.29C1758.76 29.818 1759.13 29.758 1759.41 29.638C1759.7 29.506 1759.91 29.344 1760.04 29.152C1760.18 28.948 1760.27 28.72 1760.31 28.468C1760.36 28.204 1760.38 27.934 1760.38 27.658C1760.37 27.154 1760.29 26.776 1760.13 26.524C1759.99 26.272 1759.74 26.104 1759.39 26.02C1759.04 25.936 1758.56 25.894 1757.95 25.894C1757.35 25.894 1756.78 25.912 1756.22 25.948C1755.67 25.972 1755.19 25.996 1754.77 26.02L1754.64 24.67C1755.26 24.562 1755.87 24.484 1756.46 24.436C1757.05 24.376 1757.63 24.346 1758.22 24.346ZM1774.08 28C1775.18 28 1775.96 28.396 1776.42 29.188C1776.89 29.98 1777.13 31.138 1777.13 32.662C1777.13 33.802 1777.01 34.708 1776.77 35.38C1776.53 36.04 1776.16 36.514 1775.67 36.802C1775.18 37.078 1774.56 37.216 1773.81 37.216C1773.23 37.216 1772.65 37.138 1772.09 36.982C1771.52 36.814 1770.99 36.562 1770.48 36.226L1770.59 35.254C1771.12 35.41 1771.59 35.536 1772 35.632C1772.4 35.728 1772.84 35.776 1773.31 35.776C1773.8 35.776 1774.19 35.692 1774.48 35.524C1774.78 35.356 1775 35.044 1775.13 34.588C1775.26 34.132 1775.33 33.49 1775.33 32.662C1775.33 31.846 1775.27 31.21 1775.15 30.754C1775.03 30.286 1774.83 29.956 1774.57 29.764C1774.31 29.56 1773.95 29.458 1773.49 29.458C1773.03 29.458 1772.58 29.566 1772.14 29.782C1771.7 29.986 1771.19 30.31 1770.61 30.754L1770.41 29.674C1770.71 29.338 1771.06 29.044 1771.46 28.792C1771.86 28.54 1772.3 28.348 1772.75 28.216C1773.21 28.072 1773.65 28 1774.08 28ZM1770.34 28.216L1770.54 29.998L1770.66 30.232V35.884L1770.57 36.1C1770.61 36.436 1770.63 36.766 1770.65 37.09C1770.67 37.414 1770.68 37.756 1770.66 38.116V40.582H1768.94V28.216H1770.34ZM1787.37 28.216L1783.93 37.414C1783.82 37.726 1783.69 38.044 1783.52 38.368C1783.35 38.704 1783.15 39.022 1782.91 39.322C1782.68 39.622 1782.41 39.88 1782.1 40.096C1781.64 40.408 1781.13 40.594 1780.57 40.654C1780.01 40.714 1779.43 40.702 1778.8 40.618L1778.95 39.43C1779.35 39.442 1779.74 39.424 1780.12 39.376C1780.49 39.328 1780.82 39.214 1781.11 39.034C1781.36 38.854 1781.59 38.608 1781.79 38.296C1781.99 37.996 1782.17 37.666 1782.31 37.306L1782.76 36.244C1782.86 35.992 1782.95 35.716 1783.05 35.416C1783.15 35.104 1783.24 34.834 1783.32 34.606L1785.5 28.216H1787.37ZM1780.19 28.216L1782.4 34.606C1782.46 34.786 1782.52 34.972 1782.56 35.164C1782.61 35.344 1782.66 35.53 1782.71 35.722H1783.14L1782.55 37H1782.08C1781.92 37 1781.79 36.964 1781.68 36.892C1781.59 36.808 1781.51 36.694 1781.45 36.55L1778.33 28.216H1780.19ZM1796.32 23.734L1796.69 25.066C1796.33 25.294 1795.99 25.468 1795.67 25.588C1795.34 25.708 1795.03 25.798 1794.71 25.858C1794.41 25.906 1794.11 25.954 1793.8 26.002C1793.48 26.05 1793.16 26.122 1792.82 26.218C1792.25 26.374 1791.79 26.596 1791.46 26.884C1791.13 27.172 1790.89 27.496 1790.74 27.856C1790.59 28.216 1790.48 28.588 1790.41 28.972C1790.36 29.248 1790.32 29.5 1790.29 29.728C1790.26 29.944 1790.24 30.124 1790.23 30.268H1790.27C1790.38 30.052 1790.51 29.836 1790.66 29.62C1790.82 29.404 1791.02 29.212 1791.26 29.044C1791.51 28.876 1791.82 28.744 1792.19 28.648C1792.58 28.54 1793.05 28.486 1793.6 28.486C1794.47 28.486 1795.17 28.63 1795.69 28.918C1796.2 29.206 1796.57 29.662 1796.8 30.286C1797.03 30.898 1797.14 31.708 1797.14 32.716C1797.14 33.652 1797.03 34.456 1796.8 35.128C1796.57 35.8 1796.16 36.316 1795.56 36.676C1794.97 37.036 1794.14 37.216 1793.06 37.216C1792.28 37.216 1791.63 37.126 1791.11 36.946C1790.61 36.766 1790.21 36.514 1789.91 36.19C1789.62 35.854 1789.4 35.458 1789.26 35.002C1789.13 34.546 1789.04 34.036 1788.99 33.472C1788.95 32.908 1788.94 32.308 1788.94 31.672C1788.94 30.736 1788.97 29.896 1789.04 29.152C1789.13 28.408 1789.28 27.76 1789.49 27.208C1789.72 26.656 1790.06 26.188 1790.5 25.804C1790.95 25.42 1791.53 25.12 1792.25 24.904C1792.61 24.796 1792.95 24.712 1793.27 24.652C1793.61 24.592 1793.94 24.532 1794.26 24.472C1794.6 24.412 1794.94 24.328 1795.27 24.22C1795.61 24.112 1795.96 23.95 1796.32 23.734ZM1793.15 29.872C1792.46 29.872 1791.95 29.98 1791.6 30.196C1791.25 30.412 1791.02 30.73 1790.9 31.15C1790.79 31.558 1790.74 32.08 1790.74 32.716C1790.74 33.496 1790.81 34.114 1790.95 34.57C1791.1 35.026 1791.34 35.344 1791.67 35.524C1792.02 35.704 1792.48 35.794 1793.04 35.794C1793.6 35.794 1794.05 35.704 1794.37 35.524C1794.71 35.344 1794.95 35.032 1795.09 34.588C1795.24 34.132 1795.31 33.508 1795.31 32.716C1795.31 31.972 1795.24 31.396 1795.11 30.988C1794.99 30.568 1794.77 30.28 1794.46 30.124C1794.15 29.956 1793.71 29.872 1793.15 29.872ZM1800.46 34.768C1800.7 34.768 1800.87 34.816 1800.96 34.912C1801.06 34.996 1801.11 35.158 1801.11 35.398V36.352C1801.11 36.592 1801.06 36.76 1800.96 36.856C1800.87 36.952 1800.7 37 1800.46 37H1799.94C1799.7 37 1799.53 36.952 1799.43 36.856C1799.34 36.76 1799.29 36.592 1799.29 36.352V35.398C1799.29 35.158 1799.34 34.996 1799.43 34.912C1799.53 34.816 1799.7 34.768 1799.94 34.768H1800.46Z" fill="#868686"/>
                </svg>
              </Box>
              <Grid container flexDirection='column'>
                <Grid item xs='12'>
                  <Box sx={{
                    display:'flex',
                    justifyContent:'center',
                    zIndex:'1',
                    marginTop:'-700px'
                  }}><Typography style={{
                    fontFamily: 'Exo 2',
                    fontSize: '40px',
                    fontWeight: '500',
                    lineHeight: '43.6px',
                    textAlign: 'left',

                  }}>Получите в подарок 7 дней подписки на сервис </Typography></Box>
                </Grid>
                <Grid item xs='12'>
                  <Box
                    sx={{
                      marginTop:'-600px',
                      width: '487px',
                      height: '600px',
                      borderRadius: 3,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}>
                    <Box marginLeft={'auto'} marginRight={'auto'} width={487} paddingTop={1}>
                      <TextField
                        margin='normal'
                        name='name'
                        label='Имя'
                        type='name'
                        fullWidth
                        variant='outlined'
                      /> 
                      <TextField
                        margin='normal'
                        name='name'
                        label='Фамилия'
                        type='name'
                        fullWidth
                        variant='outlined'
                      /> 
                      <TextField
                        margin='normal'
                        name='name'
                        label='Email'
                        type='name'
                        fullWidth
                        variant='outlined'
                      /> 
                      <Grid container flexDirection='row' spacing={3}>
                        <Grid item xs='2'>
                          <TextField
                          margin='normal'
                          name='name'
                          label='+7'
                          type='name'
                          fullWidth
                          variant='outlined'
                        /> 
                        </Grid>
                        <Grid item xs='10'>
                          <TextField
                          margin='normal'
                          name='name'
                          label=''
                          type='name'
                          fullWidth
                          variant='outlined'
                        /> 
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Button style={{
                        width:'100%',
                        height:'72px',
                        marginTop:'25px',
                        backgroundColor:'#1400FF',
                        color:'#FFFFFF',
                        borderRadius:'5px',
                        fontFamily:'Exo 2',
                        fontSize: '20px',
                        fontWeight: '500',
                      }}>Получить бесплатно 7 дней</Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>



          <Grid item xs='12'>
            <Box sx = {{
              position:'relative',
              height:'100vh',
              width:'100%',
              marginTop:'50px'
            }}>
              <Box sx={{
                display:'flex',
                justifyContent:'center'
              }}>
                <Typography style={{
                  fontFamily: 'Exo 2',
                  fontSize: '50px',
                  fontWeight: '700',
                  lineHeight: '54.5px',
                }}>Тарифы</Typography>
              </Box>
              <Box sx={{
                display:'flex',
                justifyContent:'space-evenly',
                width:'100%',
                height:'100vh'
              }}>
                <Box sx={{
                  width:'735px',
                  height:'100%',
                  bgcolor:'#FFFFFF',
                  borderRadius:'30px',
                  marginTop:'30px'
                }}>
                  <Grid container flexDirection='column'>
                    <Grid item xs={12}>
                      <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        mt:'40px'
                      }}>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '40px',
                          fontWeight: '700',
                          lineHeight: '43.6px',
                          textAlign: 'left',                    
                        }}>Seller</Typography>
                      </Box>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'40px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px'                    
                        }}>Интеграция Wildberries и Ozon</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px'                    
                        }}>Оцифровка финансовых отчетов</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px'                    
                        }}>Складской учет</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px'                    
                        }}>Бухгалтерский учет</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px'                    
                        }}>Расчет Юнит-Экономики</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px'                    
                        }}>Комплекс CRM систем</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px'                    
                        }}>Отчет прибыли и убытков</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#1400FF"/>
                        </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px'                    
                        }}>Отчет по штрафам</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box sx={{
                    display:'flex',
                    justifyContent:'flex-end',
                    alignItems:'center',
                    paddingTop:'335px',
                    flexDirection:'column',
                    }}>
                      <Typography style={{
                        fontFamily:'Exo 2',
                        fontSize: '35px',
                        fontWeight: '700',
                        lineHeight: '38.15px',
                        textAlign: 'left',
                        color:'#6F6F6F',              
                      }}>2 999 руб/ месяц</Typography>
                      <Button style={{
                        width: '316px',
                        height: '72px',
                        gap: '0px',
                        borderRadius: '10px',
                        border: '3px',
                        opacity:'0px',
                        border:'3px solid #1400FF',
                        fontFamily:'Exo 2',
                        fontSize: '30px',
                        fontWeight: '500',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginTop:'10px'
                      }}>Выбрать</Button>

                  </Box>
                </Box>
                <Box sx={{
                  width:'735px',
                  height:'100%',
                  background: 'linear-gradient(192.44deg, #000000 3.79%, #2F2F2F 90.97%)',
                  borderRadius:'30px',
                  marginTop:'30px'
                }}>
                  <Grid container flexDirection='column'>
                    <Grid item xs={12}>
                      <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        mt:'40px'
                      }}>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '40px',
                          fontWeight: '700',
                          lineHeight: '43.6px',
                          textAlign: 'left',   
                          background: "-webkit-linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
                          webkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",                 
                        }}>Professional</Typography>
                      </Box>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'40px'}}>
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                        <defs>
                        <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                        <stop stop-color="#CBCBCB"/>
                        <stop offset="1" stop-color="#515151"/>
                        </radialGradient>
                        </defs>
                        </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px' ,
                          color:'#FFFFFF'
                        }}>Интеграция Wildberries, Ozon, Yandex</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF'                    
                        }}>Оцифровка финансовых отчетов</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Складской учет c возможностью подключения систем FBS</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Бухгалтерский учет</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Формирование отчетов для налоговой</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Расчет Юнит-Экономики</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Комплекс CRM систем</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Отчет прибыли и убытков</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Отчет по штрафам</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Автобиддер ответов на отзывы</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Автобиддер синхронизации цен на маркетплейсах</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display:'flex', alignItems:'center', ml:'20px', mt:'10px'}}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.5" cy="8.5" r="8.5" fill="url(#paint0_radial_72_85)"/>
                          <defs>
                          <radialGradient id="paint0_radial_72_85" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.5 8.5) rotate(90) scale(8.5)">
                          <stop stop-color="#CBCBCB"/>
                          <stop offset="1" stop-color="#515151"/>
                          </radialGradient>
                          </defs>
                          </svg>
                        <Typography style={{
                          fontFamily: 'Exo 2',
                          fontSize: '25px',
                          fontWeight: '200',
                          lineHeight: '32.7px',
                          textAlign: 'left',
                          marginLeft:'5px',
                          color:'#FFFFFF',
                          width:'450px',
                          flexWrap:'wrap'                    
                        }}>Скрипт “Симуляция покупательского поведения” для продвижения товара</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box sx={{
                    display:'flex',
                    justifyContent:'flex-end',
                    alignItems:'center',
                    flexDirection:'column',
                    paddingTop:'65px'
                    }}>
                      <Typography style={{
                        fontFamily:'Exo 2',
                        fontSize: '35px',
                        fontWeight: '700',
                        lineHeight: '38.15px',
                        textAlign: 'left',
                        color:'#FFFFFF',              
                      }}>6 999 руб/ месяц</Typography>
                      <Button style={{
                        width: '316px',
                        height: '72px',
                        gap: '0px',
                        borderRadius: '10px',
                        border: '3px',
                        opacity:'0px',
                        border:'3px solid #FFFFFF',
                        fontFamily:'Exo 2',
                        fontSize: '30px',
                        fontWeight: '500',
                        lineHeight: '32.7px',
                        textAlign: 'left',
                        marginTop:'10px',
                        color:'#FFFFFF'
                      }}>Выбрать</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs='12'>
            <Box sx={{
              position:'absolute',
              mt:'250px',
              bgcolor:'#000000',
              width:'100%',
              height:'50vh'
            }}>
              <Grid container flexDirection='row'>
                <Grid item xs='2'>
                  <Box
                        component="img"
                        sx={{
                          height: 151,
                          width: 151,
                          maxHeight: { xs: 233, md: 167 },
                          maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="Picture"
                        src="https://sun9-15.userapi.com/impg/PkVpbEbST2JEGNeWjdW0ubSlEmDNJ4OyvhDIYA/RgFUNoVNHrg.jpg?size=151x151&quality=96&sign=459a90b17a9a861a3ba1b392487ad705&c_uniq_tag=I_aphiF3coNunVvjXHNmZBhrOBvpE2ryG31Jw6hmu7U&type=album"
                      />
                </Grid>
                <Grid item xs='10'>
                  <Grid container flexDirection='column'>
                    <Grid item xs = '4'>
                      <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-evenly',
                        color:'#FFFFFF',
                        height:'50vh'
                      }}>
                        <Box>
                          <Link href="#" underline="none">
                            <Typography style={{
                              color:'#FFFFFF',
                              fontFamily:' Exo 2',
                              fontSize: '30px',
                              fontWeight: '200',
                              lineHeight: '32.7px',
                              textAlign: 'left',
                            }}>Главная страница</Typography>
                          </Link>
                        </Box>                  
                        <Box>
                          <Link href="#" underline="none">
                            <Typography style={{
                              color:'#FFFFFF',
                              fontFamily:' Exo 2',
                              fontSize: '30px',
                              fontWeight: '200',
                              lineHeight: '32.7px',
                              textAlign: 'left',
                            }}>Возможности</Typography>
                          </Link>
                        </Box>                  
                        <Box>
                          <Link href="#" underline="none">
                            <Typography style={{
                              color:'#FFFFFF',
                              fontFamily:' Exo 2',
                              fontSize: '30px',
                              fontWeight: '200',
                              lineHeight: '32.7px',
                              textAlign: 'left',
                            }}>Демодоступ</Typography>
                          </Link>
                        </Box>
                        <Box>
                          <Link href="#" underline="none">
                            <Typography style={{
                              color:'#FFFFFF',
                              fontFamily:' Exo 2',
                              fontSize: '30px',
                              fontWeight: '200',
                              lineHeight: '32.7px',
                              textAlign: 'left',
                            }}>Контакты</Typography>
                          </Link>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs='4'>
                      <Box sx={{
                        display:'flex',
                        height:'50vh',
                        alignItems:'flex-end',
                        color:'#FFFFFF',
                      }}>
                        <Typography>Все права защищены. 2024</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs='4'>
                      <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'flex-start',
                        justifyContent:'center',
                        height:'50vh',

                      }}>
                        <Link href="#">
                          <Typography style={{
                            color:'#FFFFFF',
                            fontFamily:' Exo 2',
                            fontSize: '50px',
                            fontWeight: '500',
                            lineHeight: '32.7px',
                            textAlign: 'left',
                            underlineColor:'#FFFFFF'
                          }}>sales@sellfin.ru</Typography>
                        </Link>
                          <Box sx={{
                            marginTop:'10px'
                          }}>
                            <Typography style={{
                              color:'#FFFFFF',
                              fontFamily:' Exo 2',
                              fontSize: '30px',
                              fontWeight: '200',
                              lineHeight: '32.7px',
                              textAlign: 'left',
                            }}>ООО”Делаймани”</Typography>
                          </Box>
                      </Box>  
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              </Box>
            </Grid>
        </Grid>
      </main>
    </ThemeProvider>
    </>
  );
}


export default App;
