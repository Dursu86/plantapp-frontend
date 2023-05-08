import React from "react";
import { Header } from "../../core/components/header/header";
import { Pagination } from "../../core/components/pagination/pagination";
import PlantList from "../../core/components/plantList/plantList";
import styles from "./plantList.module.scss";

export default function PlantListPage() {
  return (
    <>
      <PlantList></PlantList>
      <span className={styles.pagination}>
        <Pagination></Pagination>
      </span>
      <Header></Header>
    </>
  );
}
