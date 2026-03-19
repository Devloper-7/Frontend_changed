"use client";

import { useState, useEffect } from "react";

export type FilterCheckboxOption = { id: string; label: string; count?: number };

export type ProductFiltersModalProps = {
  open: boolean;
  onClose: () => void;
  onApply?: (filters: Record<string, unknown>) => void;
  onReset?: () => void;
  wasteCategoryOptions?: FilterCheckboxOption[];
  certificationOptions?: FilterCheckboxOption[];
  availabilityOptions?: FilterCheckboxOption[];
  lerCodeOptions?: FilterCheckboxOption[];
};

const DEFAULT_WASTE_CATEGORY_OPTIONS: FilterCheckboxOption[] = [
  { id: "livestock", label: "Livestock Waste", count: 15 },
  { id: "agricultural", label: "Agricultural Waste", count: 35 },
  { id: "forestry", label: "Forestry Waste", count: 48 },
  { id: "ofmsw", label: "OFMSW", count: 51 },
  { id: "sewage", label: "Sewage Sludge", count: 32 },
  { id: "digestate", label: "Digestate", count: 44 },
  { id: "abp3", label: "ABP Category 3", count: 16 },
];

const DEFAULT_CERTIFICATION_OPTIONS: FilterCheckboxOption[] = [
  { id: "iso", label: "ISO 14001" },
  { id: "organic", label: "Organic Certified" },
  { id: "quality", label: "Quality Assured" },
];

const DEFAULT_AVAILABILITY_OPTIONS: FilterCheckboxOption[] = [
  { id: "inStock", label: "In Stock" },
  { id: "recurring", label: "Recurring Supply" },
  { id: "onRequest", label: "On Request" },
];

const DEFAULT_LER_CODE_OPTIONS: FilterCheckboxOption[] = [
  { id: "code1", label: "02 01 06" },
  { id: "code2", label: "02 01 06" },
  { id: "code3", label: "02 01 06" },
];

function IconChevronUp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
      <path d="M1 7.41406L7 1.41406L13 7.41406" stroke="#053F31" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
      <path d="M1 1L7 7L13 1" stroke="#053F31" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#053F31" />
      <path d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" stroke="#DAE6DC" strokeWidth="2" />
    </svg>
  );
}

function IconClearArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#DAE6DC" />
      <path d="M10 18H25.5M25.5 18L19.5 12M25.5 18L19.5 24.5" stroke="#053F31" strokeWidth="2" />
    </svg>
  )
}

function Checkbox({
  checked,
  onChange,
  id,
  label,
  count,
  className,
}: { checked: boolean; onChange: (v: boolean) => void; id: string; label: string; count?: number; className?: string }) {
  return (
    // <label
    //   htmlFor={id}
    //   className={`flex cursor-pointer items-center gap-2 py-1.5 font-outfit text-[14px] ${checked ? "text-[#333333]" : "text-[#757575]"} ${className ?? ""}`}
    // >
    //   <input
    //     type="checkbox"
    //     id={id}
    //     checked={checked}
    //     onChange={(e) => onChange(e.target.checked)}
    //     className="h-4 w-4 flex-shrink-0 rounded border border-[#CCCCCC] bg-[#E8E8E8] accent-[#053F31] focus:ring-[#053F31]"
    //   />
    //   <span>{label}</span>
    //   {count !== undefined && <span className="text-[#999999]">({count})</span>}
    // </label>
    <div
      className={`flex items-center justify-between ${className}`}
    >
      {/* LEFT: checkbox + label */}
      <label
        htmlFor={id}
        className="flex items-center gap-[10px] cursor-pointer font-outfit text-[20px] leading-[150%] font-light text-[#757575]"
      >
        <span className="relative inline-flex h-[20px] w-[20px] shrink-0">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="absolute inset-0 z-10 cursor-pointer opacity-0"
            aria-label={label || "Checkbox"}
          />
          <span
            className="
              pointer-events-none flex h-[20px] w-[20px] items-center justify-center
              rounded-[4px]
              border border-[#DAE6DC]
              bg-[#DAE6DC]
              peer-checked:bg-[#DAE6DC]
            "
          >
            {/* Check icon */}
            {checked && (
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
              <mask id="path-1-inside-1_1094_57353" fill="white">
              <path d="M1.55916 6.39374C1.26393 6.39453 0.974969 6.47534 0.725703 6.62681C0.476436 6.77828 0.277055 6.99422 0.150625 7.24966C0.0241944 7.50509 -0.0241172 7.78958 0.0112789 8.07021C0.046675 8.35083 0.164332 8.61613 0.350639 8.83541L4.32226 13.4935C4.46386 13.6619 4.64538 13.7955 4.85173 13.8832C5.05808 13.9709 5.28331 14.0101 5.50871 13.9978C5.99078 13.973 6.426 13.7261 6.70348 13.3201L14.9535 0.598961C14.9549 0.596851 14.9563 0.594741 14.9578 0.592662C15.0352 0.478865 15.0101 0.253351 14.8503 0.11168C14.8064 0.072775 14.7546 0.0428855 14.6982 0.0238517C14.6418 0.00481798 14.5819 -0.00295704 14.5223 0.0010057C14.4626 0.00496843 14.4044 0.020585 14.3513 0.0468935C14.2981 0.073202 14.2512 0.109645 14.2133 0.153979C14.2104 0.157465 14.2073 0.160898 14.2042 0.164279L5.88389 9.16483C5.85224 9.19908 5.81378 9.22697 5.77077 9.24687C5.72776 9.26677 5.68105 9.27829 5.63335 9.28076C5.58565 9.28323 5.53791 9.2766 5.49291 9.26126C5.4479 9.24592 5.40653 9.22216 5.3712 9.19138L2.60985 6.78549C2.32306 6.53379 1.94822 6.39402 1.55916 6.39374Z"/>
              </mask>
              <path d="M1.55916 6.39374L1.56281 1.39374L1.55428 1.39374L1.54574 1.39376L1.55916 6.39374ZM0.350639 8.83541L-3.45973 12.0729L-3.45414 12.0794L0.350639 8.83541ZM4.32226 13.4935L8.14861 10.275L8.13787 10.2622L8.12703 10.2495L4.32226 13.4935ZM5.50871 13.9978L5.25195 9.00437L5.24324 9.00482L5.23453 9.00529L5.50871 13.9978ZM6.70348 13.3201L10.8313 16.1416L10.8655 16.0916L10.8985 16.0407L6.70348 13.3201ZM14.9535 0.598961L19.1486 3.31957L19.1576 3.30565L19.1665 3.29167L14.9535 0.598961ZM14.9578 0.592662L19.061 3.44979L19.0766 3.42739L19.092 3.40481L14.9578 0.592662ZM14.8503 0.11168L18.1675 -3.62949L18.1668 -3.63006L14.8503 0.11168ZM14.2133 0.153979L10.4112 -3.09315L10.4025 -3.08295L14.2133 0.153979ZM14.2042 0.164279L10.5386 -3.23624L10.5326 -3.22978L14.2042 0.164279ZM5.88389 9.16483L2.21234 5.77077L2.21218 5.77094L5.88389 9.16483ZM5.3712 9.19138L2.08664 12.9612L2.08685 12.9614L5.3712 9.19138ZM2.60985 6.78549L-0.688354 10.5434L-0.681541 10.5494L-0.674706 10.5553L2.60985 6.78549ZM1.55916 6.39374L1.54574 1.39376C0.351031 1.39697 -0.832897 1.72316 -1.87081 2.35386L0.725703 6.62681L3.32222 10.8998C2.78284 11.2275 2.17683 11.3921 1.57258 11.3937L1.55916 6.39374ZM0.725703 6.62681L-1.87081 2.35386C-2.91041 2.98558 -3.77317 3.90564 -4.33051 5.03168L0.150625 7.24966L4.63176 9.46764C4.32728 10.0828 3.86328 10.571 3.32222 10.8998L0.725703 6.62681ZM0.150625 7.24966L-4.33051 5.03168C-4.88907 6.16017 -5.10872 7.43296 -4.94942 8.69591L0.0112789 8.07021L4.97197 7.4445C5.06048 8.1462 4.93746 8.85002 4.63176 9.46764L0.150625 7.24966ZM0.0112789 8.07021L-4.94942 8.69591C-4.79024 9.95791 -4.26353 11.1268 -3.45973 12.0729L0.350639 8.83541L4.161 5.59795C4.59219 6.10545 4.88359 6.74376 4.97197 7.4445L0.0112789 8.07021ZM0.350639 8.83541L-3.45414 12.0794L0.517482 16.7376L4.32226 13.4935L8.12703 10.2495L4.15541 5.59138L0.350639 8.83541ZM4.32226 13.4935L0.495898 16.7121C1.15364 17.494 1.9805 18.0957 2.89608 18.4848L4.85173 13.8832L6.80739 9.28148C7.31026 9.4952 7.77409 9.82975 8.14861 10.275L4.32226 13.4935ZM4.85173 13.8832L2.89608 18.4848C3.811 18.8737 4.7995 19.0443 5.78289 18.9902L5.50871 13.9978L5.23453 9.00529C5.76713 8.97604 6.30517 9.06805 6.80739 9.28148L4.85173 13.8832ZM5.50871 13.9978L5.76547 18.9912C7.84064 18.8845 9.69284 17.8072 10.8313 16.1416L6.70348 13.3201L2.57563 10.4986C3.15916 9.64493 4.14091 9.0615 5.25195 9.00437L5.50871 13.9978ZM6.70348 13.3201L10.8985 16.0407L19.1486 3.31957L14.9535 0.598961L10.7585 -2.12165L2.50845 10.5995L6.70348 13.3201ZM14.9535 0.598961L19.1665 3.29167C19.1294 3.34971 19.094 3.40249 19.061 3.44979L14.9578 0.592662L10.8545 -2.26446C10.8187 -2.21301 10.7803 -2.15601 10.7406 -2.09375L14.9535 0.598961ZM14.9578 0.592662L19.092 3.40481C20.0777 1.95565 20.0914 0.422101 19.9072 -0.559511C19.7014 -1.65616 19.1386 -2.76843 18.1675 -3.62949L14.8503 0.11168L11.5331 3.85285C10.7218 3.13346 10.2514 2.20478 10.0787 1.28476C9.92768 0.479771 9.9152 -0.884119 10.8235 -2.21949L14.9578 0.592662ZM14.8503 0.11168L18.1668 -3.63006C17.6149 -4.11929 16.9768 -4.4843 16.2967 -4.71376L14.6982 0.0238517L13.0998 4.76146C12.5325 4.57007 11.9979 4.26484 11.5338 3.85342L14.8503 0.11168ZM14.6982 0.0238517L16.2967 -4.71376C15.6169 -4.94313 14.9011 -5.03517 14.1909 -4.988L14.5223 0.0010057L14.8536 4.99002C14.2627 5.02926 13.6668 4.95276 13.0998 4.76146L14.6982 0.0238517ZM14.5223 0.0010057L14.1909 -4.988C13.4807 -4.94084 12.7804 -4.7547 12.1325 -4.43384L14.3513 0.0468935L16.5701 4.52763C16.0284 4.79587 15.4445 4.95077 14.8536 4.99002L14.5223 0.0010057ZM14.3513 0.0468935L12.1325 -4.43384C11.4841 -4.11277 10.8956 -3.6603 10.4112 -3.09314L14.2133 0.153979L18.0155 3.4011C17.6068 3.8796 17.1122 4.25918 16.5701 4.52763L14.3513 0.0468935ZM14.2133 0.153979L10.4025 -3.08295C10.4475 -3.1359 10.4929 -3.18698 10.5386 -3.23623L14.2042 0.164279L17.8698 3.56479C17.9217 3.50878 17.9732 3.45083 18.0241 3.39091L14.2133 0.153979ZM14.2042 0.164279L10.5326 -3.22978L2.21234 5.77077L5.88389 9.16483L9.55545 12.5589L17.8757 3.55834L14.2042 0.164279ZM5.88389 9.16483L2.21218 5.77094C2.6319 5.31686 3.13007 4.95944 3.67108 4.7091L5.77077 9.24687L7.87046 13.7846C8.4975 13.4945 9.07257 13.0813 9.55561 12.5587L5.88389 9.16483ZM5.77077 9.24687L3.67108 4.7091C4.2117 4.45895 4.79041 4.31772 5.37475 4.28745L5.63335 9.28076L5.89194 14.2741C6.57169 14.2389 7.24382 14.0746 7.87046 13.7846L5.77077 9.24687ZM5.63335 9.28076L5.37475 4.28745C5.95904 4.25719 6.54687 4.33797 7.10647 4.52878L5.49291 9.26126L3.87934 13.9937C4.52895 14.2152 5.21226 14.3093 5.89194 14.2741L5.63335 9.28076ZM5.49291 9.26126L7.10647 4.52878C7.66636 4.71967 8.1944 5.01962 8.65555 5.42136L5.3712 9.19138L2.08685 12.9614C2.61867 13.4247 3.22944 13.7722 3.87934 13.9937L5.49291 9.26126ZM5.3712 9.19138L8.65576 5.42154L5.89441 3.01566L2.60985 6.78549L-0.674706 10.5553L2.08664 12.9612L5.3712 9.19138ZM2.60985 6.78549L5.90806 3.02759C4.69057 1.95904 3.13822 1.39489 1.56281 1.39374L1.55916 6.39374L1.55552 11.3937C0.758219 11.3932 -0.044448 11.1085 -0.688354 10.5434L2.60985 6.78549Z" fill="#053F31" mask="url(#path-1-inside-1_1094_57353)"/>
              </svg>
            )}
          </span>
        </span>

        <span>{label}</span>
      </label>

      {/* RIGHT: count */}
      {count !== undefined && <span className="font-outfit text-[20px] line-height-[150%] font-light text-[#000000]">({count})</span>}
    </div>
  );
}

export default function ProductFiltersModal({
  open,
  onClose,
  onApply,
  onReset,
  wasteCategoryOptions = DEFAULT_WASTE_CATEGORY_OPTIONS,
  certificationOptions = DEFAULT_CERTIFICATION_OPTIONS,
  availabilityOptions = DEFAULT_AVAILABILITY_OPTIONS,
  lerCodeOptions = DEFAULT_LER_CODE_OPTIONS,
}: ProductFiltersModalProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    wasteCategory: true,
    location: true,
    certifications: true,
    availability: true,
    lerCode: true,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [wasteCategory, setWasteCategory] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(wasteCategoryOptions.map((o) => [o.id, o.id === "livestock"]))
  );
  const [andalusianOpen, setAndalusianOpen] = useState(true);
  const [locationAndalusia, setLocationAndalusia] = useState(true);
  const [locationAlmeria, setLocationAlmeria] = useState(true);
  const [locationSeville, setLocationSeville] = useState(false);
  const [locationCatalonia, setLocationCatalonia] = useState(false);
  const [locationValencia, setLocationValencia] = useState(false);
  const [locationMadrid, setLocationMadrid] = useState(false);
  const [locationBasqueCountry, setLocationBasqueCountry] = useState(false);
  const [certifications, setCertifications] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(certificationOptions.map((o) => [o.id, o.id === "iso"]))
  );
  const [availability, setAvailability] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(availabilityOptions.map((o) => [o.id, o.id === "inStock"]))
  );
  const [lerCode, setLerCode] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(lerCodeOptions.map((o) => [o.id, o.id === "code1"]))
  );
  const [distanceKm, setDistanceKm] = useState(25);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const handleReset = () => {
    setWasteCategory(Object.fromEntries(wasteCategoryOptions.map((o) => [o.id, false])));
    setLocationAndalusia(false);
    setLocationAlmeria(false);
    setLocationSeville(false);
    setLocationCatalonia(false);
    setLocationValencia(false);
    setLocationMadrid(false);
    setLocationBasqueCountry(false);
    setCertifications(Object.fromEntries(certificationOptions.map((o) => [o.id, false])));
    setAvailability(Object.fromEntries(availabilityOptions.map((o) => [o.id, false])));
    setLerCode(Object.fromEntries(lerCodeOptions.map((o) => [o.id, false])));
    setDistanceKm(0);
    onReset?.();
  };

  const handleApply = () => {
    const filters = {
      wasteCategory,
      location: {
        andalusia: locationAndalusia,
        almeria: locationAlmeria,
        seville: locationSeville,
        catalonia: locationCatalonia,
        valencia: locationValencia,
        madrid: locationMadrid,
        basqueCountry: locationBasqueCountry,
      },
      certifications,
      availability,
      lerCode,
      distanceKm,
    };
    console.log("Applied filters:", filters);
    console.log("Distance range (km):", distanceKm);
    onApply?.(filters);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop - light grey, blur */}
      <div
        className="absolute inset-0 bg-[#000000]/10"
        onClick={onClose}
        aria-hidden
      />
      {/* Modal - flex col so footer stays visible on mobile */}
      <div
        className="relative z-10 flex w-full xl:max-w-[1260px] 2xl:max-w-[1450px] max-h-[90vh] min-h-0 flex-col overflow-hidden rounded-[16px] bg-[#F7FAF8] shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="filters-title"
      >
        {/* Scrollable content - Distance and all sections scroll on small screens */}
        <div className="min-h-0 flex-1 overflow-y-auto p-[20px] xl:p-[30px] md:max-h-[834px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#DDDDDD] pb-[10px]">
            <h3 id="filters-title" className="font-outfit font-semibold text-[#000000]">
              Filters
            </h3>
            <button
              type="button"
              onClick={handleReset}
              className="font-outfit text-[20px] leading-[150%] font-semibold text-[#053F31]"
            >
              Reset
            </button>
          </div>

          <div className="grid grid-cols-1 gap-[50px] md:grid-cols-3 pt-5">
            {/* Waste Category - accordion */}
            <div className="border-b border-[#DDDDDD] pb-5 h-fit">
              <button
                type="button"
                onClick={() => toggleSection("wasteCategory")}
                className="mb-[20px] flex w-full items-center justify-between text-left"
                aria-expanded={openSections.wasteCategory}
              >
                <span className="font-outfit text-[20px] leading-5 font-medium text-[#053F31]">Waste Category</span>
                <span className="text-[#053F31]">{openSections.wasteCategory ? <IconChevronUp /> : <IconChevronDown />}</span>
              </button>
              {openSections.wasteCategory && (
                <div className="h-[188px] overflow-y-auto pr-1 scroll-green overflow-x-hidden">
                  <div className="space-y-[12px] pr-[40px]">
                    {wasteCategoryOptions.map((opt) => (
                      <Checkbox
                        key={opt.id}
                        id={`w-${opt.id}`}
                        label={opt.label}
                        count={opt.count}
                        checked={wasteCategory[opt.id] ?? false}
                        onChange={(v) => setWasteCategory((s) => ({ ...s, [opt.id]: v }))}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Location - accordion: open = down arrow; sub-locations (e.g. Andalusia) as nested accordion; unchecking parent unchecks children */}
            <div className="border-b border-[#DDDDDD] pb-5 h-fit">
              <button
                type="button"
                onClick={() => toggleSection("location")}
                className="mb-[20px] flex w-full items-center justify-between text-left"
                aria-expanded={openSections.location}
              >
                <span className="font-outfit text-[20px] leading-5 font-medium text-[#053F31]">Location</span>
                <span className="text-[#053F31]">{openSections.location ? <IconChevronUp /> : <IconChevronDown />}</span>
              </button>
              {openSections.location && (
                <div className="h-[188px] overflow-y-auto pr-1 scroll-green">
                  <div className="space-y-[12px] pr-[40px]">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="loc-andalusia"
                            label=""
                            checked={locationAndalusia}
                            onChange={(v) => {
                              setLocationAndalusia(v);
                              if (v) {
                                setLocationAlmeria(true);
                                setLocationSeville(true);
                              } else {
                                setLocationAlmeria(false);
                                setLocationSeville(false);
                              }
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => setAndalusianOpen(!andalusianOpen)}
                            className="text-left font-outfit text-[20px] leading-[150%] font-light text-[#757575] hover:text-[#053F31]"
                            aria-expanded={andalusianOpen}
                          >
                            Andalusia
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => setAndalusianOpen(!andalusianOpen)}
                          className="shrink-0 text-[#053F31]"
                          aria-expanded={andalusianOpen}
                        >
                          {andalusianOpen ? <IconChevronUp /> : <IconChevronDown />}
                        </button>
                      </div>
                      {andalusianOpen && (
                        <div className="ml-4 mt-1 space-y-0.5">
                          <Checkbox id="loc-almeria" label="Almería" checked={locationAlmeria} onChange={setLocationAlmeria} />
                          <Checkbox id="loc-seville" label="Seville" checked={locationSeville} onChange={setLocationSeville} />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Checkbox id="loc-catalonia" label="Catalonia" checked={locationCatalonia} onChange={setLocationCatalonia} />
                      <span className="shrink-0 text-[#053F31]"><IconChevronDown /></span>
                      
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Checkbox id="loc-valencia" label="Valencia" checked={locationValencia} onChange={setLocationValencia} />
                      <span className="shrink-0 text-[#053F31]"><IconChevronDown /></span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Checkbox id="loc-madrid" label="Madrid" checked={locationMadrid} onChange={setLocationMadrid} />
                      <span className="shrink-0 text-[#053F31]"><IconChevronDown /></span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Checkbox id="loc-basque" label="Basque Country" checked={locationBasqueCountry} onChange={setLocationBasqueCountry} />
                      <span className="shrink-0 text-[#053F31]"><IconChevronDown /></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Certifications - accordion */}
            <div className="border-b border-[#DDDDDD] pb-5 h-fit">
              <button
                type="button"
                onClick={() => toggleSection("certifications")}
                className="mb-[20px] flex w-full items-center justify-between text-left"
                aria-expanded={openSections.certifications}
              >
                <span className="font-outfit text-[20px] leading-5 font-medium text-[#053F31]">Certifications</span>
                <span className="text-[#053F31]">{openSections.certifications ? <IconChevronUp /> : <IconChevronDown />}</span>
              </button>
              {openSections.certifications && (
                <div className="space-y-[12px]">
                  {certificationOptions.map((opt) => (
                    <Checkbox
                      key={opt.id}
                      id={`c-${opt.id}`}
                      label={opt.label}
                      checked={certifications[opt.id] ?? false}
                      onChange={(v) => setCertifications((s) => ({ ...s, [opt.id]: v }))}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Availability - accordion */}
            <div className="border-b border-[#DDDDDD] pb-5 h-fit">
              <button
                type="button"
                onClick={() => toggleSection("availability")}
                className="mb-[20px] flex w-full items-center justify-between text-left"
                aria-expanded={openSections.availability}
              >
                <span className="font-outfit text-[20px] leading-5 font-medium text-[#053F31]">Availability</span>
                <span className="text-[#053F31]">{openSections.availability ? <IconChevronUp /> : <IconChevronDown />}</span>
              </button>
              {openSections.availability && (
                <div className="space-y-[12px]">
                  {availabilityOptions.map((opt) => (
                    <Checkbox
                      key={opt.id}
                      id={`a-${opt.id}`}
                      label={opt.label}
                      checked={availability[opt.id] ?? false}
                      onChange={(v) => setAvailability((s) => ({ ...s, [opt.id]: v }))}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* LER code - accordion */}
            <div className="border-b border-[#DDDDDD] pb-5 h-fit">
              <button
                type="button"
                onClick={() => toggleSection("lerCode")}
                className="mb-[20px] flex w-full items-center justify-between text-left"
                aria-expanded={openSections.lerCode}
              >
                <span className="font-outfit text-[20px] leading-5 font-medium text-[#053F31]">LER code</span>
                <span className="text-[#053F31]">{openSections.lerCode ? <IconChevronUp /> : <IconChevronDown />}</span>
              </button>
              {openSections.lerCode && (
                <div className="space-y-[12px]">
                  {lerCodeOptions.map((opt) => (
                    <Checkbox
                      key={opt.id}
                      id={`code-${opt.id}`}
                      label={opt.label}
                      checked={lerCode[opt.id] ?? false}
                      onChange={(v) => setLerCode((s) => ({ ...s, [opt.id]: v }))}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Distance - not in accordion, always visible */}
            <div className="border-b border-[#DDDDDD] pb-5">
              <div className="mb-[10px] font-outfit text-[20px] font-medium text-[#053F31]">Distance</div>
              <input
                type="range"
                min={0}
                max={200}
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="range-green w-full"
                style={{
                  background: `linear-gradient(
          to right,
          #053F31 0%,
          #053F31 ${(distanceKm / 200) * 100}%,
          #DAE6DC ${(distanceKm / 200) * 100}%,
          #DAE6DC 100%
        )`,
                }}
              />
              <div className="flex justify-between font-outfit text-[20px] leading-[150%] font-light text-[#757575]">
                <span>0 km</span>
                <span>200 km</span>
              </div>
            </div>
          </div>
          {/* Apply Filters & Clear All - inside same popup as all filters */}
          <div className="flex flex-wrap items-center justify-center gap-[15px] pt-[40px] md:justify-end">
            <button
              type="button"
              onClick={handleApply}
              className="flex items-center gap-2 rounded-[50px] bg-[#DAE6DC] p-[7px_7px_7px_15px] font-outfit text-[18px] font-semibold text-[#053F31]"
            >
              Apply Filters
              <IconArrowRight />
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 rounded-[50px] border-2 border-[#053F31] p-[7px_7px_7px_15px] font-outfit text-[18px] font-semibold text-[#053F31]"
            >
              Clear All
              <IconClearArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
