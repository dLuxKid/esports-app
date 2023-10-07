import Image, { StaticImageData } from "next/image";

interface Partner {
  item: {
    id: number;
    name: string;
    photoUrl: StaticImageData;
    twitter: string;
    youtube?: string;
    twitch?: string;
  }
}


function PartnerBox({ item }: Partner) {
  return (
    <div className={`flex-between my-2 gap-[5%] flex-col-reverse sm:flex-row ${item.id % 2 === 0 && 'sm:flex-row-reverse'}`}>
      <div className={`sm:flex-start flex-center sm:w-1/2 flex-col gap-4 ${item.id % 2 === 0 && 'sm:pl-20'}`}>
        <h1 className="header-text">{item.name}</h1>
        <div className="flex-start gap-4">
          <a title="twitter link" href={item.twitter} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" />
            </svg>
          </a>
          {
            item.twitch && <a title="twitch link" href={item.twitch} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z" /></svg>
            </a>
          }
          {
            item.youtube && <a title="youtube link" href={item.youtube} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                <path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z" />
              </svg>
            </a>
          }
        </div>
      </div>
      <div className='sm:w-1/2 h-64 md:h-80'>
        <Image src={item.photoUrl} alt="caster photo" className="object-fill object-center w-full h-full" />
      </div>
    </div>
  );
}

export default PartnerBox;
