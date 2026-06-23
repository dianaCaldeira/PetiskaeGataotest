import Image from 'next/image';

interface PetIllustrationProps {
  type?: 'cat' | 'dog' | 'both';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: { w: 64, h: 64, cls: 'w-16 h-16' },
  md: { w: 96, h: 96, cls: 'w-24 h-24' },
  lg: { w: 128, h: 128, cls: 'w-32 h-32' },
};

const PetIllustration: React.FC<PetIllustrationProps> = ({
  type = 'both',
  size = 'md',
  className = ''
}) => {
  const s = sizeMap[size];

  if (type === 'cat') {
    return (
      <div className={`${s.cls} relative ${className}`}>
        <Image
          src="/imagens/personagens/GATAO_acenando.png"
          alt="Gatão - mascote gato da Petiska & Gatão"
          width={s.w}
          height={s.h}
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>
    );
  }

  if (type === 'dog') {
    return (
      <div className={`${s.cls} relative ${className}`}>
        <Image
          src="/imagens/personagens/PETISKA_2_acenando.png"
          alt="Petiska - mascote cachorra da Petiska & Gatão"
          width={s.w}
          height={s.h}
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>
    );
  }

  // both
  return (
    <div className={`flex items-end gap-1 ${className}`}>
      <div className={`${s.cls} relative`}>
        <Image
          src="/imagens/personagens/GATAO_acenando.png"
          alt="Gatão - mascote gato"
          width={s.w}
          height={s.h}
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>
      <div className={`${s.cls} relative`}>
        <Image
          src="/imagens/personagens/PETISKA_2_acenando.png"
          alt="Petiska - mascote cachorra"
          width={s.w}
          height={s.h}
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default PetIllustration;
