import Link from "next/link";

interface SidebarProps {
  items: string[];
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <ul className="history_depth02">
      {items.map((item, index) => (
        <li key={index}>
          <Link href="#">
            <span className="p_txt fw500">{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
