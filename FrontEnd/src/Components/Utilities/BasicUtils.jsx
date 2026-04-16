import React,{useState,useRef,useEffect} from "react";
import { Link,NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Gloaf_icon from '../../assets/Gloaf_icon.png'


export const GlowButton = ({ link, write, img, height, width ,clickHandler}) => {
  return (
    <div>
      <div
        className="p-0 m-0 bg-[#F1B93D] rounded-full hover:text-white transition ease-in-out duration-300 hover:border-[#f2b93d] hover:shadow-[0_0_20px_3px_rgba(245,210,166)]" style={{height:height,width:width}}
      >
        {link ? ( <Link to={link} className="h-full w-full flex items-center justify-center gap-2">{img} <span>{write}</span></Link>) : (
          <button className="h-full w-full flex items-center justify-center gap-2" onClick={clickHandler}>
            <span>{write}</span>
            {img}
          </button>
        )}
      </div>
    </div>
  );
};

export const NormalButton = ({ link, write, img, height, width,padding,clickHandler }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`bg-[#F1B93D] rounded-md text-[#4D2308]  hover:text-white transition ease-in-out duration-300 h-[${height}] w-[${width}] p-[${padding}] `} >
        {link ? ( <Link to={link} className="h-full w-full flex items-center justify-center gap-2">{img} <span>{write}</span></Link>) :(<button className="h-full w-full font-medium flex items-center justify-center gap-2 cursor-pointer" onClick={clickHandler}>
          <span>{write}</span>
          {img}
        </button>)}
      </div>
    </div>
  );
};
export const SidebarButton = ({ link, write, img, height, width,clickHandler })=>{
    return <div className="hover:bg-[#5f3921] text-[#b19f94] hover:text-[#f2b93d] rounded-lg transition ease-in-out duration-300" style={{height:height,width:width}}>
             {link ? ( <NavLink to={link} className={({isActive})=>isActive?`h-full w-full flex items-center justify-start gap-2 pl-2 text-[#f2b93d] bg-[#5f3921] rounded-lg`:`h-full w-full flex items-center justify-start gap-2 pl-2`}>{img} <span>{write}</span></NavLink>) :(<button className="h-full w-full font-medium flex items-center justify-start gap-2 cursor-pointer pl-2" onClick={clickHandler}>
          {img}
          <span>{write}</span>
        </button>)}
    </div>
}


export const Logo=()=>{
    return <div className='h-full w-[30%] flex items-center  '>
        <Link to='/' className='flex items-center gap-3 h-12 hover:text-[#F1B93D] transition ease-in-out duration-300'>
          <img src={Gloaf_icon} alt='Gloaf icon' className='h-14 w-14 object-contain'/>
          <h3 className='text-3xl font-medium'>Gloaf</h3>
        </Link>
    </div>
}

export const Line=({color})=>{
    return <div className="flex items-center my-6">
        <div className="grow h-px w-full"  style={{backgroundColor:color}}/>
        </div>
}

export const IconHolder=({img,bg,border,ic,size="48px"})=>{
  return <div className='rounded-full border flex justify-center items-center object-cover' style={{backgroundColor:bg,borderColor:border,color:ic,height:size,width:size}}>
            {img}
          </div>
}

export const SearchBar=({
  value="",
  onChange,
  onSubmit,
  placeholder="Search for food, coffee or restaurant...",
  buttonLabel="Search",
  className="",
  inputClassName="",
  buttonClassName="",
  withLocation=false,
  locationLabel="",
})=>{
  return (
    <form
      className={`w-full rounded-[28px] border border-[#f3e1c7] bg-white/95 p-2 shadow-[0_16px_45px_rgba(134,84,27,0.12)] backdrop-blur-sm ${className}`}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(event);
      }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        {withLocation && locationLabel ? (
          <div className="flex items-center gap-2 rounded-full border border-[#ead8bd] bg-[#fffaf2] px-4 py-3 text-sm font-medium text-[#8c5b31]">
            <FiMapPin className="text-[#b36728]" />
            <span>{locationLabel}</span>
          </div>
        ) : null}
        <div className="flex min-h-16 flex-1 items-center gap-3 rounded-[22px] bg-[#fffdf9] px-5">
          <FaSearch className="shrink-0 text-[#c06f27]" />
          <input
            type="text"
            id="Search"
            name="Search"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`h-full min-h-12 w-full bg-transparent text-lg text-[#4D2308] placeholder:text-[#c4a88c] focus:outline-none ${inputClassName}`}
          />
        </div>
        <button
          type="submit"
          className={`min-h-14 rounded-[18px] bg-[#f1b93d] px-7 text-base font-semibold text-[#4D2308] transition duration-300 hover:bg-[#e3a81c] hover:text-white ${buttonClassName}`}
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}

export const ToggleDropdown = ({ children, position = "bottom" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🎯 Position classes
  const positionClasses = {
    bottom: "top-full mt-2 right-2.5",
    top: "bottom-full mb-2 left-0",
    left: "right-full mr-2 top-0",
    right: "left-full ml-2 top-0",
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger */}
      <div onClick={() => setIsOpen((prev) => !prev)}>
        {children}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={`absolute w-48 bg-[#fdf6ea] rounded-xl shadow-lg z-50 ${positionClasses[position]}`}
        >
          <ul className="py-2 text-gray-700">
            <Link to="settings" ><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile Settings
            </li>
            </Link>
            
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
