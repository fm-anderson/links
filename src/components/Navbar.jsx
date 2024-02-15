import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="border-b-2 bg-primary-foreground">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div>
            <Link to="/">
              <h1 className="text-xl font-bold">
                <span>N</span>
                <span>Links</span>
              </h1>
            </Link>
          </div>
          <div className="flex gap-2">
            <ProfileMenu />
            <Link to="/authentication">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
