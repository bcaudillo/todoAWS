import React, { useReducer } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createTodo,updateTodo, deleteTodo } from './graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { listTodos, getTodo } from './graphql/queries'
import { AnalyticsBrowser } from '@segment/analytics-next';

import awsExports from './aws-exports';
Amplify.configure(awsExports); 

const analytics = AnalyticsBrowser.load({writeKey: 'xX83OXjQUmxg4rohocUpRigxI4sELrYV', useQueryString: false})
const client = generateClient();

analytics.identify('Rea Test')


async function storeTodo() {
  const result = await client.graphql({
    query: createTodo,
    variables: {
      input : {
        name: "wash windows"
      }
    }
  })
  analytics.track('store to do',{data: result})
}
async function changeTodo() {
  const result = await client.graphql({
    query: updateTodo,
    variables: {
      input : {
        id: "8d6e8681-017a-4edb-9bd0-c8f4b25aebce",
        name: "updated"
      }
    }
  });
  analytics.track('store to do',{data: result})
  }

  async function removeTodo() {
    const result = await client.graphql({
      query: deleteTodo,
      variables: {
        input : {
          id: "8d6e8681-017a-4edb-9bd0-c8f4b25aebce",
        }
      }
    });
    analytics.track('store to do',{data: result})
    }

async function fetchTodos(){
  const result = await client.graphql({
    query: listTodos
  });
console.log(result)
}

async function fetchTodo(){
  const result = await client.graphql({
    query: getTodo,
    variables: { id: "8d6e8681-017a-4edb-9bd0-c8f4b25aebce"}
  });
console.log(result)
}

const App = () => {
  return (
    <Authenticator>
      {({signOut, user})=>(
        <main>
          <h1>Welcome {user.username}</h1>
          <button onClick={signOut}>Sign Out</button>
          <button onClick = {storeTodo}>New Todo</button>
          <button onClick = {fetchTodos}>Fetch Todos</button>
          <button onClick = {fetchTodo}>Fetch Todo</button>
          <button onClick = {changeTodo}>Change Todo</button>
          <button onClick = {removeTodo}>Delete Todo</button>



        </main>
      )}
    </Authenticator>
  );
}

export default App; 