import React from 'react';
import {
  PublicBanner, LayoutDefault, ContainerDefault, PartialPublicHeader,
} from '@/components';
import PublicSearchBar from '@/components/features/public-search-bar';
import PublicEventList from '@/components/features/public-event-list';

const HomeView = () => {
  return (
    <LayoutDefault>
      <PartialPublicHeader />
      <ContainerDefault>
        <PublicBanner />
        <PublicSearchBar />
        <PublicEventList />
      </ContainerDefault>
    </LayoutDefault>
  );
};

export default HomeView;
