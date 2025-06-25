import React from "react";
import "../../CSS/AboutUs/CorePath.css";

const items = [
  {
    label: "Metal Stamping",
    text: "We bring together cutting-edge technology and exceptional craftsmanship to deliver the precision metal stamping solutions you need. Using advanced stamping presses and custom-designed dies, we transform flat metal sheets into reliable, high-quality components tailored to specific requirements. Whether you're in the automotive, electrical, or any other industry, we ensure a process that guarantees consistency, scalability, and excellence.",
  },
  {
    label: "Metal Enclosures",
    text: "We craft custom metal enclosures designed to shield equipment from environmental challenges and interference. Our team uses precision bending, expert welding, and meticulous assembly to create solutions perfectly tailored to specifications. With a commitment to excellence, we ensure every enclosure meets industry standards and goes beyond expectations.",
  },
  {
    label: "Irrigation Products Fabrication",
    text: "We are here to support irrigation needs with expertly crafted metal parts. Our precision craftsmanship ensures that every product we create is durable, efficient, and built to withstand the toughest agricultural conditions. We understand how important it is to keep irrigation systems running smoothly, and that’s why we deliver solutions you can rely on.",
  },
  {
    label: "Precision Injection Moulding",
    text: "We create high-precision, complex parts through advanced plastic injection moulding. We use engineering-grade plastics with superior mechanical and thermal properties, ensuring robust and reliable components. Designed for demanding applications in the electrical and automotive industries, our moulded parts deliver unmatched performance and durability.",
  },
  {
    label: "Switchgear Plastic Components",
    text: "We’re dedicated to providing durable, high-performance components for low voltage switchgear needs. From circuit breakers and switches to safety device housings, we craft precision-engineered parts designed to deliver optimal control and protection for electrical systems. Using advanced plastic moulding, we ensure every component meets the highest standards of reliability and safety, tailored to the stringent demands of modern electrical applications.",
  },
  {
    label: "Automotive Components",
    text: "We design and manufacture top-quality plastic components specifically for the automotive industry dashboards, bumpers, light housings, and more. With precision injection moulding, we create parts that deliver exceptional durability and sleek design, ensuring they meet even the toughest industry standards. Our components are engineered to handle the demands of modern vehicles, providing reliable strength with modern style and advanced functionality.",
  },
  {
    label: "Moulds",
    text: "We create advanced moulds designed to shape molten materials with precision and reliability. Whether you’re in the automotive, electrical, or consumer goods industry, our moulds are engineered for accuracy and durability to ensure consistent, high-quality production. With our expertise, you can rely on moulds that deliver flawless results every time, helping to meet the highest standards.",
  },
  {
    label: "Precision press tools",
    text: "We craft high-quality dies designed to cut, shape, and form metal sheets with exceptional precision. Our progressive dies stand out by performing multiple operations in a single pass, delivering faster production and unmatched efficiency. Essential for metal stamping, our advanced dies transform raw metal sheets into finished components with accuracy and reliability.",
  },
  {
    label: "Jig Fixtures",
    text: "Our jig fixtures are designed to bring accuracy and consistency to manufacturing process. These precision-engineered tools guide and control the position of other tools, making tasks like assembling, drilling, and welding faster and more reliable. Tailored to specific needs, our fixtures help you optimize production, reduce errors, and boost efficiency. Count on us for solutions that enhance operations and deliver exceptional results every time.",
  },
  {
    label: "Plating",
    text: "Spectrum offers expert Zinc, Nickel, and Tin plating solutions, delivering superior corrosion resistance and durability for a wide range of components. Our Silver, Silver Graphite, and Gold plating services ensure exceptional conductivity and performance for high-precision industrial applications. As trusted contract manufacturing partner, Spectrum combines advanced surface finishing technology with strict quality control to meet exact specifications, every time.",
  },
  {
    label: "Electro Mechanical Assemblies",
    text: "Our comprehensive services include precise wiring, switchgear installation, and component mounting, all tailored to unique specifications. Designed to meet the rigorous demands of the automotive and electrical industries, our assemblies deliver the reliability and performance you depend on. We’re here to provide innovative solutions that power success, ensuring every detail is handled with precision and care.",
  },
  {
    label: "Process Automation",
    text: "We make manufacturing easier and more efficient with advanced process automation solutions. From robotic assembly lines and automated feeding systems to computer-controlled machining, we simplify complex tasks, reducing manual effort while boosting efficiency and consistency. Tailored to production needs, our automation systems deliver seamless operations, enhanced productivity, and precise results.",
  },
];

export default function ContractManufacturing() {
  return (
    <div className="core-path">
      <h1 className="title">Contract Manufacturing</h1>
      <p className="core-para">
        Spectrum offers end-to-end contract manufacturing services including
        metal fabrication, precision moulding, plating, and electro mechanical
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
