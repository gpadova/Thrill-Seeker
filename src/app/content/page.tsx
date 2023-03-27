"use client";

import Link from "next/link";
import { ProSidebarProvider } from "react-pro-sidebar";
import styled from "styled-components";
import {BarOnSide} from "@/Components/sidebar";
import SearchPage from "@/Components/Search/search";

export default function Teste() {
  return (
    <ProSidebarProvider>
      <Page>
        <BarOnSide />
        <SearchPage />
      </Page>
    </ProSidebarProvider>
  );
}

const Page = styled.div`
  display: flex;
  height: 100vh;
`
