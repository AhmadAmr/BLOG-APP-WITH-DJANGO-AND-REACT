import React from "react";
import Category from './Category'


const Sidebar = () => {
  return (
    <div className="">
      <div className="card my-4">
        <h5 className="card-header">Search</h5>
        <div className="card-body">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
            />
            <span className="input-group-append">
              <button className="btn btn-secondary" type="button">
                Go!
              </button>
            </span>
          </div>
        </div>
      </div>

      <Category />

      <div className="card my-4">
        <h5 className="card-header">Side Widget</h5>
        <div className="card-body">
          You can put anything you want inside of these side widgets. They are
          easy to use, and feature the new Bootstrap 4 card containers!
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
