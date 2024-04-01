import { useState } from 'react';
import Logo from '../../assets/image/logo.png'
import { dashboardBtn } from '../../data/data';
import Buttons from '../../components/buttons';
import { Icon } from '@iconify-icon/react';
import TeddyedLogo from '../../assets/image/teddyed_logo.png'


const Dashboard = () => {
  const [selectBtn, setSelectBtn] = useState(null)

  const dashboardClick = (index) => {
    setSelectBtn(selectBtn === index ? null : index);
  };

  return (
    <div className=" bg-secondary w-60">
      <div className="logo_app flex justify-center items-center p-11">
        <img src={Logo} alt="" />
      </div>

      <div className="side_buttons flex flex-col gap-4 p-5">
        {dashboardBtn.map((board, index) => (
          <div onClick={() => dashboardClick(index)} key={board.id}
            className={` ${selectBtn === index ? 'dash_btn' : ''} 
           flex gap-4 pl-4 items-center hover:bg-primary  w-48 h-11 rounded-lg`}>
            <div>{board.ButtonIcon}</div>
            <h2 className=' text-primary text-lg font-semibold hover:text-secondary cursor-pointer'>{board.name}</h2>
          </div>
        ))}
      </div>
      <div className="message pl-3 mt-[200px] flex gap-3 flex-col">
        <div className='flex relative items-center gap-[30px]'>
          <Buttons label='Messages' className='bg-[#fff] text-secondary font-[Inter] font-[600] rounded-md w-52 h-11  text-left pl-3' />
          <button className='notification absolute'>Notifications</button>
        </div>
        <Buttons icon={<Icon icon="iconoir:log-in" className=' text-xl' />} label='Log Out' className='bg-[#FF4159] text-lg text-primary font-[Inter] font-[600] rounded-md w-52 h-11 text-left text-[14px] pl-3 items-center flex gap-4' />
        <div className="teddyed_logo flex justify-center items-center mt-[100px]">
          <img src={TeddyedLogo} alt="" className='' />
        </div>
      </div>
    </div>
  )
}

export default Dashboard