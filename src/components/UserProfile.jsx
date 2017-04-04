import React, { Component } from 'react';

class UserProfile extends Component {

  handleClick_exit(){
    this.props.onClick_handleExit();

    this.setState({
      userProfileFormClosed: true,
      userFormClosed: false,
      profileData: []
    })
  }

  render() {
    const userProfileData = this.props.userProfileData;

    return (
      <div className="user-profile-page">
        <div className="page-title">{userProfileData.username}'s Profile</div>
        <div className="large-title">General Information</div>
        <div className="general-info">
          <div className="info-slot">
            <div className="category">ID</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.id}</div>
          </div>
          <div className="info-slot">
            <div className="category">NAME</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.name}</div>
          </div>
          <div className="info-slot">
            <div className="category">EMAIL</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.email}</div>
          </div>
          <div className="info-slot">
            <div className="category">PHONE</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.phone}</div>
          </div>
          <div className="info-slot">
            <div className="category">WEBSITE</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.website}</div>
          </div>
          <div className="info-slot">
            <div className="category">COMPANY</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.company.name}</div>
          </div>
        </div>
        <div className="large-title">Address</div>
        <div className="address-info">
          <div className="info-slot">
            <div className="category">STREET</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.address.street}</div>
          </div>
          <div className="info-slot">
            <div className="category">SUITE</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.address.suite}</div>
          </div>
          <div className="info-slot">
            <div className="category">CITY</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.address.city}</div>
          </div>
          <div className="info-slot">
            <div className="category">ZIP CODE</div>
            <div className="line-spacer"></div>
            <div className="information">{userProfileData.address.zipcode}</div>
          </div>
        </div>
        <div className="user-profile-exit" onClick={this.handleClick_exit.bind(this)}>EXIT PROFILE</div>
      </div>
    );
  }
}

export default UserProfile;
