import { CpuChipIcon, BuildingLibraryIcon, CommandLineIcon, ComputerDesktopIcon  } from "@heroicons/react/24/outline"
import CardCourse from "./CardCourse"
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

const categories = [
    { id: 1, text: 'TICS', icon: ComputerDesktopIcon,   status: 'true' },
    { id: 2, text: 'Educativo', icon: BuildingLibraryIcon, status: 'false' },
    { id: 3, text: 'Software', icon: CommandLineIcon, status: 'false' },
    { id: 4, text: 'Electrónica', icon: CpuChipIcon, status: 'false' },
]

const courses = [
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: true, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y dasdasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddd", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
    {title: "ARDUINO DESDE CERO: ELECTRÓNICA, PROGRAMACIÓN Y AUTOMATIZACIÓN", image: "https://d3puay5pkxu9s4.cloudfront.net/curso/4317/800_imagen.jpg", isOpen: false, hours: "32"},
]

export default function CoursesList({filters}) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true });
        AOS.refresh();
      }, []);
  return (
      <div className="overflow-hidden bg-white mx-auto max-w-7xl md:px-6 lg:px-8 pt-8" data-aos="dafe-down">
                <h2 className="text-2xl font-semibold text-[#6C1313] ml-6">Cursos</h2>
                    <div className=" mt-10 lg:m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch h-auto">
                        {courses.map((course, index) => (
                            <div data-aos="zoom-in" key={index} className="inline-block w-full px-6">
                                <CardCourse
                                title={course.title}
                                image={course.image}
                                isOpen={course.isOpen}
                                hours={course.hours}
                                />
                            </div>          
                        ))}
                </div>
      </div>
  )
}
