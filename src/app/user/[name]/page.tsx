"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { getGithubUser } from "@/services/getGithubUser";
import styles from "./User.module.scss";

import {
  getAllGithubReposResponse,
  getGithubUserResponse,
} from "@/types/services";
import { getAllGithubRepos } from "@/services/getAllGithubRepos";
import RepositoryItem from "@/components/RepositoryItem";
import NotFound from "@/components/NotFound";

const User = () => {
  const [user, setUser] = useState<getGithubUserResponse | null>(null);
  const [repos, setRepos] = useState<getAllGithubReposResponse | null>(null);
  const [isDesceding, setIsDesceding] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);

  const params = useParams<{ name: string }>();

  useEffect(() => {
    (async () => {
      const user = await getGithubUser(params.name);
      const repos = await getAllGithubRepos(params.name);

      if (!user.name) {
        setUserNotFound(true);
        setUser({} as any);
        setRepos([]);
        return;
      }

      const reposAsceding = sortDescending(repos);

      setUser(user);
      setRepos(reposAsceding);
    })();
  }, [params.name]);

  if (!user || !repos) {
    return null;
  }

  function sortAscending(arr: any[]) {
    const sortArray = arr.sort((a, b) => {
      return a.stargazers_count - b.stargazers_count;
    });

    return sortArray;
  }

  function sortDescending(arr: any[]) {
    const sortArray = arr.sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    });

    return sortArray;
  }

  const changeRepositoriesOrder = () => {
    if (isDesceding) {
      setRepos(sortAscending(repos));
      setIsDesceding(false);
      return;
    }
    setRepos(sortDescending(repos));
    setIsDesceding(true);
  };

  return (
    <>
      {!userNotFound ? (
        <main className={styles.main}>
          <div className={styles.container}>
            <Image
              src={`${user.avatar_url}`}
              alt="user image"
              width={236}
              height={236}
              className={styles.avatar}
            />
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>

            <div className={styles.followersNFollowing}>
              <h5>seguidores: {user.followers}</h5>
              <h5>seguindo: {user.following}</h5>
            </div>

            <h4>{user.bio}</h4>

            <div>
              <RepositoryItem
                changeRepositoriesOrder={changeRepositoriesOrder}
                repositories={repos}
                isDesceding={isDesceding}
              />
            </div>
          </div>
        </main>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default User;
