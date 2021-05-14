import house1 from "./img/house-1.jpeg";
import house2 from "./img/house-2.jpeg";
import house3 from "./img/house-3.jpeg";
import house4 from "./img/house-4.jpeg";
import house5 from "./img/house-5.jpeg";
import house6 from "./img/house-6.jpeg";

export default function Homes() {
  return (
    <section className="homes">
      <div className="home">
        <img src={house1} alt="House 1" className="home__img" />
        <div className="home__like">
          <i className="card__icon fa fa-heart" />
        </div>
        <h5 className="home__name">Beautiful Family House</h5>
        <div className="home__location">
          <i className="card__icon fa fa-map-marker" />
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <i className="card__icon fa fa-user" />
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <i className="card__icon fa fa-expand" />
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="card__icon fa fa-key" />
          <p>$1.200.000</p>
        </div>
        <button className="btn home__button">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={house2} alt="House 2" className="home__img" />
        <div className="home__like">
          <i className="card__icon fa fa-heart" />
        </div>
        <h5 className="home__name">Modern Glass Villa</h5>
        <div className="home__location">
          <i className="card__icon fa fa-map-marker" />
          <p>Canada</p>
        </div>
        <div className="home__rooms">
          <i className="card__icon fa fa-user" />
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <i className="card__icon fa fa-expand" />
          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="card__icon fa fa-key" />
          <p>$2.750.000</p>
        </div>
        <button className="btn home__button">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={house3} alt="House 3" className="home__img" />
        <div className="home__like">
          <i className="card__icon fa fa-heart" />
        </div>
        <h5 className="home__name">Cozy country House</h5>
        <div className="home__location">
          <i className="card__icon fa fa-map-marker" />
          <p>UK</p>
        </div>
        <div className="home__rooms">
          <i className="card__icon fa fa-user" />
          <p>4 rooms</p>
        </div>
        <div className="home__area">
          <i className="card__icon fa fa-expand" />
          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="card__icon fa fa-key" />
          <p>$850.000</p>
        </div>
        <button className="btn home__button">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={house4} alt="House 4" className="home__img" />
        <div className="home__like">
          <i className="card__icon fa fa-heart" />
        </div>
        <h5 className="home__name">Large Rustical Villa</h5>
        <div className="home__location">
          <i className="card__icon fa fa-map-marker" />
          <p>Portugal</p>
        </div>
        <div className="home__rooms">
          <i className="card__icon fa fa-user" />
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <i className="card__icon fa fa-expand" />
          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="card__icon fa fa-key" />
          <p>$1.950.000</p>
        </div>
        <button className="btn home__button">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={house5} alt="House 5" className="home__img" />
        <div className="home__like">
          <i className="card__icon fa fa-heart" />
        </div>
        <h5 className="home__name">Majestic Palace House</h5>
        <div className="home__location">
          <i className="card__icon fa fa-map-marker" />
          <p>Germany</p>
        </div>
        <div className="home__rooms">
          <i className="card__icon fa fa-user" />
          <p>18 rooms</p>
        </div>
        <div className="home__area">
          <i className="card__icon fa fa-expand" />
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="card__icon fa fa-key" />
          <p>$9.500.000</p>
        </div>
        <button className="btn home__button">Contact Realtor</button>
      </div>

      <div className="home">
        <img src={house6} alt="House 6" className="home__img" />
        <div className="home__like">
          <i className="card__icon fa fa-heart" />
        </div>
        <h5 className="home__name">Modern Family Apartment</h5>
        <div className="home__location">
          <i className="card__icon fa fa-map-marker" />
          <p>Italy</p>
        </div>
        <div className="home__rooms">
          <i className="card__icon fa fa-user" />
          <p>3 rooms</p>
        </div>
        <div className="home__area">
          <i className="card__icon fa fa-expand" />
          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <i className="card__icon fa fa-key" />
          <p>$600.000</p>
        </div>
        <button className="btn home__button">Contact Realtor</button>
      </div>
    </section>
  );
}
