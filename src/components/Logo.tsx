interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

export const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      {/* Logo SVG - Sabor Arrochado */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Fundo circular verde-limão */}
        <circle cx="100" cy="100" r="100" fill="#D4D836" />

        {/* Casa/Tenda estilizada */}
        <g>
          {/* Topo triangular */}
          <path
            d="M 100 40 L 140 85 L 60 85 Z"
            fill="#2D5016"
          />
          {/* Linhas do teto */}
          <line x1="75" y1="68" x2="75" y2="78" stroke="#D4D836" strokeWidth="3" />
          <line x1="100" y1="50" x2="100" y2="60" stroke="#D4D836" strokeWidth="3" />
          <line x1="125" y1="68" x2="125" y2="78" stroke="#D4D836" strokeWidth="3" />
          {/* Corpo da casa */}
          <rect x="60" y="85" width="80" height="60" fill="#FFFFFF" />
          {/* Porta */}
          <rect x="90" y="120" width="20" height="25" fill="#2D5016" />
          {/* Janelas */}
          <rect x="70" y="100" width="15" height="15" fill="#2D5016" />
          <rect x="115" y="100" width="15" height="15" fill="#2D5016" />
        </g>

        {/* Estrelas acima */}
        <g fill="#2D5016">
          {/* Estrela esquerda */}
          <path d="M 70 35 L 73 45 L 83 45 L 75 52 L 78 62 L 70 55 L 62 62 L 65 52 L 57 45 L 67 45 Z" />
          {/* Estrela central */}
          <path d="M 100 20 L 103 30 L 113 30 L 105 37 L 108 47 L 100 40 L 92 47 L 95 37 L 87 30 L 97 30 Z" />
          {/* Estrela direita */}
          <path d="M 130 35 L 133 45 L 143 45 L 135 52 L 138 62 L 130 55 L 122 62 L 125 52 L 117 45 L 127 45 Z" />
        </g>
      </svg>
    </div>
  );
};
