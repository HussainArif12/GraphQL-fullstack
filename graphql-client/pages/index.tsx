import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "../styles/Home.module.css";
import { request } from "graphql-request";
import { getAllPeopleQuery } from "../constants";
import Link from "next/link";
const Home: NextPage = ({
  result,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      {result.map((item: any) => {
        return <p key={item.id}>{item.name}</p>;
      })}
      <Link href={"/addpage"}>Add a new entry</Link>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const res = await request("http://localhost:4000/graphql", getAllPeopleQuery);
  const result = res.getAllPeople;
  return {
    props: {
      result,
    }, // will be passed to the page component as props
  };
};

export default Home;
