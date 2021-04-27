import React from "react";

const Users = ({ data }) => {
    return (
        <div>
            <div className="add-inner">
                {data.map((user) => {
                    const { id, userName, years, img } = user;
                    return (
                        <div key={id} className="add-item">
                            <div className="add-item-img">
                                <img src={img} alt={userName} />
                            </div>
                            <div className="add-item-info">
                                <div className="add-item-name">{userName}</div>
                                <div className="add-item-year">{years}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
