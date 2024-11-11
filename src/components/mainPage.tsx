"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sidebar } from "./sidebar"
import { Detail } from "./detail";
import Mobilecard from "./mobileview/card";
import MobileSkills from "./mobileview/skills";
import MobileEducation from "./mobileview/education";
import MobileProjects from "./mobileview/projects";
import MobileContact from "./mobileview/contact";

const MainPage = () => {
    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);

    return (
        <div>
            {/* mobile view */}
            <div className="overflow-x-hidden bg-white h-screen md:hidden">
                <Mobilecard />
                <MobileEducation />
                <MobileSkills />
                <MobileProjects />
                <MobileContact/>
            </div>
            
            
            {/* desktop view */}
            <div className=" hidden md:flex md:overflow-hidden md:h-screen">
                {/* side bar */}
                <div className="w-1/5 ">
                    <Sidebar />
                </div>
                {/* main */}
                <div className="w-full">
                    <Detail />
                </div>
            </div>
        </div>
    )
}

export default MainPage