import {PiStrategyBold} from "react-icons/pi";
import {HiOutlineMenu} from "react-icons/hi";


const TopNavigation = () => {
    return (<div className="flex justify-between border-2 border-orange-500 p-4">
        
        <HiOutlineMenu size={30}/>
        <div className="flex gap-7">
        <PiStrategyBold size={30}/>
        <span className="text-xl">ESG Node</span>
        </div>
        <div>About </div>
        <div>ESG Strategy</div>
        <div>ESG Data Model</div>
        <div>ESG Standards Update</div>
        <div>Contact Us</div>
        
        </div>)
};
export default TopNavigation;