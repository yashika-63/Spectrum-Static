import React from "react";
import "../../CSS/AboutUs/CorePath.css";

const items = [
  {
    label: "Surface Treatment",
    text: "Spectrum offers expert Zinc, Nickel, Alkaline Zinc, Electroless Nickle, Gold, Silver, Silver Graphite, Silver Diamond and Tin plating solutions, delivering superior corrosion resistance and durability for a wide range of components. Our Silver, Silver Graphite, and Gold plating services ensure exceptional conductivity and performance for high-precision industrial applications. As trusted manufacturing partner, Spectrum combines advanced surface finishing technology with strict quality control to meet exact specifications, every time.",
  },
  {
    label: "Metal Enclosures",
    text: "We craft custom metal enclosures designed to shield equipment from environmental challenges and interference. Our team uses precision bending, expert welding, and meticulous assembly to create solutions perfectly tailored to specifications. With a commitment to excellence, we ensure every enclosure meets industry standards and goes beyond expectations.",
  },
  {
    label: "Metal Stamping",
    text: "We bring together cutting-edge technology and exceptional craftsmanship to deliver the precision metal stamping solutions you need. Using advanced stamping presses and custom designed dyes, we transform flat metal sheets into reliable, high-quality components tailored to specific requirements. Whether you're in the automotive, electrical, or any other industry, we ensure a process that guarantees consistency, scalability, and excellence.",
  },
  {
    label: "Precision Injection Moulding",
    text: "We create high-precision, complex parts through advanced plastic injection moulding. We use engineering-grade plastics with superior mechanical and thermal properties, ensuring robust and reliable components. Designed for demanding applications in the electrical and automotive industries, our moulded parts deliver unmatched performance and durability.",
  },
  {
    label: "Irrigation Products Fabrication",
    text: "We are here to support irrigation needs with expert crafted metal parts. Our precision craftsmanship ensures that every product we create is durable, efficient, and built to withstand the toughest agricultural conditions. We understand how important it is to keep irrigation systems running smoothly, and that’s why we deliver solutions you can rely on.",
  },
  // {
  //   label: "Switchgear Plastic Components",
  //   text: "We’re dedicated to providing durable, high-performance components for low voltage switchgear needs. From circuit breakers and switches to safety device housings, we craft precision-engineered parts designed to deliver optimal control and protection for electrical systems. Using advanced plastic moulding, we ensure every component meets the highest standards of reliability and safety, tailored to the stringent demands of modern electrical applications.",
  // },
  // {
  //   label: "Automotive Components",
  //   text: "We design and manufacture top-quality plastic components specifically for the automotive industry dashboards, bumpers, light housings, and more. With precision injection moulding, we create parts that deliver exceptional durability and sleek design, ensuring they meet even the toughest industry standards. Our components are engineered to handle the demands of modern vehicles, providing reliable strength with modern style and advanced functionality.",
  // },
  {
    label: "Modern Tool Room",
    text: "From precision moulds for plastic injection parts to advanced press tools and custom jigs and fixtures, we engineer tooling solutions that drive accuracy, consistency, and productivity across automotive, electrical, and consumer industries. Crafted for flawless performance built to meet the highest standards.",
  },
  {
    label: "Electro Mechanical Assemblies",
    text: "Our comprehensive services include precise wiring, switchgear installation, and component mounting, all tailored to unique specifications. Designed to meet the rigorous demands of the automotive and electrical industries, our assemblies deliver the reliability and performance you depend on.",
  },
];

export default function ContractManufacturing() {
  return (
    <div className="core-path">
      <h1 className="title">Manufacturing Services</h1>
      <p className="core-para">
        Spectrum offers end-to-end manufacturing services including
        metal fabrication, precision moulding, surface treatment, and electro mechanical
        assemblies. With expertise in advanced tooling, automation, and
        component manufacturing, we deliver high-quality, customized solutions
        across industries.
      </p>

      <div className="core-services">
        {items.map((item, index) => (
          <div className="core-block-services" key={index}>
            <div className="title-section vertical-title">
              <span className="our-black">{item.label}</span>
              <span className="label-red1"></span>
            </div>

            <div className="indicator-wrapper fixed-width-indicator">
              <div className="line black-line"></div>
              <div className="dot red-dot"></div>
              <div className="line black-line"></div>
            </div>

            <p className="description">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
