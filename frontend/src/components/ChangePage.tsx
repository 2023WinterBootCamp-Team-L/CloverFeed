"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ChangePageProps {
  nextpage: string;
}

function ChangePage({ nextpage }: ChangePageProps) {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push(nextpage);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [router, nextpage]);

  return <></>;
}

export default ChangePage;
