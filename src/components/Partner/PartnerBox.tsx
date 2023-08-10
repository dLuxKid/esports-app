import { Icon } from "@iconify/react/dist/iconify.js";

interface Partner {
  name: string;
  align: 'left' | 'right';
}

function PartnerBox(props: Partner) {
  return (
    <div className={`flex-between ${props.align === 'right' && 'flex-row-reverse space-x-reverse'}`}>
      <div className={`flex-start w-1/2 flex-col space-y-6 ${props.align === 'right' && 'pl-20'}`}>
        <h1 className="header-text">{props.name}</h1>
        <p className="w-4/5 body-text">
          The dummy texts live far behind, behind the word mountains, far from
          the countries vowels and consonants. They live isolated in
          Buchstabhausen on the coast of the Semantik, a large language ocean. A
          small stream called Duden.
        </p>
        <div className="flex-start space-x-6 text-3xl">
          <Icon icon="mdi:twitch" />
          <Icon icon="mdi:twitter" />
          <Icon icon="mdi:youtube" />
        </div>
      </div>
      <div className='w-1/2 h-64 bg-gray-400'></div>
    </div>
  );
}

export default PartnerBox;
