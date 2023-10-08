import Image from "next/image";

import { RepositoryItemProps } from "@/types/components";
import styles from "./RepositoryItem.module.scss";
import arrow from "../../assets/arrow.svg";

const RepositoryItem = ({
  repositories,
  changeRepositoriesOrder,
  isDesceding,
}: RepositoryItemProps) => {
  const handleChangeFilter = () => {
    changeRepositoriesOrder();
  };

  return (
    <>
      <div className={styles.filter} onClick={handleChangeFilter}>
        <p>filtrar por estrelas:</p>
        <Image
          src={arrow}
          width={30}
          height={30}
          alt="arrow"
          className={isDesceding ? styles.flipImage : ""}
        />
      </div>

      <div className={styles.repositoriesList}>
        {repositories.map((rep) => {
          return (
            <div key={rep.id} className={styles.repositoryItem}>
              <p className={styles.repositoryName}>{rep.name}</p>

              <div className={styles.repositoryNumbers}>
                <p>
                  estrelas:
                  {rep.stargazers_count}
                </p>
                <p>linguagem: {rep.language}</p>
              </div>

              <a href={rep.html_url} target="_blank">
                CLICK AQUI PARA VER NO GITHUB
              </a>

              <p className={styles.repDesc}>{rep.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RepositoryItem;
