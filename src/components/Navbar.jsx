import ProfileMenu from "./ProfileMenu";

function Navbar() {
  return (
    <nav className="bg-primary-foreground">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">
              <span>N</span>
              <span>Links</span>
            </h1>
          </div>
          <div className="flex gap-2">
            <ProfileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
