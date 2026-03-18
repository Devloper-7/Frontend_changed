// import React from 'react';

// interface ServiceCardProps {
//   icon?: string; // Path to your SVG/PNG
//   title: string;
//   description?: string;
//   list?: string[];
//   className?: string;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, list, className = "" }) => {
//   return (
//     <div
//       className={`bg-[#F7FAF8] font-outfit text-[20px] p-[22px] rounded-[20px]
//   border border-[#053F31]/10
//   hover:border-[#053F31] hover:border-b-3
//   transition-all duration-200 h-full ${className}`}
//     >
//       {icon && (
//         <div className="">
//           {/* Replace with your actual asset sizing if needed */}
//           <img src={icon} alt={title} className="object-contain" />
//         </div>
//       )}
//       <h3 className=" font-bold text-black mt-[50px] mb-[30px]">{title}</h3>
//       {description && <p className="text-gray-600 leading-relaxed font-light text-[20px]">{description}</p>}

//       {list && (
//         <ul className="space-y-[10px]">
//           {list.map((item, index) => (
//             <li key={index} className="flex items-start font-light text-[#757575]   ">
//               <span className="mr-2 font-medium">•</span>
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ServiceCard;


import React from 'react';

interface ServiceCardProps {
  icon?: React.ReactNode; // Accepts your new SVG functions
  title: string;
  description?: string;
  list?: string[];
  className?: string;
  /** When true, render list as <ol> (numbered); otherwise <ul> (bullets). */
  ordered?: boolean;
  /** Optional content rendered inside the card (e.g. a button). */
  action?: React.ReactNode;
}

const   ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  list,
  className = "",
  ordered = false,
  action
}) => {
  return (
    <div
      className={`font-outfit p-[22px] rounded-[20px]
      border border-[#053F31]/10
      hover:border-[#053F31] hover:border-b-[3px]
      transition-all duration-200 h-full flex flex-col ${className}`}
    >
      {/* Icon Container (Green Box) */}
      <div className="mb-[50px]">
        {/* <div className="w-[60px] h-[60px] bg-[#D6E6DE] rounded-[12px] flex items-center justify-center text-[#053F31]"> */}
        {icon}
        {/* </div> */}
      </div>

      <h3 className="font-bold text-black mb-[20px]">
        {title}
      </h3>

      {description && (
        <h5 className="text-[#757575] leading-relaxed font-light mb-[30px]">
          {description}
        </h5>
      )}

      {list && (
        ordered ? (
          <ol className="md:space-y-[12px] list-decimal list-inside">
            {list.map((item, index) => (
              <li key={index} className="text-[20px] font-light text-[#757575] mb-[10px]">
                {item}
              </li>
            ))}
          </ol>
        ) : (
          <ul className="md:space-y-[12px] ">
            {list.map((item, index) => (
              <li key={index} className="flex text-[20px] items-start font-light text-[#757575] mb-[10px]">
                <span className="mr-3 font-bold ">•</span>
                {item}
              </li>
            ))}
          </ul>
        )
      )}
      {action && <div className="mt-[40px]">{action}</div>}
    </div>
  );
};

export default ServiceCard;