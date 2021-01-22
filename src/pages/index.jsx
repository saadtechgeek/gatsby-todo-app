import React, {useState,useRef} from 'react';
import { useMutation,useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import "./styles.css";
const faunadb = require('faunadb'),
  q = faunadb.query;

const Home = () => {
  

    return (
        <div className="container">
            Hello World!!
        </div>
    )
}
export default Home;