import './Katalog.css'
import CardImage from '/public/Katalog/card.png'
import BagImage from '/public/Katalog/bag.png'
import LikeImage from '/public/Katalog/like.png'


export default function Katalog(){

    return(
        <div className="katalog">
            <div className="container">
                <div className="links">
                    <p className="text">Главная\Каталог</p>
                </div>
                <div className="filters">
                    <div className="filters-content">
                        <a href="" className="filter">Все</a>
                        <a href="" className="filter">Топ</a>
                        <a href="" className="filter">Низ</a>
                        <a href="" className="filter">Обувь</a>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards-content">
                        <div className="card">
                            <img src={CardImage} alt="" className="" />
                            <p className="name">Рубашка СВЭГ</p>
                            <div className="price-icons">
                                <p className="price">9999 ₽</p>
                                <div className="icons">
                                    <img src={LikeImage} alt="" className="" />
                                    <img src={BagImage} alt="" className="" />                       
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={CardImage} alt="" className="" />
                            <p className="name">Рубашка СВЭГ</p>
                            <div className="price-icons">
                                <p className="price">9999 ₽</p>
                                <div className="icons">
                                    <img src={LikeImage} alt="" className="" />
                                    <img src={BagImage} alt="" className="" />                       
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={CardImage} alt="" className="" />
                            <p className="name">Рубашка СВЭГ</p>
                            <div className="price-icons">
                                <p className="price">9999 ₽</p>
                                <div className="icons">
                                    <img src={LikeImage} alt="" className="" />
                                    <img src={BagImage} alt="" className="" />                       
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={CardImage} alt="" className="" />
                            <p className="name">Рубашка СВЭГ</p>
                            <div className="price-icons">
                                <p className="price">9999 ₽</p>
                                <div className="icons">
                                    <img src={LikeImage} alt="" className="" />
                                    <img src={BagImage} alt="" className="" />                       
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={CardImage} alt="" className="" />
                            <p className="name">Рубашка СВЭГ</p>
                            <div className="price-icons">
                                <p className="price">9999 ₽</p>
                                <div className="icons">
                                    <img src={LikeImage} alt="" className="" />
                                    <img src={BagImage} alt="" className="" />                       
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={CardImage} alt="" className="" />
                            <p className="name">Рубашка СВЭГ</p>
                            <div className="price-icons">
                                <p className="price">9999 ₽</p>
                                <div className="icons">
                                    <img src={LikeImage} alt="" className="" />
                                    <img src={BagImage} alt="" className="" />                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}