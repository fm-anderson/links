function Footer() {
  return (
    <footer className="bg-primary-foreground">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div>
            <h1>Copyright © {new Date().getFullYear()} - NLinks</h1>
          </div>
          <div className="flex gap-2">icons-list</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
