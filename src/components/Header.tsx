interface HeaderProps {
  title: string;
}

import '../styles/content.scss';

export function Header(props: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.title}</span>
      </span>
    </header>
  );
}
