/** @format */

import React, { Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Loading from "../ui/Loading/Loading";

interface ComponentType {
  children?: React.ReactNode;
}

export default function Lazy_Loading({ children }: ComponentType) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading/>}>{children}</Suspense>
    </ErrorBoundary>
  );
}
