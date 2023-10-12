import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const PaginationComp = ({ onPagination }) => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "red",
    onClick: () => {
      setActive(index);
      onPagination(index);
    },
  });

  const next = () => {
    if (active === 1000) return;

    setActive(active + 1);
    onPagination(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
    onPagination(active - 1);
  };

  return (
    <div className="flex items-center gap-4 justify-center my-5">
      <Button
        variant="text"
        className="flex items-center gap-2 text-cyan-500"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-cyan-500" />{" "}
        Previous
      </Button>
      <div className="flex items-center gap-2 ">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(active <= 5 ? 5 : active)}>
          {active <= 5 ? `5 ` : active}
        </IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 text-cyan-500"
        onClick={next}
        disabled={active === 100}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-cyan-500" />
      </Button>
    </div>
  );
};

export default PaginationComp;
