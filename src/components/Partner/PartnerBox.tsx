import { Icon } from "@iconify/react/dist/iconify.js";

interface Partner {
  name: string;
  align: 'left' | 'right';
}

function PartnerBox(props: Partner) {
  return (
    <div className={`flex space-x-40 ${props.align === 'right' && 'flex-row-reverse space-x-reverse'}`}>
      <div className="flex flex-col space-y-6">
        <h1 className="text-6xl font-bold">{props.name}</h1>
        <p className="w-3/5">
          The dummy texts live far behind, behind the word mountains, far from
          the countries vowels and consonants. They live isolated in
          Buchstabhausen on the coast of the Semantik, a large language ocean. A
          small stream called Duden.
        </p>
        <div className="flex space-x-6 text-3xl">
          <Icon icon="mdi:twitch" />
          <Icon icon="mdi:twitter" />
          <Icon icon="mdi:youtube" />
        </div>
      </div>
      <div className="w-1/2 h-64 bg-gray-400"></div>
    </div>
  );
}

export default PartnerBox;
