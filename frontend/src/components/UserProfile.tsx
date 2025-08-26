function UserProfile() {
    return (
        <div className="right-navbar">
            <ul>
                <li>
                    <img src="/message.png" className="icon" />
                </li>
                <li>
                    <img src="/bell.png" className="icon" />
                </li>
            </ul>
            <div className="user-profile">
                <img src="/user.png" />
            </div>
        </div>
    );
}

export default UserProfile;
