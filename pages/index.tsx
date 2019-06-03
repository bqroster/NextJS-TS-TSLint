import * as React from 'react';
import { ajax } from 'rxjs/ajax';
import Link from 'next/link';
import Head from '~/components/head';
import Nav from '~/components/nav';

type TableDOMProps = {
  isMobile?: boolean
};

const TabletDOM: React.SFC<TableDOMProps> = 
({isMobile = true}) => {
  return (
    <div>
      THIS IS AWESOME {isMobile ? 'NEXT PROJECT' : ''}
    </div>
  );
};

let myData: any;

const getGitHubPage = () => {

  const githubUsers = `https://api.github.com/users?per_page=2`;

  ajax({
    url: githubUsers,
    method: 'GET',
    async: false // this will DO the same as async/await
  })
  .subscribe(
    res => {myData = res.response},
    err => console.log(err)
  );  
}

const GitHubData: React.SFC<{}> = () => {

  getGitHubPage();

  console.log('GitHub Data: ', myData);
  
  return (
    <div>GITHUB FETCH DATAA</div>
  );
};

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <TabletDOM />

    <GitHubData />

    <div className="hero">
      <h1 className="title">Welcome to Next!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
        </Link>
        <Link href="https://open.segment.com/create-next-app">
          <a className="card">
            <h3>Examples &rarr;</h3>
            <p>
              Find other example boilerplates on the{' '}
              <code>create-next-app</code> site
            </p>
          </a>
        </Link>
        <Link href="https://github.com/segmentio/create-next-app">
          <a className="card">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;