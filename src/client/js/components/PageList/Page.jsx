import React from 'react';
import PropTypes from 'prop-types';

import UserPicture from '../User/UserPicture';
import PageListMeta from './PageListMeta';
import PagePathLabel from './PagePathLabel';

export default class Page extends React.Component {

  render() {
    const {
      page, noLink,
    } = this.props;

    let pagePathElem = <PagePathLabel page={page} />;
    if (!noLink) {
      pagePathElem = <a className="text-break" href={page.path}>{pagePathElem}</a>;
    }

    return (
      <>
        <UserPicture user={page.lastUpdateUser} noLink={noLink} />
        <span className="ml-1">{pagePathElem}</span>
        <PageListMeta page={page} />
      </>
    );
  }

}

Page.propTypes = {
  page: PropTypes.object.isRequired,
  noLink: PropTypes.bool,
};

Page.defaultProps = {
  noLink: false,
};
