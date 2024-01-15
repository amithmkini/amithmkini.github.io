// Make a flex box, and then there are multiple list points

export interface Props {
  company: string;
  position: string;
  period: string;
  location: string;
  points: string[];
}

export default function SectionItem({
  company,
  position,
  period,
  location,
  points,
}: Props) {
  return (
    <div className="my-3 flex flex-col">
      <div className="flex flex-row">
        <h3 className="text-lg font-medium text-skin-section-item">
          {company}
        </h3>
        <p className="ml-auto text-sm">{period}</p>
      </div>
      <div className="flex flex-row">
        <h4 className="text-sm font-medium">{position}</h4>
        <p className="ml-auto text-sm">{location}</p>
      </div>
      <ul className="my-3 list-inside list-disc">
        {points.map(point => (
          <li key={point} className="my-2 marker:text-skin-section-item">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
