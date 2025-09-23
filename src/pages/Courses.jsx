import { useState } from "react";
import Carrusel from "../components/carrussel"
import FilterSidebar from "../components/FilterSideBar";
import CoursesList from "../components/CoursesList";
const contentHero =[
  {
    id: 1,
    image:
      "https://ctt-talleresfisei.uta.edu.ec/img/carrusel/carrusel_2.jpeg", 
    title: "Cursos",
    subtitle: "Cursos virtuales y presenciales",
  },

];

export default function Courses() {
  const [filters, setFilters] = useState({
    search: "",
    categories: [],
    status: "",
    minHours: "",
    maxHours: "",
  });
  return (
    <>
        <Carrusel slides={contentHero} height="400px" background={'white'} colorText={'#6C1313'} />
        <div className="lg:flex">
          <FilterSidebar filters={filters} setFilters={setFilters} />
          <div className="lg:flex-1">
            <CoursesList filters={filters} />
          </div>
        </div>
    </>
  )
}
