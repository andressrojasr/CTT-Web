import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const stats = [
  { id: 1, name: 'Estudiantes', value: '2,000' },
  { id: 2, name: 'Cursos activos', value: '40' },
  { id: 3, name: 'Cursos concluidos', value: '80' },
]

export default function Stats() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
    AOS.refresh();
  }, []);
  return (
     <div className="bg-[#F5F5F5] py-12 sm:py-14 mt-16" data-aos="fade-down">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-[#6C1313]">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-[#6C1313] sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
