import { BASE_URL } from "../../utils/variables";
import { List } from "./style";


type IconSetProps = {
  name: string;
  slug: any;
  icon: string;
};

export function OrkutNostalgicIconSet(props:any) {
  return (
    <List>
      {[
        { name: "Recados", slug: "recados", icon: "book" },
        { name: "Fotos", slug: "fotos", icon: "camera" },
        { name: "Videos", slug: "videos", icon: "video-camera" },
        { name: "Fãs", slug: "fas", icon: "star" },
        { name: "Mensagens", slug: "mensagens", icon: "email" },
      ].map(({ name, slug, icon }: IconSetProps) => (
        <li key={`orkut__icon_set__${slug}`}>
          <span
            style={{ gridArea: "title" }}
            className="OrkutNostalgicIconSet_title"
          >
            {name}
          </span>
          <span
            className="OrkutNostalgicIconSet__number"
            style={{ gridArea: "number" }}
          >
            <img
              key={`orkut__icon__set__${slug}_img`}
              className="OrkutNostalgicIconSet__iconSample"
              src={`${BASE_URL}/icons/${icon}.svg`}
            />
            {parseInt(props[slug]) ? parseInt(props[slug]) : 0}
          </span>
        </li>
      ))}
      {[
        { name: "Confiável", slug: "confiavel", icon: "smile" },
        { name: "Legal", slug: "legal", icon: "cool" },
        { name: "Sexy", slug: "sexy", icon: "heart" },
      ].map(({ name, slug, icon }: IconSetProps) => {
        const total = parseInt(props[slug]) ? parseInt(props[slug]) : 2;
        return (
          <li key={`orkut__icon_set__${slug}`}>
            <span className="OrkutNostalgicIconSet__title">{name}</span>
            <span
              className="OrkutNostalgicIconSet__iconComplex OrkutNostalgicIconSet__number"
              style={{ gridArea: "number" }}
            >
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= total - 1;
                return (
                  <img
                    key={`orkut__icon_set__${slug}_img_${index}`}
                    src={`${BASE_URL}/icons/${icon}.svg`}
                    style={{
                      marginRight: "2px",
                      opacity: isHeartActive ? 1 : "0.5",
                    }}
                  />
                );
              })}
            </span>
          </li>
        );
      })}
    </List>
  );
}
