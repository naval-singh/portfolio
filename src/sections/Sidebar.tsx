import { Link } from "react-scroll";
import { sidebarItems } from "../data";
import { useMemo, useState } from "react";
import IconButton from "../components/IconButton";
import { HiMenu, HiChevronUp } from "react-icons/hi";
import { MdOutlineChevronRight } from "react-icons/md";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [classes, setClasses] = useState<string>("");
  const [showSubItems, setShowSubItems] = useState<boolean>(false);
  let baseClasses =
    "z-50 fixed top-0 right-0 h-lvh bg-baseGray transition-all duration-300 ease-in-out overflow-hidden";

  useMemo(() => {
    if (showSidebar) {
      setClasses("sm:w-64 w-52");
    } else {
      setClasses("w-0");
      setShowSubItems(false)
    }
  }, [showSidebar]);

  const handleClickItem = (item: any) => {
    if (item?.subTitle) {
      setShowSubItems((prev) => !prev);
    } else {
      setShowSubItems(false);
    }
  };

  const hadnelScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* right menu icon */}
      <div className="fixed sm:top-6 top-4 sm:right-6 right-4 z-40">
        <IconButton
          icon={<HiMenu size={40} />}
          onClick={() => setShowSidebar((prev) => !prev)}
        />
      </div>

      {/* backdrop */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`${
          showSidebar ? "block" : "hidden"
        } z-40 fixed top-0 left-0 w-lvw h-lvh bg-black opacity-40`}
      />

      {/* sidebar */}
      <div className={`${baseClasses} ${classes}`}>
        <ul className="sm:mx-10 mx-7 mt-20">
          {sidebarItems.map((item) => (
            <div key={item.id}>
              <Link to={item.link} smooth={true} duration={500}>
                <li
                  onClick={() => handleClickItem(item)}
                  className="text-white sm:text-sm text-xs uppercase tracking-wider mb-5 flex items-center justify-between cursor-pointer hover:text-mainGray transition-all duration-150 ease-in-out"
                >
                  <span>{item.title}</span>
                  {item?.subTitle && (
                    <MdOutlineChevronRight
                      size={26}
                      className={`transition-all duration-300 ${
                        showSubItems ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  )}
                </li>
              </Link>
              {item?.subTitle && (
                <div
                  className={`flex flex-col transition-all duration-150 ease-in-out overflow-hidden ${
                    showSubItems ? "h-48" : "h-0"
                  }`}
                >
                  {item?.subTitle?.map((subItem) => (
                    <a
                      href={subItem.to}
                      target="_blank"
                      key={subItem.id}
                      className="text-white sm:text-sm text-xs uppercase tracking-wider mb-5 ml-5 cursor-pointer hover:text-mainGray"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>

      {/* scroll to top button */}
      <button
        onClick={hadnelScrollToTop}
        className="fixed sm:bottom-6 bottom-4 sm:right-6 right-4 z-40 bg-baseGray w-14 h-14 rounded-full flex justify-center items-center text-mainGray hover:text-white transition-colors duration-150"
      >
        <HiChevronUp size={40} />
      </button>
    </>
  );
};

export default Sidebar;
