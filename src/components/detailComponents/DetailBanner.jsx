import "../homeComponents/AdBanner.css"
import salmon from "../../assets/salmon.jpg"


const DetailBanner = ({ image, title }) => {

    return (
        <div className="adban-container" style={{
            background: `linear-gradient(
              190deg,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8)),
              url(${image})`,
            backgroundSize: "cover",
            fontFamily: "helvetica"
          }}>
            <h1>{title}</h1>
        </div>
    )
}

export default DetailBanner