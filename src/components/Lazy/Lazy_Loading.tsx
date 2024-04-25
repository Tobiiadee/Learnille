/** @format */

import React, { Suspense } from "react";
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner";

interface ComponentType {
  childComponent: React.ReactNode;
}

export default function Lazy_Loading({ childComponent }: ComponentType) {
  return <Suspense fallback={<LoadingSpinner />}>{childComponent}</Suspense>;
}
