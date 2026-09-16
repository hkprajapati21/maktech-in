import { officeAddressLines } from "@/assets/data/contact";

const OfficeAddress = ({ Tag = "p", className = "" }) => {
  return (
    <Tag className={className}>
      {officeAddressLines.map((line, index) => (
        <span key={line}>
          {line}
          {index < officeAddressLines.length - 1 && <br />}
        </span>
      ))}
    </Tag>
  );
};

export default OfficeAddress;
