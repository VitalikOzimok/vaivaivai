import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Logo from "../../assets/Aerosvit-Airlines-Logo.png";
import LogoTw from "../../assets/Emerald-Airlines-Logo.png";
import { Link } from "react-router-dom";

export default function ProductPage({ item }) {
  const { id } = useParams();
  const location = useLocation();
  const flight = location.state?.flight;
  if (!flight) {
    return <p>Данные о рейсе недоступны</p>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="py-3 inline-block hover:bg-sky-100 rounded-md border-[1px] border-sky-100 hover:border-sky-200">
        <Link to={"/"}>
          <img src={LogoTw} alt="" height={70} width={70} />
        </Link>
      </div>

      <div className="bg-sky-50  p-3">
        №{id}
        <div>
          <div className="flex items-center justify-between max-md:flex-col">
            <div className="flex items-center gap-3">
              <p className="text-5xl font-semibold text-blue-300">
                {flight.price.total}
              </p>
              <p className="text-5xl font-semibold text-blue-300">
                {flight.price.currency}
              </p>
            </div>

            <img src={Logo} alt="s" height={190} width={290} />
          </div>
          <p>{flight.itineraries[0].segments[0].arrival.at}</p>
          <p>Время полёта : {flight.itineraries[0].segments[0].duration}</p>
          <p>
            Маршрут:{" "}
            {flight.itineraries[0].segments
              .map(
                (segment) =>
                  `${segment.departure.iataCode} → ${segment.arrival.iataCode}`
              )
              .join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
