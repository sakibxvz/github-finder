import React, { Fragment, Component } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Repos } from "../repos/Repos";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html,
      url,
      followers,
      following,
      public_repos,
      public_gists,
      html_url,
      hireable,
        company,
    } = this.props.user;
    const { loading } = this.props;
    const { repos } = this.props;
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
                src={avatar_url}
                alt={`${name} profile image`}
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
                      <strong>Username: </strong>
                      {login}
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
                      <strong>Website:</strong>
                      {blog}
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
            <Repos repos={repos}/>
      </div>
    );
  }
}

export default User;
