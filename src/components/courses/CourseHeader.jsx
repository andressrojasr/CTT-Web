import { ClockIcon, UserGroupIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function CourseHeader({ course }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="relative">
                <img
                    src={course.course_image}
                    alt={course.title}
                    className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-[#6C1313] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {course.category}
                    </span>
                </div>
                <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        course.status === 'Activo'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                    }`}>
                        {course.status}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {course.title}
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {course.description}
                </p>

                {/* Course Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <ClockIcon className="h-8 w-8 text-[#6C1313] mx-auto mb-2" />
                        <div className="text-sm font-medium text-gray-900">
                            Duración
                        </div>
                        <div className="text-lg font-bold text-[#6C1313]">
                            {course.requirements?.hours?.total || 0} horas
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <UserGroupIcon className="h-8 w-8 text-[#6C1313] mx-auto mb-2" />
                        <div className="text-sm font-medium text-gray-900">
                            Nivel
                        </div>
                        <div className="text-lg font-bold text-[#6C1313]">
                            Todos los niveles
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <MapPinIcon className="h-8 w-8 text-[#6C1313] mx-auto mb-2" />
                        <div className="text-sm font-medium text-gray-900">
                            Modalidad
                        </div>
                        <div className="text-lg font-bold text-[#6C1313]">
                            {course.requirements?.modality || 'Presencial'}
                        </div>
                    </div>
                </div>

                {/* Price and Enroll Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <div className="text-3xl font-bold text-[#6C1313]">
                            ${course.requirements?.prices?.[0]?.amount || 0}
                        </div>
                        <div className="text-sm text-gray-500">
                            {course.requirements?.prices?.[0]?.category || 'Precio base'}
                        </div>
                    </div>
                    <button className="bg-[#6C1313] hover:bg-[#5a0f0f] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                        Inscríbete Ahora
                    </button>
                </div>
            </div>
        </div>
    );
}
