import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { request } from "graphql-request";
import { addPersonMutation } from "../constants";
import { useForm } from "react-hook-form";

const AddPage: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    const response = await request(
      "http://localhost:4000/graphql",
      addPersonMutation,
      data
    );
    console.log(response);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("name")} />
        <input type="submit" />
      </form>
    </div>
  );
};
export default AddPage;
