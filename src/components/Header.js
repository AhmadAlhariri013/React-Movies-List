import { Navbar, Typography, Input } from "@material-tailwind/react";

export function Header({ search }) {
  const onSearch = (word) => {
    search(word);
  };
  return (
    <Navbar className="mx-auto px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-light-blue-500">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          NET SHOW
        </Typography>

        <form className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Search here..."
            onChange={(e) => onSearch(e.target.value)}
            className="pr-20 border-solid border-2 focus:border-deep-purple-400 focus:outline-none"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
        </form>
      </div>
    </Navbar>
  );
}
