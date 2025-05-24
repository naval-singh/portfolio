import { useMemo, useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import IconButton from "../components/IconButton";
import { HiMenu } from "react-icons/hi";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [classes, setClasses] = useState<string>("");
  const [showSubItems, setShowSubItems] = useState<boolean>(false);
  let baseClasses =
    "z-50 fixed top-0 right-0 h-lvh bg-baseGray transition-all duration-300 ease-in-out overflow-hidden";

  useMemo(() => {
    if (showSidebar) {
      setClasses("w-64");
    } else {
      setClasses("w-0");
    }
  }, [showSidebar]);

  const sidebarItems = [
    { id: 1, title: "home" },
    { id: 2, title: "about" },
    { id: 3, title: "services" },
    { id: 4, title: "resume" },
    { id: 5, title: "contact" },
    {
      id: 6,
      title: "follow",
      subTitle: [
        { id: 1, title: "linkedin" },
        { id: 2, title: "github" },
        { id: 3, title: "facebook" },
        { id: 4, title: "instagram" },
        { id: 5, title: "twitter" },
      ],
    },
  ];

  const handleClickItem = (item: any) => {
    if (item?.subTitle) {
      setShowSubItems((prev) => !prev);
    } else {
      setShowSubItems(false);
    }
  };

  return (
    <>
      {/* right menu icon */}
      <div className="fixed top-6 right-6 z-40">
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
        <ul className="mx-10 mt-20">
          {sidebarItems.map((item) => (
            <div key={item.id}>
              <li
                onClick={() => handleClickItem(item)}
                className="text-white text-sm uppercase tracking-wider mb-5 flex items-center justify-between cursor-pointer hover:text-mainGray transition-all duration-150 ease-in-out"
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
              {item?.subTitle && (
                <ul
                  className={`transition-all duration-150 ease-in-out overflow-hidden ${
                    showSubItems ? "h-48" : "h-0"
                  }`}
                >
                  {item?.subTitle?.map((subItem) => (
                    <li
                      key={subItem.id}
                      className="text-white text-sm uppercase tracking-wider mb-5 ml-5 cursor-pointer hover:text-mainGray"
                    >
                      {subItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
