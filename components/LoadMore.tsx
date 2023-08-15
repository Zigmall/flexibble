"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";


type Props = {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

const LoadMore = ({ startCursor, endCursor, hasNextPage, hasPreviousPage }: Props) => {
    const router = useRouter();
    const handleNavigation = (direction: string) => {

    };
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {hasPreviousPage && (
            <Button title="First Page" handleClick={() => handleNavigation('first')} />
        )}
        {hasNextPage && (
            <Button title="Next Page" handleClick={() => handleNavigation('next')} />
        )}
    </div>
  )
};

export default LoadMore;

