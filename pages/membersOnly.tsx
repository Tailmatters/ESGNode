import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

const membersOnly = () => 
{
    return (
        <h1>Members Only!!!</h1>
    )
}
export default membersOnly

export const getServerSideProps = withPageAuthRequired();