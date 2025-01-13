import React, { useState, useEffect } from "react";
import СartItem from "../../components/cartItem";
import { Menu, X } from "lucide-react";
import Logo_two from "../../assets/Emerald-Airlines-Logo.png";
import { Link } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState(null);
  const [flightData, setFlightData] = useState(null);
  const [origin, setOrigin] = useState("JFK");
  const [destination, setDestination] = useState("LAX");

  // Функция для получения токена
  const fetchToken = async () => {
    try {
      const response = await fetch(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: "oVr2sKKglRpRrfXpGZcGX5TqAq0XLbHp",
            client_secret: "P3Jsz75YPnRyVctd",
          }),
        }
      );

      const data = await response.json();
      setToken(data.access_token); // Устанавливаем токен
      console.log(data.access_token);
    } catch (error) {
      console.error("Ошибка получения токена:", error);
    }
  };
  const fetchFlightOffersDynamic = async (
    token,
    origin,
    destination,
    date,
    adults
  ) => {
    try {
      const url = new URL(
        "https://test.api.amadeus.com/v2/shopping/flight-offers"
      );
      url.searchParams.append("originLocationCode", origin);
      url.searchParams.append("destinationLocationCode", destination);
      url.searchParams.append("departureDate", date);
      url.searchParams.append("adults", adults);
      url.searchParams.append("max", "20");
      url.searchParams.append("currencyCode", "USD");

      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFlightData(data);
      } else {
        console.error(
          "Ошибка при вызове API:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Ошибка выполнения запроса:", error);
    }
  };

  // Запрашиваем токен при загрузке
  useEffect(() => {
    fetchToken();
  }, []);

  // Запрашиваем данные, когда токен обновлён
  useEffect(() => {
    if (token) {
      fetchFlightOffersDynamic(token, origin, destination, "2025-01-15", 1);
    }
  }, [token, origin, destination]); // Выполнится, когда `token` обновится
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-sky-50 ">
      <section className="w-11/12 mx-auto">
        <div className="grid grid-cols-[1fr,3fr] gap-5 max-lg:block ">
          <div className="grid bg-blue-100 h-[165px] max-lg:hidden rounded-md ">
            <div>
              <div className=" p-3">
                <h2 className="text-center">Поиск авиабилетов</h2>
                <div>
                  <div className="bg-white rounded-md mt-2 p-1 whitespace-nowrap">
                    <label className="text-gray-400">Откуда : </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value.toUpperCase())}
                    />
                  </div>

                  <div className="bg-white rounded-md mt-2 p-1 whitespace-nowrap">
                    <label className="text-gray-400">Куда : </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) =>
                        setDestination(e.target.value.toUpperCase())
                      }
                    />
                  </div>
                </div>
                <button
                  className="bg-white w-full rounded-md p-1 mt-2 hover:bg-black hover:text-white transition duration-300"
                  onClick={fetchFlightOffersDynamic}
                >
                  Найти
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between   items-center mb-5 z-20 bg-white rounded-md shadow-md">
              <Link to={"/"}>
                <img src={Logo_two} alt="s" height={70} width={70} />
              </Link>

              <div
                className="max-lg:block hidden p-3  hover:text-red-400 transition duration-200 cursor z-20"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <Menu />
              </div>
              <div className=" p-5 bg-red-200 w-1/2">
                <h1 className="text-center">Самый дешёвый</h1>
              </div>
              <div className="p-5 bg-green-200 w-1/2">
                <h2 className="text-center">Самый быстрый</h2>
              </div>
            </div>
            <СartItem flightData={flightData} />
          </div>
          {isOpen && (
            <div>
              <div className="absolute top-0 h-[165px] w-[280px] bg-blue-100 rounded-md mt-20 shadow-lg z-20 lg:hidden">
                <div className=" p-3">
                  <div className="flex justify-between items-center">
                    <h2>Поиск авиабилетов</h2>
                    <X
                      className="h- hover:text-red-400 cursor-pointer transition duration-300"
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  </div>
                  <div>
                    <div className="bg-white rounded-md mt-2 p-1">
                      <label className="text-gray-400">Откуда : </label>
                      <input
                        type="text"
                        value={origin}
                        onChange={(e) =>
                          setOrigin(e.target.value.toUpperCase())
                        }
                      />
                    </div>

                    <div className="bg-white rounded-md mt-2 p-1">
                      <label className="text-gray-400">Куда : </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) =>
                          setDestination(e.target.value.toUpperCase())
                        }
                      />
                    </div>
                  </div>
                  <button
                    className="bg-white w-full rounded-md p-1 mt-2 hover:bg-black hover:text-white transition duration-300"
                    onClick={fetchFlightOffersDynamic}
                  >
                    Найти
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
