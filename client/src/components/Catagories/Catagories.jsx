import React from "react";
import "./Catagories.scss";
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <div className="catagories">
      <div className="col">
        <div className="row">
          <img
            src="https://cdnsm5-ss18.sharpschool.com/UserFiles/Servers/Server_663947/Image/bigstock-147279827.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://cdn.bap-software.net/2024/02/22165839/testdebug2.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://cdnsm5-ss18.sharpschool.com/UserFiles/Servers/Server_663947/Image/bigstock-147279827.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://cdn.bap-software.net/2024/02/22165839/testdebug2.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://cdnsm5-ss18.sharpschool.com/UserFiles/Servers/Server_663947/Image/bigstock-147279827.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Accesories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://cdn.bap-software.net/2024/02/22165839/testdebug2.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
