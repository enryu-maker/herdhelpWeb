import React from 'react'
import bg from "../../../assets/assets/Background.jpg"
import { TextField } from '@mui/material';

const Footer = () => {
  return (
    <>
    <div className='relative flex w-full '>
        <img src={bg} alt="" className='absolute z-0 inset-0 w-full h-full object-cover' />
        <div className="flex flex-col w-full z-10 justify-center items-center py-16">
        <div className="text-lg font-bold text-[#39B54A] pb-5 ">CONTACT US</div>
            <div className="text-4xl max-md:text-2xl font-semibold text-center text-white pb-10">Reach out for help or just <br /> say hello </div>
            <div className="flex justify-start items-start w-[70%] max-md:w-[90%]  py-10 
             max-md:flex-col-reverse 
            ">
                <div className="flex flex-col bg-black bg-opacity-50 w-[60%] max-md:w-full  py-16 px-10">
                    <h5 className='text-white text-lg font-bold pb-10'>SEND US A MESSAGE</h5>
                    <form action="" className='flex flex-col gap-10 text-white'> 
                    <TextField  sx={{
                      // borderBottom: '1px solid #eeeeee70',
                      '.css-pjaces-MuiInputBase-root-MuiInput-root:before':{  borderBottom: '2px solid #eeeeee70'    },
                    '.css-pjaces-MuiInputBase-root-MuiInput-root:after':{  borderBottom: '2px solid #39B54A'    }
                  }} 
                  InputLabelProps={{ style: { color: '#eeeeee70' },  }}  color='success' label="Your Name" variant="standard"  />
                    <TextField sx={{
                      // borderBottom: '1px solid #eeeeee70',
                      '.css-pjaces-MuiInputBase-root-MuiInput-root:before':{  borderBottom: '2px solid #eeeeee70'    },
                      '.css-pjaces-MuiInputBase-root-MuiInput-root:after':{  borderBottom: '2px solid #39B54A'    }
                    }}   InputLabelProps={{ style: { color: '#eeeeee70' },  }} color='success' label="Your Email" variant="standard" />
                    <TextField sx={{
                      // borderBottom: '1px solid #eeeeee70',
                      '.css-pjaces-MuiInputBase-root-MuiInput-root:before':{  borderBottom: '2px solid #eeeeee70'    },
                      '.css-pjaces-MuiInputBase-root-MuiInput-root:after':{  borderBottom: '2px solid #39B54A'    }
                    }}   InputLabelProps={{ style: { color: '#eeeeee70' },  }} color='success' label="Subject" variant="standard" />
                    <TextField  sx={{
                      // borderBottom: '1px solid #eeeeee70',
                      '.css-pjaces-MuiInputBase-root-MuiInput-root:before':{  borderBottom: '2px solid #eeeeee70'    },
                      '.css-pjaces-MuiInputBase-root-MuiInput-root:after':{  borderBottom: '2px solid #39B54A'    }
                    }}  InputLabelProps={{ style: { color: '#eeeeee70' },  }} color='success' label="Your Message" variant="standard" multiline rows={5} />

                    </form>
                </div>

                <div className="bg-[#222222] w-[40%] max-md:w-full pt-16 pb-[52px] px-10">
                <h5 className='text-white text-lg font-bold '>CONTACT INFO</h5>

                  <div className="flex flex-col py-5 gap-5">                    
                <h5 className='text-[#39B54A] text-lg font-bold '>Where to Find Us</h5>
                <p className='text-[#eeeeee70] text-base font-medium'>1600 Amphitheatre <br /> ParkwayMountain <br /> View, CA94043 US</p>
                  </div>

                <div className="flex flex-col py-5 gap-5">                    
                <h5 className='text-[#39B54A] text-lg font-bold '>Email Us At</h5>
                <p className='text-[#eeeeee70] text-base font-medium'>contact@herdhelp.com <br /> info@herdhelp.com</p>
                    </div>

                  <div className="flex flex-col py-5 gap-5">
                <h5 className='text-[#39B54A] text-lg font-bold '>Call Us At</h5>
                <p className='text-[#eeeeee70] text-base font-medium'>Phone: (+63) 555 1212 <br /> Mobile: (+63) 555 0100 <br /> Fax: (+63) 555 0101</p>
                  </div>

                </div>
            </div>
        </div>
    </div>
                    </>
  )
}

export default Footer;