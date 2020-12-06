import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { Repos } from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { loading, user, getUser, getUserRepos, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    followers,
    following,
    public_repos,
    public_gists,
    html_url,
    hireable,
    company,
  } = user;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className='fas fa-check text-sucess'></i>
        ) : (
          <i className='fas fa-times-circle text-danger'></i>
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              alt={`${name} profile image`}
              src={avatar_url}
              className='round-img'
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>{location && <Fragment>Location:{location}</Fragment>}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit GitHub Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: {login}</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    <a href={blog}>{blog}</a>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers:{followers}</div>
        <div className='badge badge-sucess'>Following:{following}</div>
        <div className='badge badge-danger'>Public:{public_repos}</div>
        <div className='badge badge-dark'>Public Gists:{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
