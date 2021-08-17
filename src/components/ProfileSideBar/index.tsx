import { Box } from "../Box";
import { ProfileSideBarMenuDefault } from "../ProfileSideBarMenuDefault";


type UserProps = {
  gitHubUser: string;
}


export function ProfileSideBar({ gitHubUser }: UserProps) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${gitHubUser}.png`} alt="Jaymes Costa" />
      <hr />
      <a className="boxLink" href={`http://github.com/${gitHubUser}`}>
        @{gitHubUser}
      </a>
      <hr />
      <ProfileSideBarMenuDefault />
    </Box>
  );
}