import React, { PureComponent } from 'react';
import {Container} from 'reactstrap';
import Featured from '../../components/Featured/featured.component';
import items from '../../mock-data';


class Homepage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            items: items
        }
    }

    render() {
        return (
            <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/homeheader.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Kenyan furniture</h1>
              <div className="fog-low">
                <img alt="..." src={require("../../assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("../../assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Exquisite furniture made with master craftsmanship just for you
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("../../assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            {/* <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            /> */}
          </a>
        </h6>
      </div>
      <Featured items={items}/>
    </>
        )
    }
}

export default Homepage