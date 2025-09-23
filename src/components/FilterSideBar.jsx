// components/FilterSidebar.jsx
import { useEffect, useState } from "react";
import {
  CpuChipIcon,
  BuildingLibraryIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  FunnelIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const categories = [
  { id: 1, text: "TICS", icon: ComputerDesktopIcon },
  { id: 2, text: "Educativo", icon: BuildingLibraryIcon },
  { id: 3, text: "Software", icon: CommandLineIcon },
  { id: 4, text: "Electrónica", icon: CpuChipIcon },
];

export default function FilterSidebar({ filters, setFilters }) {
  const [open, setOpen] = useState(false);

  // Previene scroll de fondo cuando el drawer está abierto
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const resetFilters = () =>
    setFilters({
      search: "",
      categories: [],
      status: "",
      modality: "",
      minHours: "",
      maxHours: "",
    });

  const FiltersContent = (
    <div className="min-h-0"> {/* min-h-0 evita que el contenido estire contenedores padres */}
      <h2 className="text-xl font-semibold text-[#6C1313] mb-6">Filtros</h2>

      {/* Buscar */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Buscar por nombre
        </label>
        <input
          type="text"
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          placeholder="Ej: Arduino"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C1313]"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Categorías</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.text)}
                onChange={(e) => {
                  if (e.target.checked) {
                    handleChange("categories", [...filters.categories, cat.text]);
                  } else {
                    handleChange(
                      "categories",
                      filters.categories.filter((c) => c !== cat.text)
                    );
                  }
                }}
                className="rounded text-[#6C1313] focus:ring-[#6C1313]"
              />
              <span className="flex items-center gap-1 text-sm">
                <cat.icon className="h-4 w-4 text-gray-500" />
                {cat.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Estado */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Estado</h3>
        <select
          value={filters.status}
          onChange={(e) => handleChange("status", e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C1313]"
        >
          <option value="">Todos</option>
          <option value="open">Abierto</option>
          <option value="closed">Cerrado</option>
        </select>
      </div>

      {/* Modalidad */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Modalidad</h3>
        <select
          value={filters.modality}
          onChange={(e) => handleChange("modality", e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C1313]"
        >
          <option value="">Todos</option>
          <option value="presencial">Presencial</option>
          <option value="virtual">Virtual</option>
        </select>
      </div>

      {/* Duración */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Duración (horas)
        </h3>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="Mín"
            value={filters.minHours}
            onChange={(e) => handleChange("minHours", e.target.value)}
            className="w-24 rounded-lg border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C1313]"
          />
          <span className="text-sm">-</span>
          <input
            type="number"
            placeholder="Máx"
            value={filters.maxHours}
            onChange={(e) => handleChange("maxHours", e.target.value)}
            className="w-24 rounded-lg border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C1313]"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        <button
          onClick={resetFilters}
          className="flex-1 bg-[#6C1313] text-white py-2 rounded-lg text-sm"
        >
          Limpiar
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-6 right-4 z-40 flex items-center gap-2 bg-white shadow-lg px-4 py-3 rounded-full border"
        aria-label="Abrir filtros"
        type="button"
      >
        <FunnelIcon className="h-5 w-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Filtros</span>
      </button>

      {/* Sidebar para desktop */}
      <aside className="hidden lg:block w-72 bg-white border-r border-gray-200 p-6 sticky top-50 h-[calc(100vh-1.5rem)] overflow-y-auto">
        {FiltersContent}
      </aside>

      {/* Drawer móvil */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-opacity-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          {/* panel */}
          <div className="relative w-80 max-w-full h-full bg-white p-6 shadow-xl overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600"
              aria-label="Cerrar filtros"
              type="button"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {FiltersContent}
          </div>
        </div>
      )}
    </>
  );
}
