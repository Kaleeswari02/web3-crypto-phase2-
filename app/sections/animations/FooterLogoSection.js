import Image from "next/image";

const LetterWithImage = ({ letter, src, size = 68, stroke = 1, fontWeight = 900 }) => (
  <span
    className="relative inline-block text-transparent"
    style={{
      WebkitTextStroke: `${stroke}px #a2a2a2`,
      fontWeight: fontWeight,
      letterSpacing: "0.02em",
      lineHeight: 1,
    }}
  >
    {letter}
    <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <Image src={src} width={size} height={size} alt={letter} style={{ objectFit: "contain" }} />
    </span>
  </span>
);

export default function FooterLogoSection() {
  return (
    <div className="flex flex-col items-center mb-12">
      {/* SPORTSTECH */}
      <div className="relative flex items-center justify-center font-extrafett mb-8 text-[100px] md:text-[120px] lg:text-[120px] xl:text-[150px] font-extrabold tracking-wider leading-none">
        <span className="text-transparent" style={{
          WebkitTextStroke: '1px #a2a2a2',
          fontWeight: 900,
          letterSpacing: '0.02em'
          
        }}>SP</span>

        <LetterWithImage letter="O" src="/assets/footer-icon1.png"  size={67} stroke={0.8} fontWeight={900} />

        <span className="text-transparent" style={{
          WebkitTextStroke: '1px #a2a2a2',
          fontWeight: 900,
          letterSpacing: '0.02em'
        }}>RTST</span>

        <LetterWithImage letter="C" src="/assets/footer-icon2.png" size={65} stroke={0.8} fontWeight={300} />

        <span className="text-transparent" style={{
          WebkitTextStroke: '1px #a2a2a2',
          fontWeight: 300,
          letterSpacing: '0.02em'
        }}>H</span>
      </div>

      {/* CRYPTO */}
      <div className="relative flex items-center text-[80px]  font-extrafett md:text-[100px] lg:text-[120px] xl:text-[150px] font-extrabold leading-none tracking-wider">
        <span className="text-transparent" style={{
          WebkitTextStroke: '1px #a2a2a2',
          fontWeight: 300,
          letterSpacing: '0.02em'
        }}>NE</span>

        <LetterWithImage letter="O" src="/assets/footer-icon3.png" size={79} stroke={0.8} fontWeight={300} />
      </div>
    </div>
  );
}
