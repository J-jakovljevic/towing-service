type ServiceListProps = {
  items: string[];
};

const ServiceList = ({ items }: ServiceListProps) => {
  return (
    <ul className="space-y-3">
      {items.map((item: string) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm md:text-base text-foreground/60"
        >
          <span
            className="shrink-0 mt-0.5 text-lg leading-none"
            style={{ color: "#f5b800" }}
          >
            ›
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
