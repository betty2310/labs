const MainFooter = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          From どら焼き with{' '}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            love
          </a>
          . The source code is available on{' '}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
