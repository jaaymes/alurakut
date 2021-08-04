import { useState } from "react";
import { Link } from "../Link";
import { MenuHeader, Logo, Input, ProfileSideBar } from "./style";
import { BASE_URL, v } from "../../utils/variables";

type MenuProps = {
  gitHubUser: string;
};

export function Menu({ gitHubUser }: MenuProps) {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MenuHeader>
      <div className="container">
        <Logo src={`${BASE_URL}/logo.svg`} />
        <nav style={{ flex: 1 }}>
          {[
            { name: "Inicio", slug: "/" },
            { name: "Amigos", slug: "/amigos" },
            { name: "Comunidade", slug: "/comunidades" },
          ].map((menuItem) => (
            <Link
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </Link>
          ))}
        </nav>
        <nav>
          <a href={`/logout`}>Sair</a>
          <div>
            <Input
              placeholder="Pesquisar no Orkut"
              url={`${BASE_URL}/icons/search.svg`}
            />
          </div>
        </nav>
        <button onClick={() => setIsMenuOpen(!IsMenuOpen)}>
          {IsMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!IsMenuOpen && (
            <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />
          )}
        </button>
      </div>
      <ProfileSideBar isMenuOpen={IsMenuOpen} gitHubUser={gitHubUser}>
        <div>
          <img src={`https:github.com/${gitHubUser}.png`} />
          <hr />
          <p>
            <a className="boxLink" href={`/user/${gitHubUser}`}>
              @{gitHubUser}
            </a>
          </p>
          <hr />
        </div>
      </ProfileSideBar>
    </MenuHeader>
  );
}
