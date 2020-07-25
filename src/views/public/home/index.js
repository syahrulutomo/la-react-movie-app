import React from 'react';
import { PublicBanner, PublicSearchBar, LayoutDefault, PublicEventList } from '@/components';

const containerStyle = {
  paddingBottom: "32px",
  paddingLeft: "20px",
  paddingRight: "20px",
  boxSizing: "border-box",
  width: "100%",
  position: "relative",
  overflowX: "hidden"
}

export function HomeView() {
  return (
    <LayoutDefault>
      <PublicBanner/>
      <PublicSearchBar />
      <PublicEventList />
    </LayoutDefault>
  );
}
